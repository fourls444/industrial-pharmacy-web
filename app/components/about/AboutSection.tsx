"use client";

import { LuChevronDown, LuListFilter } from "react-icons/lu";
import styles from "./About.module.css";
import { FaSearch } from "react-icons/fa";

/**
 * ส่วนแนะนำ (Intro Section) แสดงภาพไฮไลท์ ข้อมูลเบื้องต้น และส่วนค้นหาผู้เชี่ยวชาญ
 */
export default function IntroSection() {
    return (
        <section className={styles.container}>
            {/* คอลัมน์ซ้าย: แสดงรูปภาพพร้อมชื่อวิทยาลัยแบบ Overlay */}
            <div className={styles.imageSection}>
                <div className={styles.imageCard}>
                    <img
                        src="/images/about/about.png"
                        alt="Pharmacy Practice"
                        className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                        <h3 className={styles.overlayTitle}>
                            วิทยาลัยเภสัชกรรมอุตสาหการ
                        </h3>
                        <p className={styles.overlaySubtitle}>
                            College of Industrial Pharmacy of Thailand (CIPT)
                        </p>
                    </div>
                </div>
            </div>

            {/* คอลัมน์ขวา: แสดงเนื้อหาข้อความและส่วนค้นหา */}
            <div className={styles.contentSection}>
                {/* หัวข้อหลัก */}
                <h2 className={styles.headline}>
                    วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย
                </h2>
                <div className={styles.divider}></div>
                {/* รายละเอียดคำอธิบายเกี่ยวกับวภช. */}
                <p className={styles.description}>
                    ศูนย์กลางการพัฒนาองค์ความรู้และผู้เชี่ยวชาญด้านเภสัชกรรมอุตสาหการ <br />
                    เพื่อยกระดับมาตรฐานวิชาชีพและอุตสาหกรรมยาไทยสู่ระดับสากล
                </p>

                {/* ส่วนการค้นหา (Search Card) */}
                <div className={styles.searchCard}>
                    <h3 className={styles.searchTitle}>ค้นหารายชื่อ</h3>
                    <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>

                    <div className={styles.inputGroup}>
                        {/* ตัวเลือกประเภทการค้นหา (Filter Dropdown) */}
                        <div className={styles.dropdown}>
                            <LuListFilter className={styles.filterIcon} />
                            <span>เลขที่ใบอนุญาต</span>
                            <LuChevronDown className={styles.chevronIcon} />
                        </div>

                        {/* ช่องกรอกคำค้นหา (Search Input) */}
                        <div className={styles.searchInputWrapper}>
                            <FaSearch className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="ค้นหาเลขที่ใบอนุญาต"
                                className={styles.searchInput}
                            />
                        </div>

                        {/* ปุ่มกดเพื่อเริ่มการค้นหา */}
                        <button className={styles.searchButton}>ค้นหา</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
