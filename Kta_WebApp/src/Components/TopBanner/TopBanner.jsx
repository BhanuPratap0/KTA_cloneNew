import React from 'react'
import styles from './TopBanner.module.scss'
function TopBanner({ head, details }) {
    return (
        <div id={styles.TopBanner}>
            <div className={styles.TopBannerHead}>
                <img src={head} alt="" />
            </div>
            <div className={styles.TopBannerDetails}>{details}</div>
        </div>
    )
}

export default TopBanner
