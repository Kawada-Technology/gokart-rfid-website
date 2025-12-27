import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GoKart RFID Lap Counter System | 高精度卡丁车圈速系统",
  description: "基于 CF-815 UHF RFID 读卡器的专业卡丁车圈速计数系统。提供实时可视化、音频反馈和自动化会话管理。",
  keywords: ["RFID", "卡丁车", "圈速", "CF-815", "UHF", "计时系统", "赛车"],
  authors: [{ name: "Kawada & Antigravity AI" }],
  openGraph: {
    title: "GoKart RFID Lap Counter System",
    description: "高精度卡丁车圈速计数系统 - 专业、可靠、易用",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
