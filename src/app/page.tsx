import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Two Column Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 grid-background opacity-30" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

        {/* Two Column Layout */}
        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-float">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">High-Precision RFID Racing System</span>
              </div>

              {/* Main Heading */}
              <h1 className="leading-tight">
                <span className="block text-foreground text-4xl lg:text-6xl">GoKart RFID</span>
                <span className="block gradient-text neon-glow text-5xl lg:text-7xl mt-2">Lap Counter System</span>
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                基于 <span className="text-primary font-semibold">CF-815 四端口 UHF RFID 读卡器</span>（860-960MHz，读取距离 8-10米）的高精度圈速计数系统。
                为卡丁车赛事提供 <span className="text-secondary font-semibold">5秒防抖</span>、
                <span className="text-secondary font-semibold">实时可视化</span>、
                <span className="text-secondary font-semibold">音频反馈</span> 的自动化解决方案。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/services" className="btn-primary text-center">
                  💼 获取定制方案
                </Link>
                <Link href="/features" className="btn-outline text-center">
                  🚀 查看功能演示
                </Link>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/yuji4091/GoKartRFID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">查看 GitHub 源码</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                {['C# WinForms', '.NET 3.5', 'SQLite', 'CF-815 SDK'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted/50 backdrop-blur border border-border/50 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - App Preview */}
            <div className="relative">
              {/* Main App Preview Card */}
              <div className="glass-card p-6 lg:p-8 hover-lift">
                {/* Mock Application Window */}
                <div className="bg-background/80 rounded-xl overflow-hidden border border-border/50">
                  {/* Window Title Bar */}
                  <div className="bg-muted/80 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground ml-2">GoKart RFID - Lap Counter</span>
                  </div>

                  {/* Kart Status Grid */}
                  <div className="p-4 lg:p-6 space-y-4">
                    <div className="grid grid-cols-4 gap-2 lg:gap-3">
                      {[
                        { id: 'AA01', lap: '15/20', color: 'bg-primary' },
                        { id: 'AA02', lap: '12/20', color: 'bg-primary' },
                        { id: 'AA03', lap: '19/20', color: 'bg-yellow-500' },
                        { id: 'AA04', lap: '20/20', color: 'bg-secondary' },
                        { id: 'AA05', lap: '8/20', color: 'bg-primary' },
                        { id: 'AA06', lap: '0/20', color: 'bg-destructive' },
                        { id: 'AA07', lap: '14/20', color: 'bg-primary' },
                        { id: 'AA08', lap: '11/20', color: 'bg-primary' },
                      ].map((kart) => (
                        <div key={kart.id} className="bg-card/50 border border-border/30 rounded-lg p-2 lg:p-3 text-center hover:border-primary/50 transition-colors">
                          <div className={`w-2 h-2 rounded-full ${kart.color} mx-auto mb-1 lg:mb-2 animate-pulse`} />
                          <div className="text-xs font-bold text-foreground">{kart.id}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5 lg:mt-1">Lap {kart.lap}</div>
                        </div>
                      ))}
                    </div>

                    {/* Event Log Preview */}
                    <div className="bg-card/30 border border-border/30 rounded-lg p-3 lg:p-4 space-y-2">
                      <div className="text-xs font-semibold text-muted-foreground mb-2">📊 实时事件日志</div>
                      <div className="space-y-1 font-mono text-[10px]">
                        <div className="text-primary">✓ AA01 Lap 15 完成 - 00:45.234</div>
                        <div className="text-secondary">✓ AA04 完成全部圈数!</div>
                        <div className="text-yellow-500">⚠ AA03 最后一圈</div>
                        <div className="text-muted-foreground">• AA05 Lap 8 完成 - 00:47.891</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 hidden lg:block">
                <div className="text-3xl font-bold gradient-text">20</div>
                <div className="text-xs text-muted-foreground">支持卡丁车</div>
              </div>

              <div className="absolute -top-6 -left-6 glass-card px-6 py-4 hidden lg:block">
                <div className="text-3xl font-bold gradient-text">5s</div>
                <div className="text-xs text-muted-foreground">防抖间隔</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">核心特性</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            专为高速卡丁车赛事设计的智能 RFID 系统
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift group"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <div className="glass-card p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
          <div className="relative z-10">
            <h2 className="mb-4">准备好开始了吗？</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              立即下载并部署 GoKart RFID 系统，为你的赛事带来专业级的圈速统计体验
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/yuji4091/GoKartRFID/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                📦 下载最新版本
              </a>
              <Link href="/blog" className="btn-outline">
                📝 阅读技术博客
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// SVG Icon Components
const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const SpeakerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0-8.485a5 5 0 00-1.414 1.414M13 12a1 1 0 11-2 0 1 1 0 012 0zm-3 4a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const GamepadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const AntennaIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const features = [
  {
    icon: ZapIcon,
    title: '自动圈速计数',
    description: '基于 UHF RFID 技术的高精度识别，配合 5 秒防重复保护算法，确保每一圈都准确无误。'
  },
  {
    icon: ChartIcon,
    title: '可视化仪表板',
    description: '1080P 全屏优化界面，色彩编码状态显示（运行中/最后一圈/完成/未激活），一目了然。'
  },
  {
    icon: SpeakerIcon,
    title: '音频反馈',
    description: '每圈独特的提示音，完成全程后播放胜利音效序列，提升比赛体验感。'
  },
  {
    icon: DocumentIcon,
    title: '实时日志',
    description: '色彩编码的事件日志系统，清晰区分原始数据、圈数记录和错误信息。'
  },
  {
    icon: GamepadIcon,
    title: '会话控制',
    description: '支持单独为每辆卡丁车手动启动和重置会话，灵活应对各种比赛场景。'
  },
  {
    icon: DatabaseIcon,
    title: 'SQLite 存储',
    description: '本地数据库存储圈速时间，支持历史数据查询和统计分析。'
  }
];

const stats = [
  { value: '20', label: '支持的卡丁车数量' },
  { value: '5s', label: '防重复间隔' },
  { value: '1080P', label: 'UI 优化分辨率' },
  { value: '115200', label: '波特率 (bps)' }
];
