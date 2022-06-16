import React from 'react'
import type { AppProps } from 'next/app'
import Nav from './nav'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Layout({children} : Element) {
  return (
      <>
      <div className={styles.navContainer}>
        <Nav/>
      </div>
      {children}
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
      </>
  )
}
