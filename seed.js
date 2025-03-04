import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();
function getRandomElements(array, count) {

  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function main() {
 
  const userCount = parseInt(process.argv[2]) || 1;
  console.log(`Seeding ${userCount} fake user(s)...`);


  const productCount = 10;
  const productData = Array.from({ length: productCount }).map(() => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
  }));

  const createdProducts = await prisma.product.createMany({ data: productData });
  console.log(`Created ${createdProducts.count} product(s).`);


  const allProducts = await prisma.product.findMany();


  for (let i = 0; i < userCount; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      },
    });
    console.log(`Created user: ${user.username}`);


    const ordersCount = faker.datatype.number({ min: 1, max: 3 });
    for (let j = 0; j < ordersCount; j++) {
      const numProducts = faker.datatype.number({ min: 1, max: 3 });
      const selectedProducts = getRandomElements(allProducts, numProducts);
      const productConnects = selectedProducts.map((product) => ({ id: product.id }));

      const order = await prisma.order.create({
        data: {
          user: { connect: { id: user.id } },
          products: { connect: productConnects },
        },
      });
      console.log(`  Created order ${order.id} for user ${user.username} with ${numProducts} product(s).`);
    }
  }
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

