//To insteract with the database:
import prisma from '../../../util/prisma';

//This is the endpoint for 'products' shop
export default async (req, res) => {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ message: 'Sorry that method is not allowed' });
  }
  //find/filter by best seller Products:
  const bestSellers = await prisma.product.findMany({
    where: {
      soldCount: {
        gt: 0,
      },
    },
    orderBy: {
      soldCount: 'desc',
    },
    take: 2, //only returns the first 3.
    select: {
      id: true,
      name: true,
      image: true,
      price: true,
      description: true,
      review: true,
      favoriites: true,
    },
  });
  //find by popularity(favoriites):
  const mostPopular = await prisma.product.findMany({
    where: {
      favoriites: {
        gt: 0,
      },
    },
    orderBy: {
      favoriites: 'desc',
    },
    take: 2,
    select: {
      id: true,
      name: true,
      image: true,
      price: true,
      description: true,
      review: true,
      favoriites: true,
    },
  });
  const newItems = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
    select: {
      id: true,
      name: true,
      image: true,
      price: true,
      description: true,
    },
  });

  const data = [
    {
      title: 'Best Sellers',
      items: bestSellers,
    },
    {
      title: 'Most popular',
      items: mostPopular,
    },
    {
      title: 'New products',
      items: newItems,
    },
  ];

  return res.status(200).json({ data });
};
//After, we run the server with npm run dev (script in package.json)
