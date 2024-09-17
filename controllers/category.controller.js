import { Category } from "../models/category.model.js";

export const getAllCategories = async (request, response) => {
  try {
    const categories = await Category.find();
    response.status(200).json(categories);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getCategory = async (request, response) => {
  try {
    const category = await Category.findById(request.params.id);
    if (!category)
      return response.status(404).json({ message: "Category not found" });
    response.status(200).json(category);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const createCategory = async (request, response) => {
  const { name, image } = request.body;

  const newCategory = {
    name,
    image,
  };

  try {
    const createdCategory = await Category.create(newCategory);
    response.status(201).json({ createdCategory });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

export const updateCategory = async (request, response) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    if (!updatedCategory)
      return response.status(404).json({ message: "Category not found" });
    response.status(200).json(updatedCategory);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (request, response) => {
  try {
    const category = await Category.findByIdAndDelete(request.params.id);
    if (!category)
      return response.status(404).json({ message: "Category not found" });
    response.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
