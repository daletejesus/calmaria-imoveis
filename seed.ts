import bcrypt from 'bcryptjs';
import prisma from './lib/prisma';

async function main() {
  const passwordHash = await bcrypt.hash('123456', 10);

  const user = await prisma.usuario.create({
    data: {
      email: 'consultor@teste.com',
      password: passwordHash,
    },
  });

  console.log('Usuário criado:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
