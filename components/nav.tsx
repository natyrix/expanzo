import React from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser, faPencil } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Nav({iscontact}:any) {
    const router = useRouter();
  return (
    <div className={styles.container}>
        <div className={styles.containerDiv}>
            <FontAwesomeIcon icon={faBars} className={styles.icon}/>
            <span className={styles.btn} onClick={() => router.replace('/')}>DASHBOARD</span>
            <span className={styles.btn} onClick={() => router.replace('/contactus')}>CONTACT</span>
        </div>
        {iscontact === "true" && (
          <Image className={styles.logo} src="/logo-expanzo.svg" alt="Logo" width={70} height={30} />
        )}
        <div className={styles.containerDiv}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon}/>
            <span>LOGIN</span>
            <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
            <span>REGISTRATION</span>
        </div>
    </div>
  )
}
