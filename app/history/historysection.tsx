"use client";
import InformationSection from "../courseinformation/informationsection";
import CommitteeSection from "../committee/committeesection";
import CoordinatorSection from "../coordinator/coordinatorsection";
import EmblemSection from "../emblem/emblemsection";
import ContactSection from "../information/informationsection";
import styles from "./history.module.css";

export default function HistorySection({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (n: number) => void }) {

    const menuItems = [
        "ประวัติความเป็นมา",
        "ข้อมูลหลักสูตร",
        "คณะกรรมการบริหาร",
        "ผู้ประสานงานหลักของวิทยาลัย",
        "ตราสัญลักษณ์",
        "ข้อมูลติดต่อและสถานที่ตั้ง"
    ];

    return (
        <section className={styles.historySection}>
            <div className={styles.historyLayout}>
                <div className={styles.sidebar}>
                    <h3>เกี่ยวกับวิทยาลัยเภสัชบำบัด</h3>
                    <ul>
                        {menuItems.map((item, idx) => (
                            <li 
                                key={idx} 
                                className={`${styles.menuItem} ${activeTab === idx ? styles.active : ""}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.historyContent}>
                    {activeTab === 1 ? (
                        <InformationSection isSubComponent={true} />
                    ) : activeTab === 2 ? (
                        <CommitteeSection />
                    ) : activeTab === 3 ? (
                        <CoordinatorSection />
                    ) : activeTab === 4 ? (
                        <EmblemSection />
                    ) : activeTab === 5 ? (
                        <ContactSection />
                    ) : (
                        <>
                            <h2>
                                “รากฐานแห่งความรู้<br />
                                สู่การพัฒนาวิชาชีพเภสัชกรรมอุตสาหการของประเทศไทย”
                            </h2>
                            <p className={styles.historyParagraph}>
                                สถาบันที่มุ่งเน้นพัฒนาบุคลากรและองค์ความรู้ด้านการคุ้มครองผู้บริโภค ภารกิจหลักคือการศึกษา อบรม
                                และรับรองความรู้ความชำนาญเภสัชกรและบุคลากรสาธารณสุข เพื่อให้ประชาชนปลอดภัยจากการใช้ยาและผลิตภัณฑ์สุขภาพ
                            </p>

                            <div className={styles.timeline}>
                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        พ.ศ. 2562
                                        <br />
                                        <span className={styles.yearSubtitle}>แนวคิดการจัดตั้ง</span>
                                    </div>
                                    <div className={styles.timelineText}>
                                        <strong>สมาคมเภสัชกรรมอุตสาหการ (ประเทศไทย) ร่วมกับสภาเภสัชกรรมแต่งตั้งคณะทำงานเพื่อศึกษาความเป็นไปได้ในการจัดตั้งวิทยาลัย</strong>
                                        <ul>
                                            <li>ความร่วมมือระหว่างสมาคมเภสัชกรรมอุตสาหการกับสภาเภสัชกรรม</li>
                                            <li>แต่งตั้งคณะทำงานศึกษาความเป็นไปได้</li>
                                            <li>วิเคราะห์ความต้องการผู้เชี่ยวชาญในอุตสาหกรรมยา</li>
                                            <li>จัดทำ Concept Paper เพื่อเสนอแนวทางการจัดตั้ง</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        พ.ศ. 2563
                                        <br />
                                        <span className={styles.yearSubtitle}>จัดตั้งอย่างเป็นทางการ</span>
                                    </div>
                                    <div className={styles.timelineText}>
                                        <strong>สภาเภสัชกรรมออกข้อบังคับว่าด้วยวิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย พ.ศ. 2563 กำหนดบทบาทและอำนาจหน้าที่</strong>
                                        <ul>
                                            <li>ออกข้อบังคับสภาเภสัชกรรม พ.ศ. 2563</li>
                                            <li>กำหนดโครงสร้างและบทบาทหน้าที่ of วิทยาลัย</li>
                                            <li>วางแผนหลักสูตรและมาตรฐานการฝึกอบรม</li>
                                            <li>เริ่มดำเนินการพัฒนาระบบและกลไกการทำงาน</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        ปัจจุบัน
                                        <br />
                                        <span className={styles.yearSubtitle}>ศูนย์กลางพัฒนาศักยภาพ</span>
                                    </div>
                                    <div className={styles.timelineText}>
                                        <strong>ทำหน้าที่เป็นศูนย์กลางพัฒนาเภสัชกรอุตสาหการ ส่งเสริมการศึกษา การฝึกอบรม การวิจัย และสร้างเครือข่ายความร่วมมือระดับนานาชาติ</strong>
                                        <ul>
                                            <li>จัดการฝึกอบรมและพัฒนาผู้เชี่ยวชาญเฉพาะทาง</li>
                                            <li>ส่งเสริมการวิจัยและพัฒนาในอุตสาหกรรมยา</li>
                                            <li>สร้างเครือข่ายความร่วมมือระดับนานาชาติ</li>
                                            <li>ยกระดับมาตรฐานวิชาชีพให้สอดคล้องกับมาตรฐานสากล</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.noticeBox}>
                                <div className={styles.noticeIconCircle}>
                                    <img src="/images/history/History1.png" alt="Mission" />
                                </div>
                                <div>
                                    <strong>พันธกิจของวิทยาลัย</strong>
                                    <p>
                                        วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย จัดตั้งขึ้นภายใต้สภาเภสัชกรรม เพื่อเป็นองค์กรวิชาชีพที่มุ่งพัฒนาองค์ความรู้<br />
                                        ความเชี่ยวชาญ และมาตรฐานวิชาชีพด้านเภสัชกรรมอุตสาหการของประเทศไทย
                                    </p>
                                    <p>
                                        ครอบคลุมองค์ความรู้ตลอด<span className={styles.highlightText}>ห่วงโซ่คุณค่าของอุตสาหกรรมยา</span> ตั้งแต่การวิจัยและพัฒนา การผลิต การควบคุมคุณภาพ<br />
                                        การประกันคุณภาพ ไปจนถึงการขึ้นทะเบียนตำรับยาและการติดตามความปลอดภัยของผลิตภัณฑ์
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
