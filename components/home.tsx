import styles from '../styles/Home.module.css'
import Image from 'next/image'


function HomePage() {
  return <div className={styles.homePage}>
          <Image className={styles.logo} src="/logo-expanzo-black.svg" alt="Logo" width={120} height={85} />
          <div className={styles.titles}>
              
              <div className={styles.highlightdiv}>
                  <h3 className={styles.highlight}>All</h3>
              </div>
              <div className="">
                <h3>Companies</h3>
              </div>
              <div className="">
                <h3>Phones</h3>
              </div>
          </div>
      </div>
}

export default HomePage