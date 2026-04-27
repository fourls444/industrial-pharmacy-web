import "./globals.css";
import HeaderSection from "./components/ui/HeaderSection/HeaderSection";
import FooterSection from "./components/ui/FooterSection/FooterSection";

export const metadata = {
  title: "วิทยาลัยเภสัชกรรมอุตสาหการ",
  description: "College of Industrial Pharmacy of Thailand (CIPT)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
