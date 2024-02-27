import React from 'react'
import styles from '../../themes/volunteer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.titleRow}>
                    <span className={styles.title}><i>Call for volunteers</i></span>
                </div>
                <div className={styles.imgRow}>
                    <Image src="/x.svg" height={400} width={500} className={styles.img} />
                </div>
                <div className={styles.row}>
                    <div className={styles.contactBox}>
                        <div className={styles.contactRow}>
                            <span className={styles.contactName}>JUSTIN</span>
                            <span className={styles.contactNumber}>+91 80755 12624 </span>
                        </div>
                        <div className={styles.contactRow}>
                            <span className={styles.contactName}>ARAVIND</span>
                            <span className={styles.contactNumber}>+91 94460 29321</span>
                        </div>
                    </div>
                    <Image src="/logo.svg" height={150} width={500} className={styles.logo} />
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles.desc}>
                    TEDxCCET Volunteer Registration Form
                </span>
                <button className={styles.btn}>
                    <Link href="/reg-form">Proceed</Link>
                </button>
            </div>
        </div>
    )
}
