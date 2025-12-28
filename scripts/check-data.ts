import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkData() {
    console.log('📊 检查数据库现有数据...\n');

    // 检查博客文章
    const blogPosts = await prisma.blogPost.findMany({
        select: { id: true, title: true, slug: true, status: true, publishedAt: true }
    });
    console.log(`📝 BlogPost 表: ${blogPosts.length} 条记录`);
    blogPosts.forEach(p => console.log(`   - ${p.title} (${p.status})`));

    // 检查卡丁车
    const karts = await prisma.kart.findMany();
    console.log(`\n🏎️ Kart 表: ${karts.length} 条记录`);

    // 检查圈速
    const laps = await prisma.lap.findMany();
    console.log(`⏱️ Lap 表: ${laps.length} 条记录`);

    // 检查用户
    const users = await prisma.user.findMany({ select: { id: true, email: true, role: true } });
    console.log(`👤 User 表: ${users.length} 条记录`);
    users.forEach(u => console.log(`   - ${u.email} (${u.role})`));

    // 检查SEO配置
    const seoConfigs = await prisma.seoConfig.findMany();
    console.log(`🔍 SeoConfig 表: ${seoConfigs.length} 条记录`);

    console.log('\n✅ 检查完成');
}

checkData()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
