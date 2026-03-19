"use client";
import styles from "./information.module.css";

export default function InformationSection({ isSubComponent = false }: { isSubComponent?: boolean }) {
    const areas = [
        {
            title: "วิจัยและพัฒนา",
            desc: "การพัฒนายาและผลิตภัณฑ์ใหม่",
            icon: "/images/course/course2.png"
        },
        {
            title: "การผลิต",
            desc: "กระบวนการผลิตตามมาตรฐาน GMP",
            icon: "/images/course/course3.png"
        },
        {
            title: "ควบคุมคุณภาพ",
            desc: "การทดสอบและรับรองคุณภาพ",
            icon: "/images/course/course4.png"
        },
        {
            title: "ประกันคุณภาพ",
            desc: "ระบบการจัดการคุณภาพ",
            icon: "/images/course/course5.png"
        },
        {
            title: "การขึ้นทะเบียน",
            desc: "การขึ้นทะเบียนตำรับยา",
            icon: "/images/course/course6.png"
        },
        {
            title: "เภสัชระวัง",
            desc: "ติดตามความปลอดภัยผลิตภัณฑ์",
            icon: "/images/course/course7.png"
        }
    ];

    const trainingPrograms = [
        {
            title: "วุฒิบัตรและประกาศนียบัตร",
            subtitle: "CERTIFICATE & DIPLOMA PROGRAMS",
            icon: "/images/course/course9.png",
            downloadIcon: "/images/course/course12.png",
            text: "หลักสูตรเฉพาะทางที่ได้รับข้อยกเว้นจากสภาเภสัชกร เพื่อฝึกฝนเป็นผู้เชี่ยวชาญในสายงานอุตสาหกรรมยา",
            highlights: [
                "การรับรองสมรรถนะเป็นผู้เชี่ยวชาญ",
                "การประเมินผลแบบครอบคลุม",
                "หลักสูตรตามมาตรฐานสากล",
                "ประกาศนียบัตรที่ได้รับสิทธิรับรอง"
            ]
        },
        {
            title: "พัฒนาวิชาชีพต่อเนื่อง",
            subtitle: "CONTINUING PROFESSIONAL DEVELOPMENT",
            icon: "/images/course/course10.png",
            downloadIcon: "/images/course/course13.png",
            text: "โปรแกรมเสริมสมรรถนะความรู้และทักษะอย่างต่อเนื่อง เพื่อก้าวให้ทันสมัยต่อการเปลี่ยนแปลงนวัตกรรมในอุตสาหกรรมยา",
            highlights: [
                "อัปเดตความรู้ล่าสุดในวงการ",
                "เครือข่ายแลกเปลี่ยนประสบการณ์",
                "การจัดการนวัตกรรมและผู้นำ",
                "การเรียนรู้ตลอดชีวิต"
            ],
            isFeatured: true
        },
        {
            title: "หลักสูตรฝึกอบรมระยะสั้น",
            subtitle: "SHORT-TERM TRAINING PROGRAMS",
            icon: "/images/course/course11.png",
            downloadIcon: "/images/course/course12.png",
            text: "หลักสูตรระยะสั้นที่เข้มข้นในแต่ละสาขาวิชา เน้นองค์ความรู้และทักษะเฉพาะทางที่สามารถนำไปประยุกต์ใช้ได้ทันที",
            highlights: [
                "การวิจัยและวิเคราะห์",
                "การผลิตและควบคุมคุณภาพ",
                "เทคโนโลยีนวัตกรรม",
                "มาตรฐาน GMP และการประกันคุณภาพ"
            ]
        }
    ];

    return (
        <div className={isSubComponent ? styles.subComponentContainer : styles.courseSection}>
            <div className={styles.header}>
                <div className={styles.label}>
                    <img src="/images/course/course1.png" alt="Concept" />
                    <span>ขอบเขตความรู้</span>
                </div>
                <h2>การเรียนรู้แบบองค์รวมรอบด้านในอุตสาหกรรมยา</h2>
                <p>ครอบคลุมองค์ความรู้ตลอดการศึกษาของอุตสาหกรรมยาและผลิตภัณฑ์สุขภาพ</p>
            </div>

            <div className={styles.areasGrid}>
                {areas.map((area, idx) => (
                    <div key={idx} className={styles.areaCard}>
                        <div className={styles.areaIcon}>
                            <img src={area.icon} alt={area.title} />
                        </div>
                        <div className={styles.areaText}>
                            <h4>{area.title}</h4>
                            <p>{area.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.trainingSection}>
                <div className={styles.trainingHeader}>
                    <div className={styles.label}>
                        <img src="/images/course/course8.png" alt="Programs" />
                        <span>หลักสูตร</span>
                    </div>
                    <h2>ประเภทหลักสูตรฝึกอบรม</h2>
                    <p>
                        หลักสูตรที่มุ่งเน้นการพัฒนาสมรรถนะของเภสัชกรให้สามารถทำงานในระดับผู้เชี่ยวชาญ
                        เน้นจากทฤษฎีและภาคปฏิบัติ รวมถึงการประยุกต์ใช้เทคโนโลยีและนวัตกรรม
                    </p>
                </div>

                <div className={styles.trainingGrid}>
                    {trainingPrograms.map((program, idx) => (
                        <div
                            key={idx}
                            className={`${styles.trainingCard} ${program.isFeatured ? styles.featuredCard : ""}`}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIcon}>
                                        <img src={program.icon} alt={program.title} />
                                    </div>
                                    <div className={styles.cardTitles}>
                                        <h4>{program.title}</h4>
                                        <span className={styles.cardSubtitle}>{program.subtitle}</span>
                                    </div>
                                </div>
                                <p className={styles.cardText}>{program.text}</p>

                                <div className={styles.highlightsTitle}>หัวข้อสำคัญ</div>
                                <ul className={styles.highlightsList}>
                                    {program.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className={styles.downloadBtn}>
                                <img src={program.downloadIcon} alt="Download" />
                                <span>ดาวน์โหลด</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.certBanner}>
                <div className={styles.certText}>
                    <div className={styles.certHeader}>
                        <div className={styles.certIcon}>
                            <img src="/images/course/course9.png" alt="Cert" />
                        </div>
                        <h3>การรับรองทักษะ:</h3>
                    </div>
                    <p>
                        ผู้ที่ผ่านการอบรมจากวิทยาลัยจะรับใบรับรองทักษะระดับผู้เชี่ยวชาญเฉพาะทาง
                        ซึ่งช่วยยกระดับความสามารถของบุคลากรเภสัชกรรมและอุตสาหกรรมยาและผลิตภัณฑ์สุขภาพ
                        ในระดับสากล
                    </p>
                </div>
                <div className={styles.certActions}>
                    <button className={styles.applyBtn}>
                        <img src="/images/course/course8.png" alt="Apply" />
                        <span>สมัครเข้าร่วมการฝึกอบรม</span>
                    </button>
                    <button className={styles.detailsBtn}>
                        <img src="/images/course/course13.png" alt="Details" />
                        <span>ดาวน์โหลดรายละเอียดหลักสูตร</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
