import { Size } from "../models/size.model.js";

export const getAllSizes = async (request, response) => {
    try {
      const sizes = await Size.find();
      response.status(200).json(sizes);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  };


  export const createSize = async (request, response) => {
    const { name } = request.body;
  
    const newSize = {
      name,
    };
  
    try {
      const createdSize = await Size.create(newSize);
      response.status(201).json({ createdSize });
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  };