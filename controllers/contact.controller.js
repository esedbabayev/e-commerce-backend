import { Contact } from "../models/contact.model.js";

export const getContacts = async (request, response) => {
  try {
    const contacts = await Contact.find();
    response.json(contacts);
  } catch (error) {
    response
      .status(500)
      .send({ message: "Error fetching contacts", error: error.message });
  }
};

export const createContact = async (request, response) => {
  try {
    const { phone, address } = request.body;

    const contact = new Contact({ phone, address });
    await contact.save();

    response.status(201).json(contact);
  } catch (error) {
    response
      .status(400)
      .send({ message: "Invalid data", error: error.message });
  }
};

export const updateContacts = async (request, response) => {
  try {
    const contactId = request.params.id;
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      request.body,
      { new: true }
    );

    if (!updatedContact) {
      return response.status(404).send({ message: "Contact not found" });
    }

    response.json(updatedContact);
  } catch (error) {
    response
      .status(400)
      .send({ message: "Invalid data", error: error.message });
  }
};

export const deleteContact = async (request, response) => {
  try {
    const contactId = request.params.id;
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return response.status(404).send({ message: "Contact not found" });
    }

    response.json({ message: "Contact deleted successfully" });
  } catch (error) {
    response
      .status(500)
      .send({ message: "Error deleting contact", error: error.message });
  }
};
