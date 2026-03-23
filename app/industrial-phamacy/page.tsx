import styles from "./industrial-phamacy.module.css";
import HighlightSection from "../components/highlight/HighlightSection";
import NewsSection from "../components/news/NewsSection";
import MeetingSection from "../components/meeting/MeetingSection";
import BannerSection from "../components/banner/BannerSection";
import AboutSection from "../components/about/AboutSection";
import MenuSection from "../components/menu/MenuSection";




export default function PharmacotherapyPage() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <BannerSection />
                <AboutSection />
                <MenuSection />
                <HighlightSection />
                <MeetingSection />
                <NewsSection />

            </main>
        </div>
    );
}