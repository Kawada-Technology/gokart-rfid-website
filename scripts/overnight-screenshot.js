// overnight-screenshot.js
// 用于整夜自动截取网页截图（每隔指定时间）
// 依赖: puppeteer, node-cron（或使用 setInterval）
// 运行前请先在项目根目录执行: npm install puppeteer node-cron

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');

// 配置项（可自行修改）
const TARGET_URL = 'https://kawada-gokart-rfid.vercel.app/'; // 需要截图的页面
const OUTPUT_DIR = "C:\\Users\\kawad\\Projects\\Kawada Technology\\kawada-screenshots"; // 保存目录
const INTERVAL_CRON = '*/30 * * * *'; // 每30分钟一次（cron 表达式）

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 60000 });
        // 设置视口为常见全屏尺寸，可自行调整
        await page.setViewport({ width: 1920, height: 1080 });
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filePath = path.join(OUTPUT_DIR, `screenshot-${timestamp}.png`);
        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`[${new Date().toLocaleString()}] Screenshot saved: ${filePath}`);
    } catch (err) {
        console.error('Capture error:', err);
    } finally {
        if (browser) await browser.close();
    }
}

// 使用 node-cron 按计划执行
console.log('Overnight screenshot service started.');
console.log(`Target URL: ${TARGET_URL}`);
console.log(`Saving to: ${OUTPUT_DIR}`);
console.log(`Cron schedule: ${INTERVAL_CRON}`);

cron.schedule(INTERVAL_CRON, () => {
    console.log('Triggering screenshot...');
    capture();
});

// 为防止脚本意外退出，可捕获未处理的异常
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
