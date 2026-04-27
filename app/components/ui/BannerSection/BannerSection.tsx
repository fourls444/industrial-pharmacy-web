import styles from "./BannerSection.module.css";

export default function BannerSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img src="/favicon.ico" alt="Industrial Pharmacy College Logo" className={styles.logo} />
                </div>
                <div className={styles.textContent}>
                    <h1 className={styles.titleTh}>วิทยาลัยเภสัชกรรมอุตสาหการ</h1>
                    <h2 className={styles.titleEn}>The College of Industrial Pharmacy</h2>
                </div>
            </div>
        </section>
    );
}
