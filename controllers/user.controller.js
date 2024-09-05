// Model
import User from "../models/user.model.js"


// get users
export const getUsers = async (request, response) => {
    try {
      const users = await User.find();
      response.status(200).send({data: users });
    } catch (error) {
      response.status(500).send({error: error.message });
    }
  };

// Get a single user by ID
export const getUser = async (request, response) => {
    try {
      const { id } = request.params;
      const user = await User.findById(id);
  
      if (!user) {
        response.status(404).send({ message: "User not found" });
        return;
      }
  
      response.status(200).send({data: user });
    } catch (error) {
      response.status(500).send({ error: error.message });
    }
  };

// Delete a user by ID
export const deleteUser = async (request, response) => {
    try {
      const { id } = request.params;
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        response.status(404).send({ message: "User not found" });
        return;
      }
  
      response.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
      response.status(500).send({ message: "Error deleting user", error: error.message });
    }
  };

// Update a user by ID (partial update)
export const updateUser = async (request, response) => {
    try {
      const { id } = request.params;
      const updates = request.body; // Target: incoming fields to be updated
  
      // Find the user (source) and apply the target updates
      const updatedUser = await User.findByIdAndUpdate(
        id,
        updates, // Target: fields from request body that need to be merged into the source
        {
          new: true, // Return the updated document after applying the updates
          runValidators: true, // Validate the fields in the target against the schema rules
        }
      );
  
      if (!updatedUser) {
        response.status(404).send({ message: "User not found" });
        return;
      }
  
      response.status(200).send({data: updatedUser });
    } catch (error) {
      response.status(500).send({error: error.message });
    }
  };
  


// Add a new user
export const addUser = async (request, response) => {
    // Destructure the fields from the request body
    const { name, surName, email, userName, password } = request.body;
  
    // Check if all required fields are provided
    if (!name || !surName || !email || !userName || !password) {
      response.status(400).send({ message: "Please fill all empty fields" });
      return;
    }
  
    try {
      // Create a new user with the provided data
      const user = await User.create({
        name,
        surName,
        email,
        userName,
        password,
      });
  
      // Send a success response with the newly created user
      response.status(201).send({ message: "User is created successfully", data: user });
    } catch (error) {
      // Handle any errors during the user creation process
      response.status(500).send({ message: "Error creating user", error: error.message });
    }
  };
  