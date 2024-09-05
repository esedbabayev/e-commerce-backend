// Model
import User from "../models/user.model.js"


// get users
export const getUsers = async(request, response) => {}

// get single user
export const getUser = async(request, response) => {}

// delete user
export const deleteUser = async(request, response) => {}

// update user
export const updateUser = async(request, response) => {}


// addUser user
export const addUser = async(request, response) => {

const {name, surName, email, userName, password} = request.body;

if(!name || !surName || !email || !userName || !password ) {
    response.status(401).send({message: "Please fill all empty fields"})
    return
}

const user = await User.create({
    name,
    surName,
    email,
    userName,
    password
})

response.status(201).send({message: "User is created successfully", data: user})

}