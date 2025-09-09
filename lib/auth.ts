import { betterAuth } from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma"
import prisma from "@/lib/prisma";
// console.log('BETTER_AUTH_TRUSTED_ORIGINS', process.env.NEXT_PUBLIC_BETTER_AUTH_ORIGIN)
// console.log('URL', process.env.NEXT_PUBLIC_BETTER_AUTH_URL)
// console.log('SECRET', process.env.BETTER_AUTH_SECRET)

export const auth = betterAuth({
    trustedOrigins: ["http://localhost:3000"],
    // baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL as string,
    // basePath: "/api/auth",
    // secret: process.env.BETTER_AUTH_SECRET as string,
    emailAndPassword: {
        enabled: true,
    },
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    })
})