import { Product } from "../models/product.model.js";

export const getNewArrivals = async (request, response) => {
  const {limit} = request.params
  try {
    const products = await Product.find({ newArrival: true }).limit(limit);
    response.status(200).send({ products });
  } catch (error) {
    response.status(500).send({ error });
  }
};
