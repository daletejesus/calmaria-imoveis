// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
  if (!credentials?.email || !credentials?.password) {
    throw new Error("Email e senha são obrigatórios.");
  }

  const user = await prisma.usuario.findUnique({
    where: { email: credentials.email },
  }) as { id: string; nome: string; email: string; password: string } | null;

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
  if (!isPasswordValid) {
    throw new Error("Usuário ou senha inválidos.");
  }

  return user;
}

    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // sua rota de login
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && "id" in user) {
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
