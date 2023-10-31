const { PrismaClient } = require('@prisma/client');
const { vendors, categories } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.vendor.deleteMany();
    console.log('Deleted records in vendor table');

    await prisma.category.deleteMany();
    console.log('Deleted records in category table');

    await prisma.$queryRaw`ALTER TABLE vendor AUTO_INCREMENT = 1`;
    console.log('reset vendor auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE category AUTO_INCREMENT = 1`;
    console.log('reset vendor auto increment to 1');

    await prisma.vendor.createMany({
      data: vendors,
    });
    console.log('Added vendor data');

    await prisma.category.createMany({
      data: categories,
    });
    console.log('Added category data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();