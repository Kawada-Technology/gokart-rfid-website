import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kawada GoKart RFID | 高精度卡丁车圈速系统",
  description: "基于 CF-815 UHF RFID 读卡器的专业卡丁车圈速计数系统。提供实时可视化、音频反馈和自动化会话管理。",
  keywords: ["RFID", "卡丁车", "圈速", "CF-815", "UHF", "计时系统", "赛车", "Kawada"],
  authors: [{ name: "Kawada & Antigravity AI" }],
  openGraph: {
    title: "Kawada GoKart RFID Lap Counter System",
    description: "高精度卡丁车圈速计数系统 - 专业、可靠、易用",
    type: "website",
    locale: "zh_CN",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <NextAuthProvider>
              <Navigation />
              <main>{children}</main>
              <Footer />
            </NextAuthProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
        {/* Vercel Analytics */}
        <Analytics />
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
