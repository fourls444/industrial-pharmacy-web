"use client";
import { useState } from "react";
import HistorySection from "../history/historysection";
import styles from "./industrialpharmacy.module.css";
import {
    HiOutlineMagnifyingGlass,
    HiOutlineBars3BottomLeft,
    HiOutlineMapPin,
    HiOutlineCalendar,
    HiOutlineUsers,
    HiOutlineTag,
    HiChevronRight,
    HiChevronLeft,
    HiChevronDown
} from "react-icons/hi2";

export default function IndustrialPharmacyPage() {

    const colleges = [
        { name: "ราชวิทยาลัยเภสัชบำบัด", img: "/images/services/Services1.png" },
        { name: "ราชวิทยาลัยคุ้มครองผู้บริโภคด้านยา", img: "/images/services/Services2.png" },
        { name: "ราชวิทยาลัยเภสัชกรรมอุตสาหการ", img: "/images/services/Services3.png" },
        { name: "ราชวิทยาลัยเภสัชกรรมชุมชน", img: "/images/services/Services4.png" },
        { name: "ราชวิทยาลัยบริหารเภสัชกิจ", img: "/images/services/Services5.png" },
        { name: "ราชวิทยาลัยเภสัชพันธุศาสตร์", img: "/images/services/Services6.png" },
        { name: "ราชวิทยาลัยเภสัชกรรมสมุนไพร", img: "/images/services/Services7.png" }
    ];

    const meetings = [
        {
            day: "2",
            month: "พ.ค.",
            title: "สภาเภสัชกรรมจัดอบรมเข้มข้น หลักสูตรการจัดการร้านยา รุ่นที่ 9",
            location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
            date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
            participantsText: "บุคคลทั่วไป,",
            hasPharmacistBadge: true,
            count: "จำนวน : 100 คน",
            category: "ราชวิทยาลัย",
            img: "/images/meeting/meeting1.png"
        },
        {
            day: "1",
            month: "มี.ค.",
            title: "งานประชุมวิชาการนานาชาติ CPHP 2027: ขับเคลื่อนเภสัชกร สู่อนาคตสุขภาพ",
            location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
            date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
            participantsText: "",
            hasPharmacistBadge: true,
            count: "จำนวน : 100 คน",
            category: "ราชวิทยาลัย",
            img: "/images/meeting/meeting2.png"
        },
        {
            day: "13",
            month: "ก.พ.",
            title: "ประกาศนียบัตรวิชาชีพเภสัชกรรมคลินิก รุ่นที่ 6 เปิดรับสมัครแล้ว",
            location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
            date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
            participantsText: "บุคคลทั่วไป,",
            hasPharmacistBadge: false,
            count: "จำนวน : 100 คน",
            category: "ราชวิทยาลัย",
            img: "/images/meeting/meeting3.png"
        }
    ];

    const news = [
        {
            tag: "ข่าวประชาสัมพันธ์",
            title: "วิทยาลัยฯ จัดโครงการอบรมเชิงปฏิบัติการ: การจัดการความเสี่ยงด้านยา",
            desc: "โครงการอบรมพัฒนาเภสัชกร: เพิ่มพูนทักษะดูแลผู้ป่วย NCDs",
            img: "/images/message/message1.png"
        },
        {
            tag: "ข่าวรับสมัครเภสัชกร",
            title: "วิทยาลัยฯ เชิญชวนเภสัชกรเข้าร่วมโครงการพัฒนาศักยภาพ ปี 70",
            desc: "อบรมเข้มข้น 15 สัปดาห์ เพิ่มพูนทักษะจัดการยาในโรงพยาบาล",
            img: "/images/message/message2.png"
        },
        {
            tag: "ข่าวประชาสัมพันธ์",
            title: "วิทยาลัยฯ จัดสัมมนาวิชาการ: นวัตกรรมยาแห่งอนาคต",
            desc: "หลักสูตรฝึกอบรมระยะสั้น 20 สัปดาห์",
            img: "/images/message/message3.png"
        }
    ];

    return (
        <div className={styles.container}>

            {/* --- HERO SECTION --- */}
            <section className={styles.heroSection}>
                <img src="/images/banner/banner.png" className={styles.bannerImage} alt="Hero Banner" />
                <div className={styles.heroOverlay}>
                    <div className={styles.logoCircle}>
                        <img src="/images/favicon.png" alt="Logo" />
                    </div>
                    <div className={styles.heroText}>
                        <h1>วิทยาลัยเภสัชกรรมอุตสาหการ</h1>
                        <p>
                            องค์กรวิชาชีพที่มุ่งพัฒนาองค์ความรู้ ความเชี่ยวชาญ และมาตรฐานวิชาชีพ<br />
                            ด้านเภสัชกรรมอุตสาหการของประเทศไทย
                        </p>
                    </div>
                </div>
            </section>

            {/* --- ABOUT + SEARCH SECTION --- */}
            <section className={styles.aboutSearchSection}>
                <div className={styles.aboutGrid}>
                    <div className={styles.imageBox}>
                        <img src="/images/home/home.png" alt="Main Image" />
                        <div className={styles.overlayLogo}>
                            <img src="/images/home/logohome.png" alt="CIPT Logo" />
                        </div>
                        <div className={styles.imageOverlayText}>
                            <h3>วิทยาลัยเภสัชกรรมอุตสาหการ</h3>
                            <p>(Thai College of Pharmacy)</p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <h2>วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย</h2>
                        <p>
                            ศูนย์กลางการพัฒนาองค์ความรู้และผู้เชี่ยวชาญด้านเภสัชกรรมอุตสาหการ
                            เพื่อยกระดับมาตรฐานวิชาชีพและอุตสาหกรรมยาไทยสู่ระดับสากล
                        </p>

                        <div className={styles.searchCard}>
                            <div className={styles.searchHeader}>
                                <h3>ค้นหารายชื่อ</h3>
                                <p>ผู้ประกอบวิชาชีพเภสัชกรรม</p>
                            </div>
                            <div className={styles.searchBar}>
                                <div className={styles.inputGroup}>
                                    <HiOutlineBars3BottomLeft className={styles.inputIcon} />
                                    <select>
                                        <option>เลขที่ใบอนุญาต</option>
                                    </select>
                                    <HiChevronDown className={styles.selectArrow} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <HiOutlineMagnifyingGlass className={styles.inputIcon} />
                                    <input type="text" placeholder="ค้นหาเลขที่ใบอนุญาต" />
                                </div>
                                <button className={styles.searchBtn}>ค้นหา</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- HISTORY SECTION --- */}
            <HistorySection />

            {/* --- 7 COLLEGES SECTION --- */}
            <section className={styles.collegesSection}>
                <div className={styles.collegesHeader}>
                    <h2>รายวิชาเภสัชกรรมทั้ง 7 วิทยาลัย</h2>
                    <p>
                        เป็นองค์กรภายใต้สภาเภสัชกรรม ที่มุ่งเน้นการส่งเสริมและพัฒนาศักยภาพทางวิชาชีพเภสัชกรรมอย่างต่อเนื่อง<br />
                        และสร้างมาตรฐานการศึกษาภายหลังปริญญาทั้งในระดับสถาบันคุณธรรมสากล
                    </p>
                </div>
                <div className={styles.collegesGrid}>
                    {colleges.map((college, idx) => (
                        <div key={idx} className={styles.collegeCard} style={{ backgroundImage: `url(${college.img})` }}>
                            <div className={styles.collegeNameOverlay}>
                                <div className={styles.smallLogoCircle}>
                                    <img src="/images/services/ServicesLogo.png" alt="College Logo" />
                                </div>
                                <p>{college.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- MEETINGS SECTION --- */}
            <section className={styles.meetingsSection}>
                <div className={styles.sectionHeading}>
                    <h2>การประชุม</h2>
                    <span className={styles.viewMore}>ดูทั้งหมด {">"}</span>
                </div>
                <div className={styles.meetingList}>
                    {meetings.map((m, idx) => (
                        <div key={idx} className={styles.meetingCard}>
                            <div className={styles.dateBlock}>
                                <h3>{m.day}</h3>
                                <span>{m.month}</span>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.meetingInfo}>
                                <h4>{m.title}</h4>
                                <div className={styles.meetingMeta}>
                                    <div className={styles.metaRow}>
                                        <HiOutlineMapPin className={styles.metaIcon} />
                                        <span>{m.location}</span>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <HiOutlineCalendar className={styles.metaIcon} />
                                        <span>วันที่จัดประชุม: {m.date}</span>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <HiOutlineUsers className={styles.metaIcon} />
                                        <span>
                                            ผู้เข้าร่วม: {m.participantsText}
                                            {m.hasPharmacistBadge && <span className={styles.pharmacistBadge}>เภสัชกร</span>}
                                            {" "}{m.count}
                                        </span>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <HiOutlineTag className={styles.metaIcon} />
                                        <span>หมวดหมู่: {m.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.meetingThumb}>
                                <img src={m.img} alt="Meeting Thumbnail" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- HIGHLIGHT SECTION --- */}
            <section className={styles.newsHighlightSection}>
                <div className={styles.highlightHeading}>
                    <h2>เรื่องเด่น</h2>
                    <div className={styles.navArrows}>
                        <button><HiChevronLeft /></button>
                        <button><HiChevronRight /></button>
                    </div>
                </div>

                <div className={styles.featuredStory}>
                    <div className={styles.featuredImage}>
                        <img src="/images/featuredstories/featuredstories1.png" alt="Featured" />
                    </div>
                    <div className={styles.featuredContent}>
                        <span className={styles.featuredTag}>ข่าวประชาสัมพันธ์</span>
                        <h3>วิทยาลัยฯ จัดโครงการอบรม:<br />การผลิตยาแผนปัจจุบันตามมาตรฐาน PIC/S</h3>
                        <p>เรียนรู้กระบวนการผลิตยาแผนปัจจุบัน: ตั้งแต่การคัดเลือกวัตถุดิบจนถึงการบรรจุ</p>
                        <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                    </div>
                </div>

                <div className={styles.pagingDots}>
                    <span className={styles.dotActive}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>

                <div className={styles.newsRowHeading}>
                    <h2>ข่าวสาร</h2>
                    <span className={styles.viewMore}>ดูทั้งหมด {">"}</span>
                </div>

                <div className={styles.newsCardsGrid}>
                    {news.map((n, idx) => (
                        <div key={idx} className={styles.newsItem}>
                            <div className={styles.newsItemThumb}>
                                <img src={n.img} alt="News" />
                                <span className={styles.newsTag}>{n.tag}</span>
                            </div>
                            <div className={styles.newsItemText}>
                                <h4>{n.title}</h4>
                                <p>{n.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}