import prisma from '../../../util/prisma';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ message: 'Sorry that method is not allowed' });
  }
  const categories = await prisma.category.findMany({
    where: {
      products: { some: {} }, //only show categories that have products
    },
    select: {
      id: true,
      name: true,
      products: {
        select: {
          id: true,
          name: true,
          image: true,
          price: true,
          review: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });
  return res.status(200).json({ categories });
};
