import { Color } from "../models/color.model.js";

export const getAllColors = async (request, response) => {
    try {
      const colors = await Color.find();
      response.status(200).json(colors);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  };


  export const createColor = async (request, response) => {
    const { name } = request.body;
  
    const newColor = {
      name,
    };
  
    try {
      const createdColor = await Color.create(newColor);
      response.status(201).json({ createdColor });
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  };

  export const deleteColor = async (request, response) => {
    try {
      const color = await Color.findByIdAndDelete(request.params.id);
      if (!color)
        return response.status(404).json({ message: "Color not found" });
      response.status(200).json({ message: "Color deleted successfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  };

