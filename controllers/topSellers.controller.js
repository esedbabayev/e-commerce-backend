import { Product } from "../models/product.model.js";

export const getTopSellers = async (request, response) => {
  const { limit } = request.query;
  try {
    const products = await Product.find({ topSeller: true }).limit(limit);
    response.status(200).send({ products });
  } catch (error) {
    response.status(500).send({ error });
  }
};
