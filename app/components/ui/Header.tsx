"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const [lang, setLang] = useState<"TH" | "EN">("TH");

    const handleSelect = (selectedLang: "TH" | "EN") => {
        setLang(selectedLang);
        setOpen(false);
    };

    return (
        <header className={styles.header}>
            {/* LEFT */}
            <div className={styles.left}>
                <img src="/images/favicon.png" className={styles.logo} />
                <div>
                    <h1>
                        {lang === "TH"
                            ? "วิทยาลัยเภสัชกรรมอุตสาหการ"
                            : "College of Industrial Pharmacy"}
                    </h1>
                    <p>
                        {lang === "TH"
                            ? "องค์กรวิชาชีพที่มุ่งพัฒนาองค์ความรู้ ความเชี่ยวชาญ และมาตรฐานวิชาชีพด้านเภสัชกรรมอุตสาหการของประเทศไทย"
                            : "Professional organization advancing knowledge, expertise, and standards in industrial pharmacy in Thailand"}
                    </p>
                </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
                <div
                    className={styles.langSwitch}
                    onClick={() => setOpen(!open)}
                >
                    <Globe className={styles.icon} />
                    <span>{lang}</span>
                    <span className={styles.arrow}>▾</span>

                    {/* DROPDOWN */}
                    {open && (
                        <div className={styles.dropdown}>
                            <div onClick={() => handleSelect("TH")}>TH</div>
                            <div onClick={() => handleSelect("EN")}>EN</div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}