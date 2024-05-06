import styles from "@/styles/AuctionCard.module.scss";

export default function AuctionCard({ imagePath }: any) {
    return(
        <>
            <div className={styles.auctionCardWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={`/${imagePath}.png`} />

                    <div className={styles.infoWrapper}>
                        <div className={styles.infoOnTop}>
                            <h2>Nike das Esquom Unique Edition</h2>
                        </div>

                        <div className={styles.infoOnBottom}>
                            <div className={styles.tokenAuctionData}>
                                <span className={styles.spanHeader}>Auction Started</span>
                                <span>01D 15:23:13</span>
                            </div>

                            <div className={styles.tokenAuctionData}>
                                <span className={styles.spanHeader}>ReDigi Slices</span>
                                <span>03/10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}