const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
// const items = [
//   {
//     name: 'Luxury, elegant women`s bag',
//     price: 4999,
//     description: 'An elegant luxuy bag for the busy woman',
//     review: 'The bag is very beautiful and always receive conpliments!',
//     image:
//       'https://images.wehkamp.nl/i/wehkamp/16772775_eb_04/graceland-handtas-lichtbruin-lichtbruin-4063871391338.jpg?w=792',
//     soldCount: 97,
//     favoriites: 45,
//   },
//   {
//     name: 'Casual pretty dress',
//     price: 3999,
//     description: `A lovely dress to wear at any occassion during the day, casual and pretty!`,
//     review: 'I love this dress, the size m fits perfectly!',
//     image:
//       'https://cdn-img.prettylittlething.com/c/9/9/5/c9950fa776323cd77967cff944ab80686ed6b5e4_cmp3263_1.jpg?imwidth=1024',
//     soldCount: 29,
//     favoriites: 17,
//   },
//   {
//     name: 'Wonder eyebrows tint',
//     price: 1999,
//     description: `Wonderful eyebrows tint in 4 colors`,
//     review:
//       'This is the best tint for eyebrows I have ever gotten and it stays very long.',
//     image: 'https://media.s-bol.com/YQExZEwYor8A/1200x748.jpg',
//     soldCount: 3,
//     favoriites: 5,
//   },
// ];

const categories = [
  {
    name: 'Bottoms',
    products: {
      create: [
        {
          name: 'Winter tights',
          price: 1999,
          description: `warm winter tights`,
          review: 'love this tights, they keep you warm the whole day!',
          image: 'https://tinyurl.com/7cmfk92p',
          soldCount: 19,
          favoriites: 7,
        },
        {
          name: 'Winter office women trousers',
          price: 7999,
          description: `Warm cotton trousers for the office`,
          review: 'Great quality, keeps you warm and makes you look classy!',
          image: 'https://tinyurl.com/stbh9spx',
          soldCount: 7,
          favoriites: 10,
        },
      ],
    },
  },
  {
    name: 'Jackets',
    products: {
      create: [
        {
          name: 'Extra warm jacket',
          price: 3550,
          description: `warm winter jacket for day or night`,
          review: 'Nice and warm jacket',
          image: 'https://tinyurl.com/yavmhb2w',
          soldCount: 69,
          favoriites: 15,
        },
        {
          name: 'Elegant Jacket',
          price: 9999,
          description: `Warm jacket for the office`,
          review: 'Great quality, keeps you warm and makes you look classy!',
          image: 'https://tinyurl.com/2uc9z69s',
          soldCount: 7,
          favoriites: 4,
        },
      ],
    },
  },
  {
    name: 'Winter boots women',
    products: {
      create: [
        {
          name: 'Black boots',
          price: 10020,
          description: `Black winter women's boots`,
          review: 'love this tights, they keep you warm the whole day!',
          image: 'https://tinyurl.com/4cfh2b9k',
          soldCount: 19,
          favoriites: 7,
        },
        {
          name: 'Brown boots',
          price: 5544,
          description: 'warm brown boots',
          review: 'Great quality, keeps you warm and makes you look classy!',
          image: 'https://tinyurl.com/vs5cp55j',
          soldCount: 7,
          favoriites: 10,
        },
      ],
    },
  },
  {
    name: 'Handbags',
    products: {
      create: [
        {
          name: 'Luxury, elegant women`s bag',
          price: 4999,
          description: 'An elegant luxuy bag for the busy woman',
          review: 'The bag is very beautiful and always receive conpliments!',
          image:
            'https://images.wehkamp.nl/i/wehkamp/16772775_eb_04/graceland-handtas-lichtbruin-lichtbruin-4063871391338.jpg?w=792',
          soldCount: 97,
          favoriites: 45,
        },
      ],
    },
  },
];
const seed = () => {
  //To seed our database run the command npx prisma db seed.
  const inserts = categories.map(category => {
    return prisma.category.create({
      data: category,
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
