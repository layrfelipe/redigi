import styles from '@/styles/MySlicesTable.module.scss';

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
                    <div className={styles.tableData}><span className={styles.spanHeader}>auction status</span><span>{slice.auctionStatus}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>amount</span><span>{slice.amount}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>paid value</span><span>{slice.paidValue}</span></div>
                    <div className={styles.tableData}><span className={styles.spanHeader}>updated value</span><span>{slice.updatedValue}</span></div>
                    <div className={styles.tableData}><button>See auction</button></div>
                </div>
                ))}
            </div>
        </>
    )
}