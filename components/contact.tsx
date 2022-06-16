import React from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
        <span className={styles.spbold}>Contact</span>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.row1}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.contacticon}/>
                    <span>Headquarters</span>
                </div>
                <div className={styles.col2}>
                    <span>DHO s.r.o</span>
                    <span>borivojova 878/35</span>
                    <span>130 00 Praha 3</span>
                </div>
            </div>
            <div className={styles.col1}>
                <div className={styles.row1}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.contacticon}/>
                    <span>Email</span>
                </div>
                <div className={styles.col2}>
                    <span>info@expanzo.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}
