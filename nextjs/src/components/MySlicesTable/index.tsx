import styles from '@/styles/MySlicesTable.module.scss';
import { BiSolidBinoculars } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa6';

export default function MySlicesTable({ slices }: any) {
    return (
        <>
            <div className={styles.slicesTableWrapper}>
                {slices.map((slice: any) => (
                <div className={styles.tableRow} key={slice.id}>
                    <div className={styles.tableData}>
                        <div className={styles.imageWrapper}>
                            <img src={slice.imagePath}/>
                        </div>
                    </div>
                    <div className={styles.tableData} id={styles.productName}><span className={`${styles.spanHeader} ${styles.tokenName}`}>token name</span><span>{slice.title}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>date</span><span>{slice.date}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>auction status</span><span className={slice.auctionStatus == 'Live' ? `${styles.live}` : slice.auctionStatus == 'Closed' ? `${styles.closed}` : `${styles.pending}`}>{slice.auctionStatus}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>amount</span><span>{slice.amount}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>paid value</span><span>{slice.paidValue}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>updated value</span><span>{slice.updatedValue}</span></div>
                    {
                        slice.auctionStatus == 'Closed' &&
                        <div className={styles.tableData}><button className={styles.burnBtn}>Burn <FaFire className={styles.auctionActionIcon} color={"#FFC700"}/></button></div>
                    }

                    {
                        slice.auctionStatus != 'Closed' &&
                        <div className={styles.tableData}><button className={styles.seeAuctionBtn}>See auction <BiSolidBinoculars className={styles.auctionActionIcon}/></button></div>
                    }
                </div>
                ))}
            </div>
        </>
    )
}