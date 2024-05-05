import styles from "@/styles/FeaturedAuctionCards.module.scss";
import AuctionCard from "../AuctionCard";

export default function FeaturedAuctionCards() {
    return(
        <>
            <div className={styles.featuredAuctionCardsWrapper}>
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
            </div>
        </>
    )
}