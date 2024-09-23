import { Product } from "../models/product.model.js";

export const getTopSellersAll = async (request, response) => {

  try {
    const products = await Product.find({ topSeller: true  });
    response.status(200).send({ products });
  } catch (error) {
    response.status(500).send({ error });
  }
};