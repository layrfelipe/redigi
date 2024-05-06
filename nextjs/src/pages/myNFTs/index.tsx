import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/MySlices.module.scss'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function MyNFTs() {
  return (
    <>
      <Head>
        <title>My Slices</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
    
        <div className={styles.mainWrapper}>
          
        </div>
      </main>
    </>
  )
}