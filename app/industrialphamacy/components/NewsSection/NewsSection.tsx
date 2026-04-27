"use client";
import styles from "./NewsSection.module.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type NewsItem = {
    tag: string;
    title: string;
    desc: string;
    img: string;
};

const news: NewsItem[] = [
    {
        tag: "ข่าวประชาสัมพันธ์",
        title: "วิทยาลัยเภสัชบำบัด จัดโครงการอบรมพัฒนาศักยภาพ ปี 2567",
        desc: "หลักสูตรเน้นการพัฒนาศักยภาพด้านเภสัชกรรม เพื่อยกระดับคุณภาพการดูแลผู้ป่วย",
        img: "/images/message/message1.png",
    },
    {
        tag: "ข่าวรับสมัครเภสัชกร",
        title: "วิทยาลัยเภสัชบำบัด ประกาศรับสมัครเภสัชกรเข้าร่วมโครงการ",
        desc: "เปิดรับสมัครผู้สนใจเข้าร่วมหลักสูตรระยะสั้น พร้อมพัฒนาทักษะวิชาชีพ",
        img: "/images/message/message2.png",
    },
    {
        tag: "ข่าวประชาสัมพันธ์",
        title: "วิทยาลัยเภสัชบำบัด จัดอบรมเชิงปฏิบัติการ NCDs โปรแกรม",
        desc: "เสริมทักษะการดูแลผู้ป่วย NCDs อย่างมีประสิทธิภาพในระบบสุขภาพ",
        img: "/images/message/message3.png",
    },
];

export default function NewsSection() {
    return (
        <section className={styles.wrapper}>
            {/* ===== เรื่องเด่น ===== */}
            <div className={styles.sectionHeader}>
                <h2>เรื่องเด่นวิทยาลัยเภสัชกรรมอุตสาหการ</h2>
                <div className={styles.arrows}>
                    <button><HiChevronLeft /></button>
                    <button><HiChevronRight /></button>
                </div>
            </div>

            <div className={styles.featuredCard}>
                <img src="/images/featuredstories/featuredstories.png" alt="featured" />

                <div className={styles.featuredContent}>
                    <span className={styles.badge}>ข่าวประชาสัมพันธ์</span>
                    <h3>
                        วิทยาลัยฯ จัดโครงการอบรม: <br />
                        การผลิตยาแผนปัจจุบันตามมาตรฐาน PIC/S
                    </h3>
                    <p>
                        เรียนรู้กระบวนการผลิตยาแผนปัจจุบัน: ตั้งแต่การคัดเลือกวัตถุดิบจนถึงการบรรจุ
                    </p>
                    <button className={styles.readMore}>อ่านเพิ่มเติม</button>
                </div>
            </div>

            <div className={styles.dots}>
                <span className={styles.active}></span>
                <span></span>
                <span></span>
            </div>

            {/* ===== ข่าวสาร ===== */}
            <div className={styles.sectionHeader}>
                <h2>ข่าวสารวิทยาลัยเภสัชกรรมอุตสาหการ</h2>
                <span className={styles.viewAll}>ดูทั้งหมด →</span>
            </div>

            <div className={styles.newsGrid}>
                {news.map((n, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={n.img} alt="news" />
                            <span className={styles.badge}>{n.tag}</span>
                        </div>

                        <div className={styles.cardBody}>
                            <h4>{n.title}</h4>
                            <p>{n.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}