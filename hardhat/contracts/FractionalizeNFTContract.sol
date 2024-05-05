// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// ERC20 Token Contract
contract ERC20Token is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply, address owner) ERC20(name, symbol) {
        _mint(owner, initialSupply);
    }
    
    // Optional: Burn function to destroy tokens - this would be necessary for withdrawing NFTs.
    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
}

// ERC20 Token Factory
contract ERC20TokenFactory {
    function createToken(string memory name, string memory symbol, uint256 initialSupply, address owner) public returns (address) {
        ERC20Token newToken = new ERC20Token(name, symbol, initialSupply, owner);
        return address(newToken);
    }
}

// Fractionalization Contract
contract FractionalizeNFT is Ownable {
    ERC20TokenFactory public tokenFactory;

    // Struct to store NFT and ERC20 details
    struct NFTDetails {
        address nftAddress;
        uint256 nftId;
        address erc20Address;
    }

    struct ERC20Details {
        uint256 collectedAmount;
        bool exists;
    }    

    receive() payable external {}
    
    // Mapping from NFT contract addresses and IDs to NFT details
    mapping(address => mapping(uint256 => NFTDetails)) public nftToToken;

    // Mapping to track ERC20 tokens created by the contract
    mapping(address => ERC20Details) public createdTokens;

    // Constructor to initialize the ERC20 token factory
    constructor(address _tokenFactoryAddress) {
        tokenFactory = ERC20TokenFactory(_tokenFactoryAddress);
    }

    // Function to deposit an NFT and create a corresponding ERC20 tok
    function depositNFTAndCreateToken(address nftAddress, uint256 nftId, string memory tokenName, string memory tokenSymbol, uint256 initialSupply) public {
        IERC721 nft = IERC721(nftAddress);
        nft.transferFrom(msg.sender, address(this), nftId);
        
        address erc20Address = tokenFactory.createToken(tokenName, tokenSymbol, initialSupply, msg.sender);
        
        // Store the details in the mapping
        nftToToken[nftAddress][nftId] = NFTDetails(nftAddress, nftId, erc20Address);
        createdTokens[erc20Address] = ERC20Details(1000, true);
    }


    function burnERC20(address erc20Address, uint256 amount) public payable {
        require(createdTokens[erc20Address].exists, "Token was not created by this contract");
        
        ERC20Token token = ERC20Token(erc20Address);
        token.transferFrom(msg.sender, address(this), amount);
        uint256 totalSupply = token.totalSupply();
        token.burn(amount); // Burn the tokens
        uint256 payout = (createdTokens[erc20Address].collectedAmount * amount) / totalSupply;
        (bool sent, bytes memory data) = msg.sender.call{value: payout}("");
        require(sent, "Failed to send Ether");
    }

    function getTokenCurrentValue(address erc20Address) public view returns (uint256) {
        ERC20Token token = ERC20Token(erc20Address);
        uint256 totalSupply = token.totalSupply();
        return createdTokens[erc20Address].collectedAmount / totalSupply;
    }    

    // Function to withdraw an NFT, requiring that all ERC20 tokens be burned
    // function withdrawNFT(address nftAddress, uint256 nftId) public {
    //     NFTDetails storage details = nftToToken[nftAddress][nftId];
    //     require(details.erc20Address != address(0), "ERC20 token not created");
        
    //     ERC20Token token = ERC20Token(details.erc20Address);
    //     require(token.balanceOf(msg.sender) == token.totalSupply(), "Not all tokens are with owner");
        
    //     token.burn(token.totalSupply()); // Burn all tokens
    //     IERC721(details.nftAddress).transferFrom(address(this), msg.sender, details.nftId);
    // }
}