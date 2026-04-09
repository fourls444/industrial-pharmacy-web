"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Highlight.module.css";

const CARDS = [
    { id: 1, src: "/images/highlight/highlight1.png" },
    { id: 2, src: "/images/highlight/highlight2.png" },
    { id: 3, src: "/images/highlight/highlight3.png" },
    { id: 4, src: "/images/highlight/highlight4.png" },
    { id: 5, src: "/images/highlight/highlight5.png" },
    { id: 6, src: "/images/highlight/highlight6.png" },
];

export default function CollegesSection() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isPaused, setIsPaused] = useState(false);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) =>
            prev === CARDS.length - 1 ? 0 : prev + 1
        );
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) =>
            prev === 0 ? CARDS.length - 1 : prev - 1
        );
    }, []);

    // Auto-scroll loop: right to left (next)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [handleNext, isPaused]);

    const getPositionClass = (index: number) => {
        const diff = (index - activeIndex + CARDS.length) % CARDS.length;
        if (diff === 0) return styles.slideCenter;
        if (diff === 1) return styles.slideRight1;
        if (diff === CARDS.length - 1) return styles.slideLeft1;
        if (diff === 2) return styles.slideHiddenRight;
        if (diff === CARDS.length - 2) return styles.slideHiddenLeft;
        return styles.slideHiddenRight;
    };

    return (
        <section className={styles.collegesSection}>
            <div className={styles.collegesHeader}>
                <p className={styles.subtitle}>
                    Highlight วิทยาลัยเภสัชกรรมอุตสาหการ
                </p>
                <h2 className={styles.mainTitle}>
                    ขับเคลื่อนวิชาชีพเภสัชกรรมสู่การผลิตยาและสุขภาพที่ยั่งยืน
                </h2>
                <p className={styles.description}>
                    CIPT: แหล่งรวมความรู้ สร้างสรรค์นวัตกรรม พัฒนาเภสัชกรรมอุตสาหการไทย
                </p>
            </div>

            <div
                className={styles.carouselContainer}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className={styles.carouselTrack}>
                    {CARDS.map((card, index) => {
                        return (
                            <div
                                key={card.id}
                                className={`${styles.cardSlide} ${getPositionClass(index)}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Image
                                    src={card.src}
                                    alt={`Highlight ${card.id}`}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    quality={75} // ✅ แก้ error แล้ว
                                    priority={index === activeIndex} // ✅ โหลดเฉพาะรูปหลัก
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                        );
                    })}

                    {/* Navigation Buttons: Removed as requested for auto-scroll */}
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    {CARDS.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""
                                }`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}