import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// 博客文章数据 - 按语言分组
const blogPosts = [
    // 文章 1: CF-815 开发指南
    {
        slug: 'cf815-rfid-development-guide',
        translations: {
            zh: {
                title: '从零开始：CF-815 RFID 读卡器开发指南',
                content: `# CF-815 RFID 读卡器开发指南

## 概述
CF-815 是一款四端口 UHF RFID 读卡器，工作频率 860-960MHz，读取距离可达 8-10 米。本文将详细介绍如何使用 C# 进行二次开发。

## 硬件连接
1. 使用 USB 转串口线连接读卡器
2. 安装 CP210x 驱动程序
3. 波特率设置为 115200bps

## SDK 集成
\`\`\`csharp
using UHFReader288;

// 初始化读卡器
var reader = new Reader();
reader.OpenPort("COM7", 115200);
\`\`\`

完整代码请参考 GitHub 仓库。`,
                excerpt: '详细介绍如何使用 CF-815 四端口 UHF RFID 读卡器进行二次开发，包括 SDK 集成、通信协议、防抖算法等核心技术。',
                category: 'RFID技术',
                tags: ['C#', 'RFID', 'CF-815', '硬件开发'],
            },
            en: {
                title: 'Getting Started: CF-815 RFID Reader Development Guide',
                content: `# CF-815 RFID Reader Development Guide

## Overview
The CF-815 is a 4-port UHF RFID reader operating at 860-960MHz with a read range of 8-10 meters. This article details how to develop with it using C#.

## Hardware Connection
1. Connect the reader using a USB-to-Serial cable
2. Install the CP210x driver
3. Set baud rate to 115200bps

## SDK Integration
\`\`\`csharp
using UHFReader288;

// Initialize reader
var reader = new Reader();
reader.OpenPort("COM7", 115200);
\`\`\`

See the GitHub repository for complete code.`,
                excerpt: 'A comprehensive guide to developing with the CF-815 4-port UHF RFID reader, including SDK integration, communication protocols, and debounce algorithms.',
                category: 'RFID Technology',
                tags: ['C#', 'RFID', 'CF-815', 'Hardware Development'],
            },
            ms: {
                title: 'Bermula dari Sifar: Panduan Pembangunan Pembaca RFID CF-815',
                content: `# Panduan Pembangunan Pembaca RFID CF-815

## Gambaran Keseluruhan
CF-815 ialah pembaca RFID UHF 4-port yang beroperasi pada 860-960MHz dengan jarak bacaan 8-10 meter. Artikel ini menerangkan cara membangunkan dengannya menggunakan C#.

## Sambungan Perkakasan
1. Sambungkan pembaca menggunakan kabel USB-ke-Serial
2. Pasang pemacu CP210x
3. Tetapkan kadar baud kepada 115200bps

## Integrasi SDK
\`\`\`csharp
using UHFReader288;

// Mulakan pembaca
var reader = new Reader();
reader.OpenPort("COM7", 115200);
\`\`\`

Lihat repositori GitHub untuk kod lengkap.`,
                excerpt: 'Panduan lengkap untuk membangunkan dengan pembaca RFID UHF 4-port CF-815, termasuk integrasi SDK, protokol komunikasi, dan algoritma anti-gegar.',
                category: 'Teknologi RFID',
                tags: ['C#', 'RFID', 'CF-815', 'Pembangunan Perkakasan'],
            },
            ta: {
                title: 'தொடக்கத்திலிருந்து: CF-815 RFID ரீடர் மேம்பாட்டு வழிகாட்டி',
                content: `# CF-815 RFID ரீடர் மேம்பாட்டு வழிகாட்டி

## கண்ணோட்டம்
CF-815 என்பது 860-960MHz இல் இயங்கும் 4-போர்ட் UHF RFID ரீடர் ஆகும், 8-10 மீட்டர் வாசிப்பு வரம்பு கொண்டது. இந்த கட்டுரை C# பயன்படுத்தி எவ்வாறு மேம்படுத்துவது என்பதை விவரிக்கிறது.

## வன்பொருள் இணைப்பு
1. USB-to-Serial கேபிள் பயன்படுத்தி ரீடரை இணைக்கவும்
2. CP210x இயக்கியை நிறுவவும்
3. பாட் விகிதத்தை 115200bps ஆக அமைக்கவும்

## SDK ஒருங்கிணைப்பு
\`\`\`csharp
using UHFReader288;

// ரீடரை துவக்கவும்
var reader = new Reader();
reader.OpenPort("COM7", 115200);
\`\`\`

முழுமையான குறியீட்டிற்கு GitHub களஞ்சியத்தைப் பார்க்கவும்.`,
                excerpt: 'CF-815 4-போர்ட் UHF RFID ரீடருடன் மேம்படுத்துவதற்கான விரிவான வழிகாட்டி, SDK ஒருங்கிணைப்பு, தகவல் தொடர்பு நெறிமுறைகள் மற்றும் நடுக்கத் தடுப்பு வழிமுறைகள் உட்பட.',
                category: 'RFID தொழில்நுட்பம்',
                tags: ['C#', 'RFID', 'CF-815', 'வன்பொருள் மேம்பாடு'],
            },
        },
        publishedAt: new Date('2025-01-15'),
    },
    // 文章 2: WinForms 系统设计
    {
        slug: 'csharp-winforms-gokart-system',
        translations: {
            zh: {
                title: 'C# WinForms 实战：卡丁车圈速系统设计',
                content: `# C# WinForms 卡丁车圈速系统设计

## 界面设计
使用 WinForms Panel 组件构建 4x5 网格布局，每个卡丁车使用独立的 Panel 显示状态。

## 色彩编码
- 绿色：运行中
- 黄色：最后一圈
- 蓝色：已完成
- 红色：未激活

## 实时刷新
使用 Timer 组件每 100ms 刷新一次界面，确保数据实时性。`,
                excerpt: '分享如何使用 WinForms 构建高性能的实时数据展示界面，包含色彩编码、动态刷新和音频反馈实现。',
                category: 'C#开发',
                tags: ['WinForms', 'UI设计', '实时系统'],
            },
            en: {
                title: 'C# WinForms in Action: GoKart Lap Counter System Design',
                content: `# C# WinForms GoKart Lap Counter System Design

## Interface Design
Build a 4x5 grid layout using WinForms Panel components, with each kart displayed in an independent Panel.

## Color Coding
- Green: Running
- Yellow: Final Lap
- Blue: Finished
- Red: Inactive

## Real-time Refresh
Use a Timer component to refresh the interface every 100ms, ensuring real-time data display.`,
                excerpt: 'Learn how to build a high-performance real-time data display interface with WinForms, including color coding, dynamic refresh, and audio feedback.',
                category: 'C# Development',
                tags: ['WinForms', 'UI Design', 'Real-time Systems'],
            },
            ms: {
                title: 'C# WinForms dalam Tindakan: Reka Bentuk Sistem Pengira Pusingan GoKart',
                content: `# Reka Bentuk Sistem Pengira Pusingan GoKart C# WinForms

## Reka Bentuk Antara Muka
Bina susun atur grid 4x5 menggunakan komponen Panel WinForms, dengan setiap kart dipaparkan dalam Panel bebas.

## Pengekodan Warna
- Hijau: Berjalan
- Kuning: Pusingan Akhir
- Biru: Selesai
- Merah: Tidak Aktif

## Segar Semula Masa Nyata
Gunakan komponen Timer untuk menyegar semula antara muka setiap 100ms, memastikan paparan data masa nyata.`,
                excerpt: 'Ketahui cara membina antara muka paparan data masa nyata berprestasi tinggi dengan WinForms, termasuk pengekodan warna, segar semula dinamik, dan maklum balas audio.',
                category: 'Pembangunan C#',
                tags: ['WinForms', 'Reka Bentuk UI', 'Sistem Masa Nyata'],
            },
            ta: {
                title: 'C# WinForms செயலில்: GoKart மடி எண்ணி அமைப்பு வடிவமைப்பு',
                content: `# C# WinForms GoKart மடி எண்ணி அமைப்பு வடிவமைப்பு

## இடைமுக வடிவமைப்பு
WinForms Panel கூறுகளைப் பயன்படுத்தி 4x5 கிரிட் தளவமைப்பை உருவாக்கவும், ஒவ்வொரு கார்ட்டும் தனி Panel இல் காட்டப்படும்.

## வண்ண குறியீடு
- பச்சை: இயங்குகிறது
- மஞ்சள்: கடைசி மடி
- நீலம்: முடிந்தது
- சிவப்பு: செயலற்றது

## நிகழ்நேர புதுப்பிப்பு
நிகழ்நேர தரவு காட்சியை உறுதி செய்ய ஒவ்வொரு 100ms க்கும் இடைமுகத்தை புதுப்பிக்க Timer கூறைப் பயன்படுத்தவும்.`,
                excerpt: 'வண்ண குறியீடு, டைனமிக் புதுப்பிப்பு மற்றும் ஆடியோ கருத்து உள்ளிட்ட WinForms உடன் உயர் செயல்திறன் நிகழ்நேர தரவு காட்சி இடைமுகத்தை எவ்வாறு உருவாக்குவது என்பதை அறிக.',
                category: 'C# மேம்பாடு',
                tags: ['WinForms', 'UI வடிவமைப்பு', 'நிகழ்நேர அமைப்புகள்'],
            },
        },
        publishedAt: new Date('2025-01-10'),
    },
    // 文章 3: RFID 防抖算法
    {
        slug: 'rfid-debounce-algorithm',
        translations: {
            zh: {
                title: '如何设计稳定的 RFID 防抖算法',
                content: `# RFID 防抖算法设计

## 挑战
RFID 读卡器在高速场景下会连续多次读取同一张卡，导致重复计数。

## 解决方案
使用基于时间戳的防抖算法：

\`\`\`csharp
private Dictionary<string, DateTime> lastReadTime = new();
private const int DEBOUNCE_SECONDS = 5;

public bool ShouldRecord(string tagId) {
    if (!lastReadTime.ContainsKey(tagId)) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    var elapsed = (DateTime.Now - lastReadTime[tagId]).TotalSeconds;
    if (elapsed >= DEBOUNCE_SECONDS) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    return false;
}
\`\`\``,
                excerpt: 'RFID 高速识别场景下的防重复挑战与解决方案，5秒防抖算法的设计思路和代码实现。',
                category: '算法',
                tags: ['算法', 'RFID', '防抖'],
            },
            en: {
                title: 'How to Design a Stable RFID Debounce Algorithm',
                content: `# RFID Debounce Algorithm Design

## Challenge
RFID readers in high-speed scenarios will read the same tag multiple times consecutively, causing duplicate counts.

## Solution
Use a timestamp-based debounce algorithm:

\`\`\`csharp
private Dictionary<string, DateTime> lastReadTime = new();
private const int DEBOUNCE_SECONDS = 5;

public bool ShouldRecord(string tagId) {
    if (!lastReadTime.ContainsKey(tagId)) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    var elapsed = (DateTime.Now - lastReadTime[tagId]).TotalSeconds;
    if (elapsed >= DEBOUNCE_SECONDS) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    return false;
}
\`\`\``,
                excerpt: 'Challenges and solutions for preventing duplicate reads in high-speed RFID scenarios. Design approach and code implementation for a 5-second debounce algorithm.',
                category: 'Algorithms',
                tags: ['Algorithm', 'RFID', 'Debounce'],
            },
            ms: {
                title: 'Cara Mereka Bentuk Algoritma Anti-Gegar RFID yang Stabil',
                content: `# Reka Bentuk Algoritma Anti-Gegar RFID

## Cabaran
Pembaca RFID dalam senario berkelajuan tinggi akan membaca tag yang sama berkali-kali secara berturut-turut, menyebabkan kiraan pendua.

## Penyelesaian
Gunakan algoritma anti-gegar berasaskan cap masa:

\`\`\`csharp
private Dictionary<string, DateTime> lastReadTime = new();
private const int DEBOUNCE_SECONDS = 5;

public bool ShouldRecord(string tagId) {
    if (!lastReadTime.ContainsKey(tagId)) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    var elapsed = (DateTime.Now - lastReadTime[tagId]).TotalSeconds;
    if (elapsed >= DEBOUNCE_SECONDS) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    return false;
}
\`\`\``,
                excerpt: 'Cabaran dan penyelesaian untuk mencegah bacaan pendua dalam senario RFID berkelajuan tinggi. Pendekatan reka bentuk dan pelaksanaan kod untuk algoritma anti-gegar 5 saat.',
                category: 'Algoritma',
                tags: ['Algoritma', 'RFID', 'Anti-Gegar'],
            },
            ta: {
                title: 'நிலையான RFID நடுக்கத் தடுப்பு அல்காரிதத்தை எவ்வாறு வடிவமைப்பது',
                content: `# RFID நடுக்கத் தடுப்பு அல்காரிதம் வடிவமைப்பு

## சவால்
அதிவேக சூழல்களில் RFID ரீடர்கள் ஒரே டேக்கை தொடர்ச்சியாக பல முறை வாசிக்கும், இது நகல் எண்ணிக்கைகளை ஏற்படுத்தும்.

## தீர்வு
நேர முத்திரை அடிப்படையிலான நடுக்கத் தடுப்பு அல்காரிதத்தைப் பயன்படுத்தவும்:

\`\`\`csharp
private Dictionary<string, DateTime> lastReadTime = new();
private const int DEBOUNCE_SECONDS = 5;

public bool ShouldRecord(string tagId) {
    if (!lastReadTime.ContainsKey(tagId)) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    var elapsed = (DateTime.Now - lastReadTime[tagId]).TotalSeconds;
    if (elapsed >= DEBOUNCE_SECONDS) {
        lastReadTime[tagId] = DateTime.Now;
        return true;
    }
    
    return false;
}
\`\`\``,
                excerpt: 'அதிவேக RFID சூழல்களில் நகல் வாசிப்புகளைத் தடுப்பதற்கான சவால்கள் மற்றும் தீர்வுகள். 5-வினாடி நடுக்கத் தடுப்பு அல்காரிதத்திற்கான வடிவமைப்பு அணுகுமுறை மற்றும் குறியீடு செயல்படுத்தல்.',
                category: 'அல்காரிதங்கள்',
                tags: ['அல்காரிதம்', 'RFID', 'நடுக்கத் தடுப்பு'],
            },
        },
        publishedAt: new Date('2024-12-28'),
    },
];

async function main() {
    console.log('🌐 Seeding multi-language blog posts...\n');

    // 创建唯一的管理员用户
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.upsert({
        where: { email: 'kenchan4091@gmail.com' },
        update: {},
        create: {
            email: 'kenchan4091@gmail.com',
            password: hashedPassword,
            name: 'Ken Chan',
            role: 'admin',
        },
    });
    console.log('✅ Created admin user: kenchan4091@gmail.com');

    // 创建多语言博客文章
    const locales = ['zh', 'en', 'ms', 'ta'];

    for (const post of blogPosts) {
        for (const locale of locales) {
            const translation = post.translations[locale as keyof typeof post.translations];
            if (!translation) continue;

            await prisma.blogPost.upsert({
                where: {
                    slug_locale: { slug: post.slug, locale }
                },
                update: {
                    title: translation.title,
                    content: translation.content,
                    excerpt: translation.excerpt,
                    category: translation.category,
                    tags: translation.tags,
                    status: 'published',
                    publishedAt: post.publishedAt,
                },
                create: {
                    slug: post.slug,
                    locale,
                    title: translation.title,
                    content: translation.content,
                    excerpt: translation.excerpt,
                    category: translation.category,
                    tags: translation.tags,
                    status: 'published',
                    publishedAt: post.publishedAt,
                },
            });
            console.log(`  ✅ [${locale}] ${translation.title}`);
        }
        console.log('');
    }

    console.log('🎉 Multi-language blog seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
