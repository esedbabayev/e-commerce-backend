import { Product } from "../models/product.model.js";
export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();
    response.status(200).send({ products });
  } catch (error) {
    response.status(500).send({ error });
  }
};
export const getProduct = async (request, response) => {
  const { id } = request.params;
  try {
    const product = Product.findById(id);
    response.status(200).send({ product });
  } catch (error) {
    response.status(500).send({ error });
  }
};
export const deleteProduct = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = Product.findByIdAndDelete(id);
    response.status(200).send({ deletedProduct });
  } catch (error) {
    response.status(500).send({ error });
  }
};
export const addProduct = async (request, response) => {};
export const updateProduct = async (request, response) => {};
