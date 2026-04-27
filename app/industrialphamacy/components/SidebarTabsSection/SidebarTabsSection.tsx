"use client";
import { useState } from "react";
import styles from "./SidebarTabsSection.module.css";

/* ✅ import เฉพาะ History ก่อน */
import History from "./Tabs/HistorySection/HistorySection";
import Vision from "./Tabs/VisionMissionSection/VisionMissionSection";
import Course from "./Tabs/CoursesSection/CoursesSection";
import Field from "./Tabs/ExpertiseSection/ExpertiseSection";
import Committee from "./Tabs/CommitteeSection/CommitteeSection";
import Emblem from "./Tabs/EmblemSection/EmblemSection";
import Contact from "./Tabs/LocationSection/LocationSection";

export default function MenuSection() {
    const [active, setActive] = useState(0);

    const menu = [
        "ประวัติความเป็นมา",
        "วิสัยทัศน์และพันธกิจ",
        "ข้อมูลหลักสูตร",
        "สาขาความเชี่ยวชาญ",
        "คณะกรรมการบริหาร",
        "ตราสัญลักษณ์",
        "ข้อมูลติดต่อและสถานที่ตั้ง",
    ];

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <h2>
                        "จากห้องวิจัยสู่การผลิตมวลชน: <br />
                        มาตรฐานสากลเพื่อความมั่นคงทางยา"
                    </h2>

                    <div className={styles.menuList}>
                        {menu.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={active === i ? styles.active : styles.item}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    {active === 0 && <History />}
                    {active === 1 && <Vision />}
                    {active === 2 && <Course />}
                    {active === 3 && <Field />}
                    {active === 4 && <Committee />}
                    {active === 5 && <Emblem />}
                    {active === 6 && <Contact />}

                </div>

            </div>
        </section>
    );
}