"use client";
import styles from "./Vision.module.css";

export default function VisionSection() {
    return (
        <div className={styles.wrapper}>
            {/* HEADER */}
            <div className={styles.header}>
                <h2 className={styles.titleMain}>
                    "มุ่งมั่นสู่การเป็นองค์กรประเมินผลระดับมาตรฐานสากล"
                </h2>
                <p className={styles.subtitle}>
                    เพื่อให้มั่นใจว่าเภสัชกรทุกคนที่ผ่านการรับรอง คือผู้ที่มีคุณภาพพร้อมดูแลสังคม
                </p>
            </div>

            {/* VISION CARD */}
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>วิสัยทัศน์ (Vision)</h3>
                    <p className={styles.cardDesc}>
                        เป็นองค์กรหลักในการประเมินความรู้และทักษะทางวิชาชีพเภสัชกรรมที่มีมาตรฐานสากล
                        มีความเที่ยงธรรม และเป็นที่ยอมรับในระดับนานาชาติ
                    </p>
                </div>
                <div className={styles.imageBox}>
                    <img src="/images/vision and mission/vision1.png" alt="Vision" />
                </div>
            </div>

            {/* MISSION CARD */}
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>พันธกิจ (Mission)</h3>
                    <p className={styles.cardDesc}>
                        จัดทำและพัฒนาหลักเกณฑ์ วิธีการ และเครื่องมือ ประเมินความรู้ความสามารถทางวิชาชีพให้ทันสมัย <br />
                        บริหารจัดการการสอบขึ้นทะเบียนฯให้เป็นไปตามมาตรฐาน
                        ความปลอดภัยและความยุติธรรมสูงสุด ส่งเสริมวิจัยและพัฒนาด้านการวัดผลและประเมินผลการศึกษา <br />
                        ทางเภสัชกรรมประสานงานร่วมกับสถาบันการศึกษาเพื่อยกระดับคุณภาพบัณฑิตเภสัชศาสตร์
                    </p>
                </div>
                <div className={styles.imageBox}>
                    <img src="/images/vision and mission/vision2.png" alt="Mission" />
                </div>
            </div>

            {/* GOAL CARD */}
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>เป้าหมาย</h3>
                    <div className={styles.goalList}>
                        <p><span>Standardization:</span> เพื่อให้การสอบมีความเป็นมาตรฐานเดียวกันทั่วประเทศ ไม่ว่าผู้สมัครจะจบจากสถาบันใด</p>
                        <p><span>Competency-Based:</span> เน้นการวัดสมรรถนะที่จำเป็นในการปฏิบัติงานจริง มากกว่าเพียงแค่ความจำในตำรา</p>
                        <p><span>Integrity:</span> รักษาความลับและระบบรักษาความปลอดภัยของข้อสอบอย่างเข้มงวดในทุกขั้นตอน</p>
                        <p><span>Continuous Development:</span> นำผลการประเมินมาวิเคราะห์เพื่อพัฒนาหลักสูตรเภสัชศาสตร์ในภาพรวมของประเทศ</p>
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <img src="/images/vision and mission/vision3.png" alt="Goal" />
                </div>
            </div>
        </div>
    );
}