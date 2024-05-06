import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import FeaturedAuctionCards from '@/components/FeaturedAuctionCards'
import TokensCategories from '@/components/TokensCategories'
import TrendingList from '@/components/TrendingList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ReDigi Protocol</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
    
        <div className={styles.mainWrapper}>
          <div className={styles.featured}>
            <TokensCategories />
            <FeaturedAuctionCards />
          </div>

          <div className={styles.trendsWrapper}>
            <TrendingList listType="auction" />
            <TrendingList listType="slices" />
          </div>
        </div>
      </main>
    </>
  )
}