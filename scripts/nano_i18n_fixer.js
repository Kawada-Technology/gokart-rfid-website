// ==========================================
// 🚀 Kawada GoKart - i18n Fixer for Nano AI
// ==========================================
// 1. Copy ALL code below.
// 2. Paste into Chrome Dev Console (F12) and press Enter.
// 3. Wait for the repaired JSON to appear.
// 4. Click 'Copy' on the output object and update your file.

async function fixTranslationWithNano() {
    console.log("🔵 正在检查 Nano AI 环境...");
    console.log("👉 提示：请确保您使用的是 Chrome Canary/Dev (v128+) 并已开启 chrome://flags 相关选项。");

    if (!window.ai) {
        console.warn("❌ window.ai 未定义。尝试备用方案...");
        // 有些版本在 window.model 或其他命名空间，但目前标准是 window.ai
        console.error("请确认已开启 #prompt-api-for-gemini-nano");
        return;
    }

    const systemPrompt = `你是一个专业的i18n翻译专家。你需要检查中文JSON文件，修复任何未翻译的英文内容、错误的占位符格式，并润色生硬的机器翻译。
  规则：
  1. 仅输出修复后的JSON，不要解释。
  2. 保持所有Key不变。
  3. 修复任何包含"{variable}"但原文是"{ variable }"格式的问题。
  4. 确保所有HTML标签如 <primary> 原样保留。`;

    try {
        console.log("🟢 正在加载模型...");
        const session = await window.ai.languageModel.create({ systemPrompt });
        console.log("✅ 模型加载成功！");

        // 这里是你的完整 zh.json 数据
        const zhData = {
            "Navigation": { "home": "首页", "services": "服务", "features": "功能", "blog": "博客", "about": "关于", "brand": "Kawada GoKart RFID" },
            "HomePage": {
                "title": "Kawada GoKart RFID",
                "subtitle": "圈速计数系统",
                "badge": "高精度 RFID 赛车系统",
                "description": "基于 <primary>CF-815 四端口 UHF RFID 读卡器</primary>（860-960MHz，读取距离 8-10米）的高精度圈速计数系统。为卡丁车赛事提供 <secondary>10秒防抖</secondary>、<secondary>实时可视化</secondary>、<secondary>音频反馈</secondary> 的自动化解决方案。",
                "getQuote": "获取定制方案",
                "viewDemo": "查看功能演示",
                "viewGithub": "查看 GitHub 源码",
                "stats": { "posts": "发布的博客文章", "views": "总浏览量", "karts": "支持的卡丁车数量", "baudRate": "波特率 (bps)" },
                "cta": { "title": "准备好开始了吗？", "description": "立即下载并部署 GoKart RFID 系统", "download": "下载最新版本", "blog": "阅读技术博客" }
            },
            "AboutPage": {
                "metadata": { "title": "关于项目 | GoKart RFID", "description": "了解 GoKart RFID 圈速系统的开发背景" },
                "hero": { "badge": "关于我们", "title": "专业RFID技术服务提供商", "description": "专注RFID商业化应用与定制开发。" }
            },
            "FeaturesPage": {
                "metadata": { "title": "功能特性", "description": "功能特性介绍" },
                "techSpecs": {
                    "title": "技术规格",
                    "items": {
                        "framework": { "label": "开发框架", "value": "C# WinForms + .NET 3.5" },
                        "baudRate": { "label": "波特率", "value": "115200 bps" }
                    }
                }
            }
            // ... (为节省篇幅，这里使用了关键部分的缩略版，实际使用时请替换为您的完整文件)
        };

        console.log("⏳ 正在分析 JSON 结构...");

        const blocks = Object.keys(zhData);
        let repairedData = {};

        for (const blockKey of blocks) {
            console.log(`🤖 正在分析区块: [${blockKey}] ...`);
            try {
                const blockContent = JSON.stringify(zhData[blockKey], null, 2);
                // 流式获取
                const stream = session.promptStreaming(`请检查并优化此JSON块的中文翻译：\n${blockContent}`);

                let result = "";
                for await (const chunk of stream) {
                    result = chunk;
                }

                // 提取 JSON
                const jsonMatch = result.match(/```json\s*([\s\S]*?)\s*```/) || result.match(/```\s*([\s\S]*?)\s*```/);
                const jsonStr = jsonMatch ? jsonMatch[1] : result;

                repairedData[blockKey] = JSON.parse(jsonStr);
                console.log(`✅ [${blockKey}] 完成。`);
            } catch (e) {
                console.warn(`⚠️ [${blockKey}] 解析异常，保留原值。`, e);
                repairedData[blockKey] = zhData[blockKey];
            }
        }

        console.log("🎉 修复完成！请复制下方的 Object:");
        console.log(repairedData);

    } catch (err) {
        console.error("❌ 模型运行出错:", err);
    }
}

fixTranslationWithNano();
