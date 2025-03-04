import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create fake users
  const user = await prisma.user.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    })),
  });
  console.log(`Created ${user.count} users.`);
  
  // Create random reviews
  const reviewCount = 5; // 
  const reviews = await prisma.review.createMany({
    data: Array.from({ length: reviewCount }).map(() => ({
      rating: faker.datatype.number({ min: 1, max: 5 }),
      comment: faker.lorem.sentences(),
      userId: faker.datatype.number({ min: 1, max: userCount }),
      serviceId: faker.datatype.number({ min: 1, max: serviceCount }),
    })),
  });
  console.log(`Created ${reviews.count} reviews.`);

  console.log("Seeding complete!");
}

  main()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });