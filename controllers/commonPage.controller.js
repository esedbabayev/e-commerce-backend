import { CommonPage } from "../models/commonPage.model.js";

export const getAllCommons = async (request, response) => {
  try {
    const commons = await CommonPage.find();
    response.status(200).json(commons);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const createCommon = async (request, response) => {
  try {
    const { title, description, content, code } = request.body;

    const newCommon = new CommonPage({ title, description, content, code });

    await newCommon.save();
    response.status(201).json(newCommon);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getCommonById = async (request, response) => {
  try {
    const { id } = request.params;
    const common = await CommonPage.findById(id);
    if (common) {
      response.status(200).json(common);
    } else {
      response.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const updateCommon = async (request, response) => {
  try {
    const { id } = request.params;
    const { title, description, content, code } = request.body;
    const updatedCommon = await CommonPage.findByIdAndUpdate(
      id,
      { title, description, content, code },
      { new: true }
    );
    if (updatedCommon) {
      response.status(200).json(updatedCommon);
    } else {
      response.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const deleteCommon = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedCommon = await CommonPage.findByIdAndDelete(id);
    if (deletedCommon) {
      response.status(200).json({ message: "Belge başarıyla silindi" });
    } else {
      response.status(404).json({ message: "Belge bulunamadı" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
