"use client";
import styles from "./Meeting.module.css";
import {
    HiOutlineMapPin,
    HiOutlineCalendar,
    HiOutlineUsers,
    HiOutlineTag
} from "react-icons/hi2";

type Meeting = {
    day: string;
    month: string;
    title: string;
    location: string;
    date: string;
    participants: string;
    category: string;
    img: string;
};

const meetings: Meeting[] = [
    {
        day: "2",
        month: "พ.ค.",
        title: "สภาเภสัชกรรมจัดอบรมเข้มข้น หลักสูตรการจัดการร้านยา รุ่นที่ 9",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อินเฟกซ์ ฟอร์ซี เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        participants: "บุคคลทั่วไป 100 คน",
        category: "ราชวิทยาลัย",
        img: "/images/meeting/meeting1.png"
    },
    {
        day: "1",
        month: "มี.ค.",
        title: "งานประชุมวิชาการนานาชาติ CPHP 2027: ขับเคลื่อนเภสัชกร สู่อนาคตสุขภาพ",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อินเฟกซ์ ฟอร์ซี เมืองทองธานี จังหวัดนนทบุรี",
        date: "01 มี.ค. 2569 - 15 มี.ค. 2569",
        participants: "เภสัชกร 100 คน",
        category: "ราชวิทยาลัย",
        img: "/images/meeting/meeting2.png"
    },
    {
        day: "13",
        month: "ก.พ.",
        title: "ประกาศนียบัตรวิชาชีพเภสัชกรรมคลินิก รุ่นที่ 6 เปิดรับสมัครแล้ว",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อินเฟกซ์ ฟอร์ซี เมืองทองธานี จังหวัดนนทบุรี",
        date: "13 ก.พ. 2569 - 30 ก.ย. 2569",
        participants: "บุคคลทั่วไป 100 คน",
        category: "ราชวิทยาลัย",
        img: "/images/meeting/meeting3.png"
    }
];

export default function MeetingSection() {
    return (
        <section className={styles.wrapper}>
            {/* Header */}
            <div className={styles.header}>
                <h2>การประชุมวิทยาลัยเภสัชกรรมอุตสาหการ</h2>
                <span className={styles.viewAll}>ดูทั้งหมด →</span>
            </div>

            {/* List */}
            <div className={styles.list}>
                {meetings.map((m, i) => (
                    <div key={i} className={styles.card}>

                        {/* วันที่ */}
                        <div className={styles.dateBox}>
                            <h3>{m.day}</h3>
                            <span>{m.month}</span>
                        </div>

                        {/* เส้นคั่น */}
                        <div className={styles.divider}></div>

                        {/* เนื้อหา */}
                        <div className={styles.content}>
                            <h4>{m.title}</h4>

                            <div className={styles.meta}>
                                <div>
                                    <HiOutlineMapPin />
                                    <span>{m.location}</span>
                                </div>
                                <div>
                                    <HiOutlineCalendar />
                                    <span>{m.date}</span>
                                </div>
                                <div>
                                    <HiOutlineUsers />
                                    <span>{m.participants}</span>
                                </div>
                                <div>
                                    <HiOutlineTag />
                                    <span>{m.category}</span>
                                </div>
                            </div>
                        </div>

                        {/* รูป */}
                        <div className={styles.image}>
                            <img src={m.img} alt="meeting" />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}