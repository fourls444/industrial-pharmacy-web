"use client";
import React from 'react';
import styles from './coordinator.module.css';
import { HiOutlineMapPin } from 'react-icons/hi2';

export default function CoordinatorSection() {
    return (
        <div className={styles.coordinatorSection}>
            <div className={styles.layout}>
                <div className={styles.imageSection}>
                    <img
                        src="/images/coordinator/coordinator1.png"
                        alt="Coordinator Team"
                        className={styles.mainPhoto}
                    />
                </div>

                <div className={styles.profileCard}>
                    <div className={styles.profileHeader}>

                        {/* ===== NAME ===== */}
                        <div className={styles.nameGroup}>
                            <h2 className={styles.name}>ดร.ภกญ. ปรวัลย์ อำกลัด</h2>
                            <h3 className={styles.nameEn}>Porawan Aumklad, Ph.D., FCIP, FACP</h3>
                        </div>

                        <div className={styles.divider}></div>

                        {/* ===== ROLE ===== */}
                        <div className={styles.roleGroup}>
                            <p className={styles.role}>ผู้ช่วยผู้จัดการแผนกวิชาการและนวัตกรรม</p>
                            <p className={styles.roleEn}>Technical and Innovation Assistant Manager</p>
                        </div>
                    </div>

                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <img src="/images/coordinator/Iconcoordinator2.png" alt="Email" className={styles.icon} />
                            <div className={styles.contactInfo}>
                                <h4>อีเมล</h4>
                                <p><a href="mailto:porawan.a@olic-thailand.com">Email: porawan.a@olic-thailand.com</a></p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <img src="/images/coordinator/Iconcoordinator3.png" alt="Phone" className={styles.icon} />
                            <div className={styles.contactInfo}>
                                <h4>เบอร์โทรศัพท์</h4>
                                <p>+66 35 221 031-6 Ext.4010</p>
                                <p>+66 81 375 7935</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <HiOutlineMapPin className={styles.iconSvg} />
                            <div className={styles.contactInfo}>
                                <h4>OLIC (Thailand) Limited</h4>
                                <p>166 Moo 16, Bangpa-In Industrial Estate,</p>
                                <p>Bangkrason, Bangpa-In, Ayutthaya 13160, Thailand</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <img src="/images/coordinator/Iconcoordinator1.png" alt="Website" className={styles.icon} />
                            <div className={styles.contactInfo}>
                                <h4>Website</h4>
                                <p><a href="https://www.olic-thailand.com" target="_blank" rel="noopener noreferrer">www.olic-thailand.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}