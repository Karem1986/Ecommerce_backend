import Stripe from 'stripe';

import prisma from '../../util/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed. ' });
  } //tested on Postman-Success.

  // console.log(req.body.cart);
  const cart = req?.body?.cart || {};
  console.log('CART', cart);
  const productIds = Object.keys(cart);
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
    select: {
      id: true,
      price: true,
    },
  });
  console.log('PRODUCTS', products);
  // calculate total
  let total = 0;
  products.forEach(product => {
    total += product.price * cart[product.id].quantity;
  });
  console.log('TOTAL', total);
  // Stripe payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  return res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLIC,
    paymentIntent: paymentIntent.client_secret,
  });
};
