"use client";
import styles from "./About.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function AboutSection() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.grid}>

                {/* LEFT IMAGE */}
                <div className={styles.imageBox}>
                    <img src="/images/about/about.png" alt="about" />
                    <div className={styles.imageOverlay}>
                        <h3 className={styles.overlayTitle}>วิทยาลัยเภสัชกรรมอุตสาหการ</h3>
                        <p className={styles.overlaySubtitle}>
                            College of Industrial Pharmacy of Thailand (CIPT)
                        </p>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className={styles.content}>
                    <h2>
                        วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย
                    </h2>

                    <p>
                        ศูนย์กลางการพัฒนาองค์ความรู้และผู้เชี่ยวชาญด้านเภสัชกรรมอุตสาหการ
                        เพื่อยกระดับมาตรฐานวิชาชีพและอุตสาหกรรมยาไทยสู่ระดับสากล
                    </p>

                    {/* SEARCH BOX */}
                    <div className={styles.searchCard}>
                        <h3>ค้นหารายชื่อ</h3>
                        <span>ผู้ประกอบวิชาชีพเภสัชกรรม</span>

                        <div className={styles.searchRow}>
                            <div className={styles.selectBox}>
                                <select>
                                    <option>เลขที่ใบอนุญาต</option>
                                </select>
                            </div>

                            <div className={styles.inputBox}>
                                <HiOutlineMagnifyingGlass />
                                <input type="text" placeholder="ค้นหาเลขที่ใบอนุญาต" />
                            </div>

                            <button className={styles.btn}>ค้นหา</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}