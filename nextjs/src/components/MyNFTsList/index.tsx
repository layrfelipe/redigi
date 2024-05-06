import styles from "@/styles/MyNFTsList.module.scss";
import NFTCard from "../NFTCard";

export default function MyNFTsList() {
    return(
        <>
            <div className={styles.myNFTsCardsWrapper}>
                <NFTCard imagePath="sneaker"/>
                <NFTCard imagePath="sneaker2"/>
                <NFTCard imagePath="sneaker3"/>
                <NFTCard imagePath="sneaker4"/>
            </div>
        </>
    )
}