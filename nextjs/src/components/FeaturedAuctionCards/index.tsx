import styles from "@/styles/FeaturedAuctionCards.module.scss";
import AuctionCard from "../AuctionCard";

export default function FeaturedAuctionCards() {
    const auctions = [
        { id: 1, title: 'Nike das Esquom Unique Edition', slices: 3, totalSlices: 10, imagePath: '/sneaker.png', status: "Started", auctionTime: '01D 15:23:13' },
        { id: 2, title: 'Adidas Fly Ultimate Exclusive', slices: 5, totalSlices: 15, imagePath: '/sneaker2.png', status: "Pending", auctionTime: '12:10:39' },
        { id: 3, title: 'Jordan Last City Series', slices: 3, totalSlices: 25, imagePath: '/sneaker3.png', status: "Started", auctionTime: '02D 18:38:07' },
        { id: 4, title: 'Puma Green Beast Glow', slices: 2, totalSlices: 10, imagePath: '/sneaker4.png', status: "Started", auctionTime: '01D 22:51:18' }
    ]; 

    return(
        <>
            <div className={styles.featuredAuctionCardsWrapper}>
                {auctions.map(auction => (
                    <AuctionCard
                        key={auction.id}
                        imagePath={auction.imagePath}
                        title={auction.title}
                        status={auction.status}
                        slices={auction.slices}
                        totalSlices={auction.totalSlices}
                        auctionTime={auction.auctionTime}
                    />
                ))}
            </div>
        </>
    )
}