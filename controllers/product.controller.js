import { Product } from "../models/product.model.js";

export const getAllProducts = async (request, response) => {
  try {
    const { category, color } = request.query;
    console.log(category, "category");
    console.log(color, "color");

    const products = await Product.find({ category });
    response.status(200).send({ products });
  } catch (error) {
    response.status(500).send({ error });
  }
};
export const getProduct = async (request, response) => {
  const { id } = request.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    response.status(200).send({ product });
  } catch (error) {
    response.status(500).send({ error });
  }
};
export const deleteProduct = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return response.status(404).send({ message: "Product not found" });
    }

    response.status(200).send({ deletedProduct });
  } catch (error) {
    response.status(500).send({ error });
  }
};
export const addProduct = async (request, response) => {
  const {
    title,
    description,
    coverImage,
    price,
    category,
    size,
    color,
    rating,
    quantity,
    discount,
    newArrival,
    topSeller,
  } = request.body;

  if (!title || !description || !coverImage || !price || !quantity) {
    return response.status(400).send({ message: "Missing required fields" });
  }

  const newProduct = {
    title,
    description,
    coverImage,
    price,
    category,
    size,
    color,
    rating,
    quantity,
    discount,
    newArrival,
    topSeller,
  };

  try {
    const createdProduct = await Product.create(newProduct);

    response.status(201).send({ createdProduct });
  } catch (error) {
    response.status(500).send(error.message);
  }
};
export const updateProduct = async (request, response) => {
  const { id } = request.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!updatedProduct) {
      return response.status(404).send({ message: "Product not found" });
    }

    response.status(200).send({ updatedProduct });
  } catch (error) {
    response.status(500).send(error);
  }
};
