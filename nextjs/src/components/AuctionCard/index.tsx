import styles from "@/styles/AuctionCard.module.scss";

export default function AuctionCard({ imagePath, title, status, slices, totalSlices, auctionTime }: any) {
    return(
        <>
            <div className={styles.auctionCardWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={imagePath} />

                    <div className={styles.infoWrapper}>
                        <div className={styles.infoOnTop}>
                            <h2>{title}</h2>
                        </div>

                        <div className={styles.infoOnBottom}>
                            <div className={styles.tokenAuctionData}>
                                {
                                    status == 'Started' ?
                                    <span className={`${styles.spanHeader} ${styles.started}`}>Auction {status}</span>
                                    :
                                    <span className={`${styles.spanHeader} ${styles.pending}`}>Auction {status}</span>

                                }
                                <span>{auctionTime}</span>
                            </div>

                            <div className={styles.tokenAuctionData}>
                                <span className={styles.spanHeader}>ReDigi Slices</span>
                                <span>{slices}/{totalSlices}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}