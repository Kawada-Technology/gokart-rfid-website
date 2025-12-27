'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // 模拟登录（后续会连接真实认证）
        setTimeout(() => {
            if (formData.email === 'admin@gokart.com' && formData.password === 'admin123') {
                // 登录成功，跳转到仪表板
                router.push('/admin/dashboard');
            } else {
                setError('邮箱或密码错误');
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-background opacity-30" />
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md mx-4">
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>返回首页</span>
                </Link>

                <div className="glass-card p-8 lg:p-12">
                    {/* Logo & Title */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🔐</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="gradient-text">管理后台</span>
                        </h1>
                        <p className="text-muted-foreground">GoKart RFID Lap Counter System</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                邮箱地址
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                                placeholder="admin@gokart.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                                密码
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-sm text-destructive">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    登录中...
                                </span>
                            ) : (
                                '登录'
                            )}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-2">🔑 演示账号：</p>
                        <p className="text-sm font-mono text-primary">admin@gokart.com</p>
                        <p className="text-sm font-mono text-primary">admin123</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
