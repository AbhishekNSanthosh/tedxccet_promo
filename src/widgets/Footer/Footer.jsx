import React from 'react'
import styles from '../../themes/footer.module.css'
import { contacts } from '@/common/utils/constants'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <span className={styles.title}>Contact</span>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin" width="100%" height="280" loading="lazy" style={{ borderRadius: '10px' }}></iframe>
                    </div>
                    <div className={styles.right}>
                        {contacts &&
                            contacts.map((item, index) => (
                                <div className={styles.rightItem} key={index}>
                                    <div className={styles.contactCol}>
                                        <span className={styles.name}>{item?.name}</span>:
                                    </div>
                                    <div className={styles.contactCol}>
                                        <a className={styles.number} >
                                            +91
                                        </a>
                                        <a className={styles.number} href={`tel:+91${item?.number}`}>
                                            {item?.number}
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
                <div className={styles.rightsRow}>
                    <span className={styles.rights}>All rights reserved ®. ©2024 - TEDXCCET</span>
                </div>
            </div>
        </div>
    )
}

export default Footer