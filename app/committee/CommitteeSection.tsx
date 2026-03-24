"use client";
import { useEffect } from "react";
import styles from "./Committee.module.css";

export default function CommitteeSection() {
    const president = {
        name: "รศ.ดร.ภก.สาธิต พุทธิพิพัฒน์ขจร",
        position: "ประธาน",
        img: "/images/committee/committee1.png",
    };

    const members = [
        { name: "ภก. วีรยุทธ วีระรัศมี", position: "รองประธาน", img: "/images/committee/committee2.png" },
        { name: "ผศ.ดร.ภก. สถาพร นิ่มกุลรัตน์", position: "เลขาธิการ", img: "/images/committee/committee3.png" },
        { name: "ภญ. วัลภา เตียรสุวรรณ์", position: "นายทะเบียน" },
        { name: "ผศ.ดร.ภญ. นฤพร สุตัณฑวิบูลย์", position: "เหรัญญิก", img: "/images/committee/committee4.png" },
        { name: "ศ.ดร.ภก. พรสักดิ์ ศรีอมรศักดิ์", position: "เลขาธิการวิทยาลัยและกรรมการกลาง", img: "/images/committee/committee5.png" },
        { name: "รศ.ดร.ภก. สาธิต พุทธิพิพัฒน์ขจร", position: "รองผู้อำนวยการวิทยาลัย" },
        { name: "ภก. ปราโมทย์ ชลยุทธ์", position: "รองผู้อำนวยการวิทยาลัย", img: "/images/committee/committee6.png" },
        { name: "ภก. วีรยุทธ จิรรัศมิ์", position: "รองผู้อำนวยการวิทยาลัย" },
        { name: "ภก. ประเสริฐ เลิศเลอพันธ์", position: "กรรมการกลาง", img: "/images/committee/committee7.png" },
        { name: "ภญ. พร้อมพร รจำนงธนาโชติ", position: "กรรมการกลาง", img: "/images/committee/committee8.png" },
        { name: "ผศ.ดร.ภญ. นฤพร สุตัณฑวิบูลย์", position: "เหรัญญิกวิทยาลัย" },
        { name: "ดร. ภญ. โศรดา หวังเมธีกุล", position: "นายทะเบียนวิทยาลัย", img: "/images/committee/committee9.png" },
    ];

    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.card}`);
        const presidentEl = document.querySelector(`.${styles.presidentCard}`);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === presidentEl) {
                        entry.target.classList.add(styles.presidentShow);
                    } else {
                        entry.target.classList.add(styles.show);
                    }
                }
            });
        }, { threshold: 0.1 });

        cards.forEach((card) => observer.observe(card));
        if (presidentEl) observer.observe(presidentEl);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.titleMain}>
                    "ผู้นำทางวิชาชีพ ขับเคลื่อนมาตรฐานและอนาคตของเภสัชกรรมอุตสาหการ"
                </h2>
                <p className={styles.desc}>
                    คณะกรรมการบริหารของวิทยาลัยประกอบด้วยผู้ทรงคุณวุฒิและผู้เชี่ยวชาญในสาขาเภสัชกรรมอุตสาหการ
                    ซึ่งมีบทบาทสำคัญในการกำหนดนโยบายและทิศทางการพัฒนาวิทยาลัย
                </p>
            </div>

            <div className={styles.presidentCard}>
                <div className={styles.imageBox}>
                    {president.img && <img src={president.img} alt={president.name} />}
                </div>
                <div className={styles.presidentInfo}>
                    <h3>{president.name}</h3>
                    <p>{president.position}</p>
                </div>
            </div>

            {/* MEMBERS GRID */}
            <div className={styles.grid}>
                {members.map((item, i) => (
                    <div
                        key={i}
                        className={styles.card}
                        style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
                    >
                        <div className={styles.cardImage}>
                            {item.img && <img src={item.img} alt={item.name} />}
                        </div>
                        <div className={styles.info}>
                            <h4>{item.name}</h4>
                            <p>{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
