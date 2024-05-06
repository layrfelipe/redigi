import styles from '@/styles/TrendingList.module.scss'

export default function TrendingList({ listType }: any) {

    const auctions = [
        { id: 1, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH' },
        { id: 2, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH' },
        { id: 3, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH' },
        { id: 4, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH' },
        { id: 4, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH' }
    ];

    return (
        <>
            <div className={styles.tableWrapper}>
                <h3>{listType == 'auction' ? 'Trending Auctions' : 'Trending Slices'}</h3>

                {auctions.map(auction => (
                    <div className={styles.tableRow} key={auction.id}>
                        <div className={styles.tableData}>
                            <div className={styles.imageWrapper}>
                                <img src="/sneaker.png"/>
                            </div>
                        </div>
                        <div className={styles.tableData} id={styles.productName}>{auction.title}</div>
                        <div className={styles.tableData}><span className={styles.spanHeader}>Slices</span><span>{auction.slices}/{auction.totalSlices}</span></div>
                        <div className={styles.tableData}><span className={styles.spanHeader}>Starting bid</span><span>{auction.startingBid}</span></div>
                        <div className={styles.tableData}><button>{listType == 'auction' ? 'Bid' : 'Get slice'}</button></div>
                    </div>
                ))}




            </div>
        </>
    )
}