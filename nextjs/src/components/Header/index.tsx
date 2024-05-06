import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import Login from "../Login";

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.headerLeftSide}>
                    <div className={styles.imageWrapper}>
                        <Link href="/">
                            <img className={styles.logoImage} src="/logo-redigi.png" />
                        </Link>
                    </div>

                    <div className={styles.links}>
                        <Link href="/">Home</Link>
                        <Link href="/auctions">Auctions</Link>
                        <Link href="/slices">Slices</Link>
                        <Link href="/myNFTs">My NFTs</Link>
                    </div>
                </div>

                <div className={styles.headerRightSide}>
                    <button id={styles.sellNFTButton}>Slice your NFT</button>
                    <Login />
                </div>
            </header>
        </>
    )
}