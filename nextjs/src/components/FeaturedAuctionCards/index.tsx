import styles from "@/styles/FeaturedAuctionCards.module.scss";
import AuctionCard from "../AuctionCard";

export default function FeaturedAuctionCards() {
    return(
        <>
            <div className={styles.featuredAuctionCardsWrapper}>
                <AuctionCard imagePath="sneaker"/>
                <AuctionCard imagePath="sneaker2"/>
                <AuctionCard imagePath="sneaker3"/>
                <AuctionCard imagePath="sneaker4"/>
            </div>
        </>
    )
}