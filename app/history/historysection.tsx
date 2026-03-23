"use client";
import styles from "./History.module.css";

export default function HistorySection() {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                “รากฐานแห่งความรู้ <br />
                สู่การพัฒนาวิชาชีพเภสัชกรรมอุตสาหการของประเทศไทย”
            </h1>

            <p className={styles.desc}>
                สถาบันที่มุ่งเน้นพัฒนาบุคลากรและองค์ความรู้ด้านการคุ้มครองผู้บริโภค มีภารกิจหลักคือการศึกษา อบรม
                และรับรองความรู้ความชำนาญเภสัชกรและบุคลากรสาธารณสุข เพื่อให้ประชาชนปลอดภัยจากการใช้ยาและผลิตภัณฑ์สุขภาพ
            </p>

            <div className={styles.timeline}>
                {/* 2562 */}
                <div className={styles.timelineItem}>
                    <div className={styles.yearBox}>
                        <span className={styles.yearText}>พ.ศ. 2562</span>
                        <span className={styles.yearSubtitle}>แนวคิดการจัดตั้ง</span>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.contentTitle}>
                            สมาคมเภสัชกรอุตสาหการ (ประเทศไทย) <br />
                            ร่วมกับสภาเภสัชกรรมแต่งตั้งคณะทำงานเพื่อศึกษาความเป็นไปได้ในการจัดตั้งวิทยาลัย
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>ความร่วมมือระหว่างสมาคมเภสัชกรอุตสาหการกับสภาเภสัชกรรม</li>
                            <li className={styles.listItem}>แต่งตั้งคณะทำงานศึกษาความเป็นไปได้</li>
                            <li className={styles.listItem}>วิเคราะห์ความต้องการผู้เชี่ยวชาญในอุตสาหกรรมยา</li>
                            <li className={styles.listItem}>จัดทำ Concept Paper เพื่อนำเสนอแนวทางการจัดตั้ง</li>
                        </ul>
                    </div>
                </div>

                {/* 2563 */}
                <div className={styles.timelineItem}>
                    <div className={styles.yearBox}>
                        <span className={styles.yearText}>พ.ศ. 2563</span>
                        <span className={styles.yearSubtitle}>จัดตั้งอย่างเป็นทางการ</span>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.contentTitle}>
                            สภาเภสัชกรรมออกข้อบังคับว่าด้วยวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย พ.ศ. 2563 <br />
                            กำหนดบทบาทและอำนาจหน้าที่
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>ออกข้อบังคับสภาเภสัชกรรม พ.ศ. 2563</li>
                            <li className={styles.listItem}>กำหนดโครงสร้างและบทบาทหน้าที่ของวิทยาลัย</li>
                            <li className={styles.listItem}>วางแผนหลักสูตรและมาตรฐานการฝึกอบรม</li>
                            <li className={styles.listItem}>เริ่มดำเนินการพัฒนาระบบและกลไกการทำงาน</li>
                        </ul>
                    </div>
                </div>

                {/* ปัจจุบัน */}
                <div className={styles.timelineItem}>
                    <div className={styles.yearBox}>
                        <span className={styles.yearText}>ปัจจุบัน</span>
                        <span className={styles.yearSubtitle}>ศูนย์กลางพัฒนาศักยภาพ</span>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.contentTitle}>
                            ทำหน้าที่เป็นศูนย์กลางพัฒนาเภสัชกรอุตสาหการ ส่งเสริมการศึกษา การฝึกอบรม การวิจัย <br />
                            และสร้างเครือข่ายความร่วมมือระดับนานาชาติ
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>จัดการฝึกอบรมและพัฒนาผู้เชี่ยวชาญเฉพาะทาง</li>
                            <li className={styles.listItem}>ส่งเสริมการวิจัยและพัฒนาในอุตสาหกรรมยา</li>
                            <li className={styles.listItem}>สร้างเครือข่ายความร่วมมือระดับนานาชาติ</li>
                            <li className={styles.listItem}>ยกระดับมาตรฐานวิชาชีพให้สอดคล้องกับมาตรฐานสากล</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}