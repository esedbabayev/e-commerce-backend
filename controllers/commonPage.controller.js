import CommonModel from "../models/commonPage.model.js"

// Create a new Common entry
export const createCommon = async (req, res) => {
    try {
      const { title, description, content, code } = req.body;
  
      // Validate required fields
      if (!code) {
        return res.status(400).json({ message: "Code is required." });
      }
  
      // Create a new common entry
      const newCommon = new CommonModel({
        title,
        description,
        content,
        code
      });
  
      // Save the entry to the database
      const savedCommon = await newCommon.save();
      res.status(201).json(savedCommon);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };


// Get all Common entries
export const getAllCommons = async (req, res) => {
    try {
      const commons = await CommonModel.find();
      res.status(200).json(commons);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  


// Get a Common entry by ID
export const getCommonById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the common entry by ID
      const common = await CommonModel.findById(id);
  
      // If the entry does not exist
      if (!common) {
        return res.status(404).json({ message: "Common entry not found." });
      }
  
      res.status(200).json(common);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  

// Update a Common entry by ID
export const updateCommon = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content, code } = req.body;

    // Validate the required fields
    if (!code) {
      return res.status(400).json({ message: "Code is required." });
    }

    // Find the entry by ID and update it
    const updatedCommon = await CommonModel.findByIdAndUpdate(
      id,
      { title, description, content, code },
      { new: true, runValidators: true } // Return the updated document
    );

    // If the entry does not exist
    if (!updatedCommon) {
      return res.status(404).json({ message: "Common entry not found." });
    }

    res.status(200).json(updatedCommon);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};



// Delete a Common entry by ID
export const deleteCommon = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the entry by ID and delete it
      const deletedCommon = await CommonModel.findByIdAndDelete(id);
  
      // If the entry does not exist
      if (!deletedCommon) {
        return res.status(404).json({ message: "Common entry not found." });
      }
  
      res.status(200).json({ message: "Common entry deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  