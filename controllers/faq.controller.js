import Faq from "../models/faq.model.js";

// Create a new FAQ
export const createFaq = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate the request body
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required.' });
    }

    // Create a new FAQ instance
    const newFaq = new Faq({
      title,
      description
    });

    // Save the FAQ to the database
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create FAQ', error });
  }
};



// Get all FAQs
export const getFaq = async (req, res) => {
    try {
      // Retrieve all FAQs from the database
      const faqs = await Faq.find();
      res.status(200).json(faqs);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve FAQs', error });
    }
  };
  

// Update an existing FAQ by ID
export const updateFaq = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
  
      // Validate request data
      if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required.' });
      }
  
      // Find the FAQ by ID and update it
      const updatedFaq = await Faq.findByIdAndUpdate(
        id,
        { title, description },
        { new: true, runValidators: true }  // Return the updated document and run validators
      );
  
      // Check if the FAQ exists
      if (!updatedFaq) {
        return res.status(404).json({ message: 'FAQ not found.' });
      }
  
      res.status(200).json(updatedFaq);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update FAQ', error });
    }
  };
  

// Delete an FAQ by ID
export const deleteFaq = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the FAQ by ID and delete it
      const deletedFaq = await Faq.findByIdAndDelete(id);
  
      // Check if the FAQ exists
      if (!deletedFaq) {
        return res.status(404).json({ message: 'FAQ not found.' });
      }
  
      res.status(200).json({ message: 'FAQ deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete FAQ', error });
    }
  };
  