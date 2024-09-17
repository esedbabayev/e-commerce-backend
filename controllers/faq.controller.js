import { Faq } from "../models/faq.model.js";

export const createFaq = async (request, response) => {
  try {
    const { title, description } = request.body;

    const newFaq = new Faq({ title, description });
    await newFaq.save();

    response.status(201).json(newFaq);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getFaq = async (request, response) => {
  try {
    const faqs = await Faq.find();
    response.json(faqs);
  } catch (error) {
    response.status(500).json({ message: "Error fetching faqs", error });
  }
};

export const updateFaq = async (request, response) => {
  try {
    const faqId = request.params.id;
    const updates = request.body;

    const faq = await Faq.findByIdAndUpdate(faqId, updates, {
      new: true,
      runValidators: true,
    });

    if (!faq) {
      return response.status(404).send({ message: "Faq not found" });
    }

    response.json(faq);
  } catch (error) {
    response
      .status(400)
      .send({ message: "Invalid data", error: error.message });
  }
};

export const deleteFaq = async (request, response) => {
  try {
    const faqId = request.params.id;
    const faq = await Faq.findByIdAndDelete(faqId);

    if (!faq) {
      return response.status(404).send({ message: "Faq not found" });
    }

    response.json({ message: "Faq deleted successfully" });
  } catch (error) {
    response
      .status(500)
      .send({ message: "Error deleting faq", error: error.message });
  }
};
