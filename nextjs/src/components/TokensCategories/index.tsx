import styles from "@/styles/TokensCategories.module.scss";

export default function TokensCategories() {
    return(
        <>
            <div className={styles.tokensCategoriesWrapper}>
                <nav>
                    <ul>
                        <li>All</li>
                        <li>Art</li>
                        <li>Gaming</li>
                        <li>PFPs</li>
                        <li>Photography</li>
                        <li>Music</li>
                        <li>Tickets</li>
                        <li>Sneakers</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}