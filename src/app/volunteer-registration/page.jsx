import React from 'react'
import styles from '../../themes/volunteer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.titleRow}>
                    <span className={styles.title}>Call for volunteers</span>
                </div>
                <div className={styles.imgRow}>
                    <Image src="/x.svg" height={500} width={500} className={styles.img} />
                </div>
                <div className={styles.row}>
                    <>contact</>
                    <Image src="/logo.svg" height={100} width={500} className={styles.logo} />
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
