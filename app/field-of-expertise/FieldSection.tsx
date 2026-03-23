"use client";
import { useEffect, useRef } from "react";
import styles from "./Field.module.css";

export default function FieldSection() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.show);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const fields = [
        {
            title: "สาขา 1",
            desc: "สาขาอุตสาหการ",
            img: "/images/field of expertise/expertise1.png",
        },
        {
            title: "สาขา 2",
            desc: "สาขาอุตสาหการ",
            img: "/images/field of expertise/expertise2.png",
        },
        {
            title: "สาขา 3",
            desc: "สาขาอุตสาหการ",
            img: "/images/field of expertise/expertise3.png",
        },
        {
            title: "สาขา 4",
            desc: "สาขาอุตสาหการ",
            img: "/images/field of expertise/expertise4.png",
        },
        {
            title: "สาขา 5",
            desc: "สาขาอุตสาหการ",
            img: "/images/field of expertise/expertise5.png",
        },
        {
            title: "สาขา 6",
            desc: "สาขาอุตสาหการ",
            img: "/images/field of expertise/expertise6.png",
        },
    ];

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>สาขาความเชี่ยวชาญ</h2>

            <div
                ref={gridRef}
                className={`${styles.grid} ${styles.fadeUp}`}
            >
                {fields.map((item, index) => (
                    <div key={index} className={styles.card}>
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
        </section>
    );
}