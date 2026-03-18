import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src="/images/favicon.png" className={styles.logo} />
                <div>
                    <h1>วิทยาลัยเภสัชกรรมอุตสาหการ</h1>
                    <p>The College of Industrial Pharmacy</p>
                </div>
            </div>

        </header>
    );
}