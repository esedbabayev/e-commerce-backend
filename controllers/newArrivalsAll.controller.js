import { Product } from "../models/product.model.js";

export const getNewArrivalsAll = async (request, response) => {

  try {
    const products = await Product.find({ newArrival: true });
    response.status(200).send({ products });
  } catch (error) {
    response.status(500).send({ error });
  }
};
