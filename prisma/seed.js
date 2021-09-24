const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const items = [
  {
    name: 'Luxury, elegant women`s bag',
    price: 4999,
    description: 'An elegant luxuy bag for the busy woman',
    review: 'The bag is very beautiful and always receive conpliments!',
    image:
      'https://images.wehkamp.nl/i/wehkamp/16772775_eb_04/graceland-handtas-lichtbruin-lichtbruin-4063871391338.jpg?w=792',
    soldCount: 97,
    favoriites: 5,
  },
  {
    name: 'Casual pretty dress',
    price: 3999,
    description: `A lovely dress to wear at any occassion during the day, casual and pretty!`,
    review: 'I love this dress, the size m fits perfectly!',
    image:
      'https://cdn-img.prettylittlething.com/c/9/9/5/c9950fa776323cd77967cff944ab80686ed6b5e4_cmp3263_1.jpg?imwidth=1024',
    soldCount: 29,
    favoriites: 5,
  },
  {
    name: 'Wonder eyebrows tint',
    price: 1999,
    description: `Wonderful eyebrows tint in 4 colors`,
    review:
      'This is the best tint for eyebrows I have ever gotten and it stays very long.',
    image: 'https://media.s-bol.com/YQExZEwYor8A/1200x748.jpg',
    soldCount: 29,
    favoriites: 5,
  },
];

const seed = () => {
  //To see our database run the command npx prisma db seed.
  const inserts = items.map(item => {
    return prisma.product.create({
      data: item, //insert that data into the database
    });
  });

  return Promise.all(inserts);
};

seed()
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    return prisma.$disconnect();
  });
