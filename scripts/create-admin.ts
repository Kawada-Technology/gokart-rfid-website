import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
import path from 'path'
import bcrypt from 'bcryptjs'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is missing')
    process.exit(1)
}

const prisma = new PrismaClient()

async function main() {
    const email = 'kenchan4091@gmail.com' // ID: admin
    const password = '@Vatar4091' // PW: @Vatar4091

    console.log(`👤 Creating admin user: ${email}`)

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                role: 'admin',
                name: 'Admin User'
            },
            create: {
                email,
                password: hashedPassword,
                role: 'admin',
                name: 'Admin User'
            }
        })

        console.log(`✅ Admin user created/updated successfully!`)
        console.log(`📧 Email: ${email}`)
        console.log(`🔑 Password: ${password}`)
        console.log(`🆔 ID: ${user.id}`)

    } catch (error) {
        console.error('❌ Error creating admin user:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()
