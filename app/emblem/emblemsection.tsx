"use client";
import { useEffect, useRef } from "react";
import styles from "./Emblem.module.css";

export default function EmblemSection() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.show);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const symbols = [
        {
            title: "โกร่งและลูกโกร่ง",
            desc: "แสดงถึงวิชาชีพเภสัชกรรมในการเตรียมยา",
            icon: "/images/emblem/emblem2.png",
            className: styles.card1
        },
        {
            title: "เฟือง",
            desc: "แสดงถึงอุตสาหกรรมการผลิตยา",
            icon: "/images/emblem/emblem2.png",
            className: styles.card2
        },
        {
            title: "เฉลว",
            desc: "แสดงถึงการพัฒนาและความก้าวหน้าของวิชาชีพเภสัชกรรมอย่างต่อเนื่อง",
            icon: "/images/emblem/emblem2.png",
            className: styles.card3
        },
        {
            title: "CIPT",
            desc: "The College of Industrial Pharmacy of Thailand",
            icon: "/images/emblem/emblem2.png",
            className: styles.card4
        },
        {
            title: "วทอ",
            desc: "อักษรย่อของ วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย",
            icon: "/images/emblem/emblem2.png",
            className: styles.card5
        }
    ];

    return (
        <section className={styles.wrapper}>
            <div ref={gridRef} className={`${styles.grid} ${styles.fadeUp}`}>

                {/* MAIN LARGE CARD */}
                <div className={styles.mainCard}>
                    <div className={styles.quoteIcon}>
                        <img src="/images/emblem/emblem3.png" alt="quote" style={{ opacity: 0.1, width: '40px' }} />
                    </div>

                    <div className={styles.logoCenter}>
                        <img src="/images/emblem/emblem1.png" alt="CIPT Logo" className={styles.logo} />
                    </div>

                    <div className={styles.mainContent}>
                        <h3>ตราสัญลักษณ์ของวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย</h3>
                        <p>
                            ตราสัญลักษณ์ของวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย
                            สะท้อนอัตลักษณ์ของวิชาชีพเภสัชกรรมในภาคอุตสาหกรรมโดยผสมผสานสัญลักษณ์ที่สื่อถึงองค์ความรู้ด้านการเตรียมยา
                            การผลิตในระดับอุตสาหกรรมและการพัฒนาอย่างต่อเนื่องของวิชาชีพสีทองและสีเขียวมะกอกสื่อถึงความเจริญก้าวหน้า
                            ความมั่นคงและบทบาทของเภสัชกรในการขับเคลื่อนมาตรฐานอุตสาหกรรมยาอย่างยั่งยืน.
                        </p>
                    </div>
                </div>

                {/* SMALL CARDS */}
                {symbols.map((item, index) => (
                    <div key={index} className={`${styles.smallCard} ${item.className}`}>
                        <div className={styles.iconBox}>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className={styles.textGroup}>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
