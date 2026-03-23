"use client";
import styles from "./Banner.module.css";

export default function BannerSection() {
    return (
        <section className={styles.bannerFull}>
            <img
                src="/images/banner/banner.png"
                className={styles.bg}
                alt="banner"
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="/images/favicon.png" alt="logo" />
                </div>

                {/* ✅ เพิ่ม class text */}
                <div className={styles.text}>
                    <h1>วิทยาลัยเภสัชกรรมอุตสาหการ</h1>
                    <p>College of Industrial Pharmacy of Thailand (CIPT)</p>
                </div>
            </div>
        </section>
    );
}