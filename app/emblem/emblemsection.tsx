"use client";
import React from 'react';
import styles from './emblem.module.css';
import { BiSolidQuoteRight } from 'react-icons/bi';

export default function EmblemSection() {
    const meanings = [
        {
            title: "โกร่งและลูกโกร่ง",
            value: "แสดงถึงวิชาชีพเภสัชกรรมในการเตรียมยา"
        },
        {
            title: "เฟือง",
            value: "แสดงถึงอุตสาหกรรมการผลิตยา"
        },
        {
            title: "เฉลว",
            value: "แสดงถึงการพัฒนาและความก้าวหน้าของวิชาชีพเภสัชกรรมอย่างต่อเนื่อง"
        },
        {
            title: "CIPT",
            value: "The College of Industrial Pharmacy of Thailand"
        },
        {
            title: "วทอ",
            value: "อักษรย่อของวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย"
        }
    ];

    return (
        <div className={styles.emblemSection}>
            <div className={styles.layout}>
                {/* Featured Card */}
                <div className={styles.featuredCard}>
                    <BiSolidQuoteRight className={styles.quoteIcon} />
                    <img src="/images/emblem/emblem1.png" alt="CIPT Logo" className={styles.mainLogo} />
                    <h2 className={styles.title}>ตราสัญลักษณ์ของวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย</h2>
                    <p className={styles.description}>
                        ตราสัญลักษณ์ของวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย 
                        สะท้อนอัตลักษณ์ของวิชาชีพเภสัชกรรมในภาคอุตสาหกรรม 
                        โดยผสมผสานสัญลักษณ์ที่สื่อถึงองค์ความรู้ด้านการเตรียมยา 
                        การผลิตในระดับอุตสาหกรรม และการพัฒนาอย่างต่อเนื่องของวิชาชีพ 
                        สีทองและสีเขียวมะกอกสื่อถึงความเจริญก้าวหน้า ความมั่นคง 
                        และบทบาทของเภสัชกรในการขับเคลื่อนมาตรฐานอุตสาหกรรมยาอย่างยั่งยืน
                    </p>
                </div>

                {/* Meanings Grid */}
                {meanings.map((m, idx) => (
                    <div key={idx} className={`${styles.infoCard} ${styles[`card${idx}`]}`}>
                        <img src="/images/emblem/emblem2.png" alt="icon" className={styles.cardIcon} />
                        <h4 className={styles.cardTitle}>{m.title}</h4>
                        <p className={styles.cardValue}>{m.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
