import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact'
import HomePage from '../components/home'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function ContactUs() {
  return (
    <div >
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.navContainer}>
      <Nav iscontact="true"/>
    </div>
    <Contact/>
    <footer className={styles.footer1}>
      <div className={styles.footer}>
        <Image className={styles.logo} src="/logo-expanzo-black.svg" alt="Logo" width={100} height={65} />
        <div className={styles.footerdiv}>
          <span>CONTACTS</span>
          <span>PHONES</span>
          <span>TOP SEARCH</span>
        </div>
      </div>
    </footer>
  </div>
  )
}
