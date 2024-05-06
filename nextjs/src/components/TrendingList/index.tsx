import styles from '@/styles/TrendingList.module.scss'
import { FaHand } from 'react-icons/fa6';

export default function TrendingList({ listType }: any) {

    const auctions = [
        { id: 1, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH', imagePath: "/miniature.png" },
        { id: 2, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH', imagePath: "/miniature2.png" },
        { id: 3, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH', imagePath: "/miniature3.png" },
        { id: 4, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH', imagePath: "/miniature4.png" },
        { id: 5, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '2.0 ETH', imagePath: "/miniature5.png" }
    ];

    const slices = [
        { id: 6, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '0.5 ETH', imagePath: "/miniature6.png" },
        { id: 7, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '0.5 ETH', imagePath: "/miniature7.png" },
        { id: 8, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '0.5 ETH', imagePath: "/miniature8.png" },
        { id: 9, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '0.5 ETH', imagePath: "/miniature9.png" },
        { id: 10, title: 'Nike das Esquom Unique Edition', slices: 980, totalSlices: 1000, startingBid: '0.5 ETH', imagePath: "/miniature10.png" }
    ];

    return (
        <>
            <div className={styles.tableWrapper}>
                <h3>{listType == 'auction' ? 'Trending Auctions' : 'Trending Slices'}</h3>

                {listType=='auction' &&
                    <>
                        {auctions.map(auction => (
                            <div className={styles.tableRow} key={auction.id}>
                                <div className={styles.tableData}>
                                    <div className={styles.imageWrapper}>
                                        <img src={auction.imagePath}/>
                                    </div>
                                </div>
                                <div className={styles.tableData} id={styles.productName}>{auction.title}</div>
                                <div className={styles.tableData}><span className={styles.spanHeader}>Slices</span><span>{auction.slices}/{auction.totalSlices}</span></div>
                                <div className={styles.tableData}><span className={styles.spanHeader}>Starting bid</span><span>{auction.startingBid}</span></div>
                                <div className={styles.tableData}><button>{listType == 'auction' ? 'Bid' : 'Get slice'} <FaHand className={styles.bidIcon} color={"#2e2e2e"} /></button></div>
                            </div>
                        ))}
                    </>
                }

                {listType=='slices' &&
                    <>
                        {slices.map(slice => (
                            <div className={styles.tableRow} key={slice.id}>
                                <div className={styles.tableData}>
                                    <div className={styles.imageWrapper}>
                                        <img src={slice.imagePath}/>
                                    </div>
                                </div>
                                <div className={styles.tableData} id={styles.productName}>{slice.title}</div>
                                <div className={styles.tableData}><span className={styles.spanHeader}>Slices</span><span>{slice.slices}/{slice.totalSlices}</span></div>
                                <div className={styles.tableData}><span className={styles.spanHeader}>Starting bid</span><span>{slice.startingBid}</span></div>
                                <div className={styles.tableData}><button>{listType == 'auction' ? 'Bid' : 'Get slice'} <FaHand className={styles.bidIcon} color={"#2e2e2e"} /></button></div>
                            </div>
                        ))}
                    </>
                }
            </div>
        </>
    )
}