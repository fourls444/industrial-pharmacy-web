"use client";
import React from 'react';
import styles from './information.module.css';

export default function InformationSection() {
    return (
        <div className={styles.contactSection}>
            <div className={styles.layout}>
                {/* Left Column: Image and Summary */}
                <div className={styles.leftColumn}>
                    <img
                        src="/images/location/location.png"
                        alt="Laboratory"
                        className={styles.locationImage}
                    />
                    <div className={styles.leftContent}>
                        <h2>วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย</h2>
                        <p>
                            ศูนย์กลางองค์ความรู้และผู้เชี่ยวชาญด้านเภสัชกรรมอุตสาหการ
                            ที่มุ่งยกระดับมาตรฐานวิชาชีพและอุตสาหกรรมยาไทยสู่สากล
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Card */}
                <div className={styles.rightColumn}>
                    <div className={styles.contactCard}>
                        <h3 className={styles.cardTitle}>วิทยาลัยคุ้มครองผู้บริโภคด้านยา</h3>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <img src="/images/location/Iconlocation1.png" alt="Location" />
                                </div>
                                <div className={styles.itemContent}>
                                    <h4>ที่อยู่</h4>
                                    <p>
                                        อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4
                                        ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <img src="/images/location/Iconlocation2.png" alt="Hours" />
                                </div>
                                <div className={styles.itemContent}>
                                    <h4>เวลาทำการ</h4>
                                    <p>วันจันทร์ - ศุกร์ | 08.30 - 16.30 น. (ยกเว้นวันหยุดนักขัตฤกษ์)</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>
                                    <img src="/images/location/Iconlocation3.png" alt="Phone" />
                                </div>
                                <div className={styles.itemContent}>
                                    <h4>โทรศัพท์</h4>
                                    <p>0 2591 9992 (คู่สายอัตโนมัติ)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
