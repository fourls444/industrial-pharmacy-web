"use client";
import styles from "./Course.module.css";

export default function CourseSection() {
    const courses = [
        {
            img: "/images/course/course2.png",
            title: "วิจัยและพัฒนา",
            desc: "การพัฒนายาและผลิตภัณฑ์ใหม่",
        },
        {
            img: "/images/course/course3.png",
            title: "การผลิต",
            desc: "กระบวนการผลิตตามมาตรฐาน GMP",
        },
        {
            img: "/images/course/course4.png",
            title: "ควบคุมคุณภาพ",
            desc: "การทดสอบและรับรองคุณภาพ",
        },
        {
            img: "/images/course/course5.png",
            title: "ประกันคุณภาพ",
            desc: "ระบบการจัดการคุณภาพ",
        },
        {
            img: "/images/course/course6.png",
            title: "การขึ้นทะเบียน",
            desc: "การขึ้นทะเบียนตำรับยา",
        },
        {
            img: "/images/course/course7.png",
            title: "เภสัชระวัง",
            desc: "ติดตามความปลอดภัยผลิตภัณฑ์",
        },
    ];

    const programs = [
        {
            icon: "/images/course/course8.png",
            title: "วุฒิบัตรและประกาศนียบัตร",
            eng: "CERTIFICATE & DIPLOMA PROGRAMS",
            desc: "หลักสูตรเฉพาะทางที่ได้รับการรับรองจากสภาเภสัชกรรมเพื่อยืนยันความเชี่ยวชาญในสาขาเภสัชกรรมอุตสาหการ",
            highlights: [
                "การรับรองสมรรถนะระดับผู้เชี่ยวชาญ",
                "การประเมินผลแบบครอบคลุม",
                "หลักสูตรตามมาตรฐานสากล",
                "ประกาศนียบัตรที่ได้รับการยอมรับ"
            ],
            highlighted: false
        },
        {
            icon: "/images/course/course9.png",
            title: "พัฒนาวิชาชีพต่อเนื่อง",
            eng: "CONTINUING PROFESSIONAL DEVELOPMENT",
            desc: "โปรแกรมพัฒนาความรู้และทักษะอย่างต่อเนื่อง เพื่อให้ทันต่อการเปลี่ยนแปลงและนวัตกรรมในอุตสาหกรรมการยา",
            highlights: [
                "อัปเดตความรู้ล่าสุดในวงการ",
                "เครือข่ายแลกเปลี่ยนประสบการณ์",
                "การพัฒนาทักษะภาวะผู้นำ",
                "การเรียนรู้ตลอดชีวิต"
            ],
            highlighted: true
        },
        {
            icon: "/images/course/course10.png",
            title: "หลักสูตรฝึกอบรมระยะสั้น",
            eng: "SHORT-TERM TRAINING PROGRAMS",
            desc: "หลักสูตรอบรมเข้มข้นด้านเภสัชกรรมอุตสาหการ เน้นองค์ความรู้และทักษะเฉพาะทางที่สามารถนำไปประยุกต์ใช้ได้ทันที",
            highlights: [
                "การวิจัยและพัฒนายา",
                "การผลิตและควบคุมคุณภาพ",
                "เทคโนโลยีและนวัตกรรม",
                "มาตรฐาน GMP และการประกันคุณภาพ"
            ],
            highlighted: false
        }
    ];

    return (
        <div className={styles.wrapper}>
            {/* HOLISTIC LEARNING SECTION */}
            <h2 className={styles.title}>
                การเรียนรู้แบบองค์รวมรอบด้านในอุตสาหกรรมยา
            </h2>

            <p className={styles.desc}>
                ครอบคลุมองค์ความรู้ตลอดการศึกษาของอุตสาหกรรมยาและผลิตภัณฑ์สุขภาพ
            </p>

            <div className={styles.grid}>
                {courses.map((item, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.imageBox}>
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className={styles.content}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* TRAINING PROGRAMS SECTION */}
            <div className={styles.programSection}>
                <h2 className={styles.title}>ประเภทหลักสูตรฝึกอบรม</h2>
                <p className={styles.desc}>
                    หลักสูตรที่มุ่งเน้นการพัฒนาสมรรถนะของเภสัชกรให้สามารถทำงานในระดับผู้เชี่ยวชาญ
                    เน้นทั้งภาคทฤษฎีและภาคปฏิบัติ รวมถึงการประยุกต์ใช้เทคโนโลยีและนวัตกรรม
                </p>

                <div className={styles.programGrid}>
                    {programs.map((prog, i) => (
                        <div key={i} className={`${styles.programCard} ${prog.highlighted ? styles.highlighted : ""}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconSquare}>
                                    <img src={prog.icon} alt={prog.title} />
                                </div>
                                <div className={styles.cardTitleGroup}>
                                    <h3>{prog.title}</h3>
                                    <span className={styles.engSubtitle}>{prog.eng}</span>
                                </div>
                            </div>

                            <p className={styles.cardBodyDesc}>{prog.desc}</p>

                            <h4 className={styles.highlightsTitle}>หัวข้อสำคัญ</h4>
                            <div className={styles.highlightsList}>
                                {prog.highlights.map((h, idx) => (
                                    <div key={idx} className={styles.highlightItem}>
                                        {h}
                                    </div>
                                ))}
                            </div>

                            <button className={`${styles.detailBtn} ${prog.highlighted ? styles.activeCardBtn : ""}`}>
                                ดูรายละเอียด
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATION BANNER */}
            <div className={styles.certificationBanner}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerIcon}>
                        <img src="/images/course/course11.png" alt="Certification" />
                    </div>
                    <div className={styles.bannerText}>
                        <h3>การรับรองทักษะ</h3>
                        <p>
                            ผู้ที่ผ่านการอบรมจากวิทยาลัยจะได้รับการรับรองทักษะในระดับผู้เชี่ยวชาญเฉพาะทาง
                            ซึ่งช่วยยกระดับความสามารถของบุคลากรในอุตสาหกรรมยาและผลิตภัณฑ์สุขภาพของประเทศ
                        </p>
                    </div>
                </div>
                <div className={styles.bannerActions}>
                    <button className={styles.primaryBtn}>
                        สมัครเข้ารับการฝึกอบรม
                    </button>
                    <button className={styles.secondaryBtn}>
                        ดาวน์โหลดรายละเอียดหลักสูตร
                    </button>
                </div>
            </div>
        </div>
    );
}