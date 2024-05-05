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
                        <Link href="/">Auctions</Link>
                        <Link href="/">Tokens</Link>
                        <Link href="/">My NFTs</Link>
                    </div>
                </div>

                <div className={styles.headerRightSide}>
                    <button id={styles.sellNFTButton}>Sell an NFT</button>
                    <Login />
                </div>
            </header>
        </>
    )
}