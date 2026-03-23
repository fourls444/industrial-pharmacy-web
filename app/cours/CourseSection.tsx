import styles from "./Course.module.css";

/* SVG Icons */
const MedalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path d="M8.21 13.89L7 21l5-3 5 3-1.21-7.11" />
    </svg>
);

const ChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
    </svg>
);

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const DocIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="12" y1="9" x2="8" y2="9" />
    </svg>
);

const PersonIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const ApplyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

export default function CoursesSection() {
    return (
        <div className={styles.coursesWrapper}>

            {/* --- NEW HOLISTIC LEARNING SECTION --- */}
            <div className={styles.holisticSection}>
                <div className={styles.holisticHeader}>
                    <h2 className={styles.heading}>
                        การเรียนรู้แบบองค์รวมรอบด้านในอุตสาหกรรมยา
                    </h2>
                    <p className={styles.subHeading}>
                        ครอบคลุมองค์ความรู้ตลอดการศึกษาของอุตสาหกรรมยาและผลิตภัณฑ์สุขภาพ
                    </p>
                </div>

                <div className={styles.holisticGrid}>
                    {[
                        { title: "วิจัยและพัฒนา", desc: "การพัฒนายาและผลิตภัณฑ์ใหม่", icon: "/images/course/course2.png" },
                        { title: "การผลิต", desc: "กระบวนการผลิตตามมาตรฐาน GMP", icon: "/images/course/course3.png" },
                        { title: "ควบคุมคุณภาพ", desc: "การทดสอบและรับรองคุณภาพ", icon: "/images/course/course4.png" },
                        { title: "ประกันคุณภาพ", desc: "ระบบการจัดการคุณภาพ", icon: "/images/course/course5.png" },
                        { title: "การขึ้นทะเบียน", desc: "การขึ้นทะเบียนตำรับยา", icon: "/images/course/course6.png" },
                        { title: "เภสัชระวัง", desc: "ติดตามความปลอดภัยผลิตภัณฑ์", icon: "/images/course/course7.png" }
                    ].map((item, idx) => (
                        <div key={idx} className={styles.holisticCard}>
                            <div className={styles.holisticIconContainer}>
                                <img src={item.icon} alt={item.title} className={styles.holisticIconImg} />
                            </div>
                            <h3 className={styles.holisticTitle}>{item.title}</h3>
                            <p className={styles.holisticDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className={styles.heading}>
                ประเภทหลักสูตรฝึกอบรม
            </h2>

            <p className={styles.subHeading}>
                หลักสูตรที่มุ่งเน้นการพัฒนาสมรรถนะของเภสัชกรให้สามารถทำงานในระดับผู้เชี่ยวชาญ
            </p>

            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><MedalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>วุฒิบัตรและประกาศนียบัตร</h3>
                            <p className={styles.cardSubTitle}>CERTIFICATE & DIPLOMA PROGRAMS</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            หลักสูตรเฉพาะทางที่ได้รับการรับรองจากสภาเภสัชกรรม
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>การรับรองสมรรถนะ</li>
                                <li>การประเมินผล</li>
                                <li>มาตรฐานสากล</li>
                                <li>ประกาศนียบัตร</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DocIcon /> ดูรายละเอียด
                    </button>
                </div>

                {/* CARD 2 ✅ แก้แล้ว */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><ChartIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>พัฒนาวิชาชีพต่อเนื่อง</h3>
                            <p className={styles.cardSubTitle}>CONTINUING PROFESSIONAL DEVELOPMENT</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            โปรแกรมพัฒนาความรู้และทักษะอย่างต่อเนื่อง
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>อัปเดตความรู้</li>
                                <li>เครือข่าย</li>
                                <li>ภาวะผู้นำ</li>
                                <li>เรียนรู้ตลอดชีวิต</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DocIcon /> ดูรายละเอียด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}><ClockIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรฝึกอบรมระยะสั้น</h3>
                            <p className={styles.cardSubTitle}>SHORT-TERM TRAINING PROGRAMS</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            หลักสูตรอบรมเข้มข้น
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>วิจัยยา</li>
                                <li>ควบคุมคุณภาพ</li>
                                <li>นวัตกรรม</li>
                                <li>GMP</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn}>
                        <DocIcon /> ดูรายละเอียด
                    </button>
                </div>

            </div>

            {/* CERTIFICATION FOOTER */}
            <div className={styles.certFooter}>
                <div className={styles.certLeft}>
                    <div className={styles.certIcon}>
                        <img
                            src="/images/course/course14.png"
                            alt="icon"
                            className={styles.certIconImg}
                        />
                    </div>

                    <div className={styles.certText}>
                        <h3>การรับรองทักษะ</h3>
                        <p>
                            ผู้ที่ผ่านการอบรมจากวิทยาลัยจะได้รับ
                            <strong> การรับรองทักษะในระดับผู้เชี่ยวชาญเฉพาะทาง </strong>
                            ซึ่งช่วยยกระดับความสามารถของบุคลากรในอุตสาหกรรมยาและผลิตภัณฑ์สุขภาพของประเทศ
                        </p>
                    </div>
                </div>

                <div className={styles.certActions}>
                    <button className={styles.certBtnPrimary}>
                        <ApplyIcon /> สมัครเข้ารับการฝึกอบรม
                    </button>

                    <button className={styles.certBtnSecondary}>
                        <DocIcon /> ดาวน์โหลดรายละเอียดหลักสูตร
                    </button>
                </div>
            </div>

        </div>
    );
}