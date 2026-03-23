"use client";
import { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.show);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.wrapper}>
            <div 
                ref={sectionRef} 
                className={`${styles.container} ${styles.fadeUp}`}
            >
                
                {/* LEFT SIDE: Image + Text */}
                <div className={styles.left}>
                    <img 
                        src="/images/contact and location/location.png" 
                        alt="สายการผลิตยา" 
                        className={styles.image} 
                    />
                    <h3>วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย</h3>
                    <p>
                        ศูนย์กลางองค์ความรู้และผู้เชี่ยวชาญด้านเภสัชกรรมอุตสาหการ 
                        ที่มุ่งยกระดับมาตรฐานวิชาชีพและอุตสาหกรรมยาไทยสู่สากล
                    </p>
                </div>

                {/* RIGHT SIDE: Contact Card */}
                <div className={styles.card}>
                    <h3 className={styles.title}>วิทยาลัยเภสัชกรรมอุตสาหการ</h3>
                    
                    <div className={styles.item}>
                        <img src="/images/contact and location/Iconlocation1.png" alt="address" />
                        <div>
                            <strong>ที่อยู่</strong>
                            <p>
                                อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 
                                ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src="/images/contact and location/Iconlocation2.png" alt="hours" />
                        <div>
                            <strong>เวลาทำการ</strong>
                            <p>วันจันทร์ - ศุกร์ | 08.30 - 16.30 น. (ยกเว้นวันหยุดนักขัตฤกษ์)</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src="/images/contact and location/Iconlocation3.png" alt="phone" />
                        <div>
                            <strong>โทรศัพท์</strong>
                            <p>0 2591 9992 (คู่สายอัตโนมัติ)</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
