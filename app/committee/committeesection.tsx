"use client";
import React from 'react';
import styles from './committee.module.css';

interface Member {
    name: string;
    role: string;
    img: string;
}

export default function CommitteeSection() {
    const featuredMember: Member = {
        name: "รศ.ดร.ภก.สาธิต พุทธิพิพัฒน์ขจร",
        role: "ประธาน",
        img: "/images/committee/committee1.png"
    };

    const members: Member[] = [
        { name: "ภก. วีรยุทธ จิรรัศมิ์", role: "รองประธาน", img: "/images/committee/committee2.png" },
        { name: "ผศ.ดร.ภก. สถาพร นิ่มกุลรัตน์", role: "เลขาธิการ", img: "/images/committee/committee3.png" },
        { name: "ภญ. วัลภา เตียสุวรรณ์", role: "นายทะเบียน", img: "/images/committee/committee4.png" },
        { name: "ผศ.ดร.ภญ. นฤพร สุตัณฑวิบูลย์", role: "เหรัญญิก", img: "/images/committee/committee5.png" },
        { name: "ศ.ดร.ภก. พรศักดิ์ ศรีอมรศักดิ์", role: "เลขาธิการวิทยาลัยและกรรมการกลาง", img: "/images/committee/committee6.png" },
        { name: "ผศ.ดร.ภก. สาธิต พุทธิพิพัฒน์ขจร", role: "รองผู้อำนวยการวิทยาลัย", img: "/images/committee/committee7.png" },
        { name: "ภก. ปราโมทย์ ชลยุทธ์", role: "รองผู้อำนวยการวิทยาลัย", img: "/images/committee/committee8.png" },
        { name: "ภก. วีรยุทธ จิรรัศมิ์", role: "รองผู้อำนวยการวิทยาลัย", img: "/images/committee/committee9.png" },
        { name: "ภก. ประเสริฐ เลิศเลอพันธ์", role: "กรรมการกลาง", img: "/images/committee/committee10.png" },
        { name: "ภญ. พร้อมพร จำนงธนาโชติ", role: "กรรมการกลาง", img: "/images/committee/committee11.png" },
        { name: "ผศ.ดร.ภญ. นฤพร สุตัณฑวิบูลย์", role: "เหรัญญิกวิทยาลัย", img: "/images/committee/committee12.png" },
        { name: "ดร. ภญ. โศรดา หวังเมธีกุล", role: "นายทะเบียนวิทยาลัย", img: "/images/committee/committee13.png" },
    ];

    return (
        <div className={styles.committeeSection}>
            <div className={styles.header}>
                <h2>
                    “ผู้นำทางวิชาชีพ<br />
                    ขับเคลื่อนมาตรฐานและอนาคตของเภสัชกรรมอุตสาหการ”
                </h2>
                <p>
                    คณะกรรมการบริหารของวิทยาลัยประกอบด้วยผู้ทรงคุณวุฒิและผู้เชี่ยวชาญในสาขาเภสัชกรรมอุตสาหการ
                    ซึ่งมีบทบาทสำคัญในการกำหนดนโยบายและทิศทางการพัฒนาวิทยาลัย
                </p>
            </div>

            <div className={styles.featuredContainer}>
                <div className={styles.featuredCard}>
                    <div className={styles.photoWrapper}>
                        <img src={featuredMember.img} alt={featuredMember.name} className={styles.photo} />
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.name}>{featuredMember.name}</h4>
                        <p className={styles.role}>{featuredMember.role}</p>
                    </div>
                </div>
            </div>

            <div className={styles.membersGrid}>
                {members.map((member, idx) => (
                    <div key={idx} className={styles.memberCard}>
                        <div className={styles.memberPhotoWrapper}>
                            <img src={member.img} alt={member.name} className={styles.memberPhoto} />
                        </div>
                        <div className={styles.memberInfo}>
                            <h4 className={styles.memberName}>{member.name}</h4>
                            <p className={styles.memberRole}>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
