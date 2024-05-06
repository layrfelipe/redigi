import styles from "@/styles/TokensCategories.module.scss";
import { useState } from "react";

export default function TokensCategories() {
    
    const categories = ["All", "Art", "Gaming", "PFPs", "Photography", "Music", "Tickets", "Sneakers"]
    const [selectedCategory, setSelectedCategory] = useState(categories[0])

    return(
        <>
            <div className={styles.tokensCategoriesWrapper}>
                <nav>
                    <ul>
                        {categories.map((category, index) => (
                            <li className={selectedCategory == category ? `${styles.selected}` : ""} onClick={() => setSelectedCategory(categories[index])} key={index}>{category}</li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}