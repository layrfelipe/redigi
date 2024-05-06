import styles from "@/styles/NFTCard.module.scss";

export default function NFTCard({ imagePath }: any) {
    return(
        <>
            <div className={styles.NFTCardWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={`/${imagePath}.png`} />

                    <div className={styles.infoWrapper}>
                        <div className={styles.infoOnTop}>
                            <h2>Nike das Esquom Unique Edition</h2>
                        </div>

                        <div className={styles.infoOnBottom}>
                            <div className={styles.tokenAuctionData}>
                                <span className={styles.spanHeader}>Value</span>
                                <span>4.5 ETH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}