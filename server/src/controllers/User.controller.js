import UserModel from '../models/User.model.js'

const createUser = async (req, res) => {

    //krävs body-parser för nå body, annars undefined
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password
    })

    try {
        //async, vi väntar på response innan vi skickar
        //201, created
        const response = await user.save()
        res.status(201).send(response)
    }
    catch (error) {
        //lyckades anropa men något gick fel
        res.status(500).send({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        //200 OK, lyckades hämta och skicka
        const response = await UserModel.find()
        res.status(200).send(response)
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const response = await UserModel.findById(req.params.id)
        res.status(200).send(response)
    }
    catch (error) {
        res.status(500).send({
            message: 'Error while trying to get user by ID: ' + req.params.id,
            error: error.message
        })
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const response = await UserModel.find({username : req.params.username})
        res.status(200).send(response)
    }
    catch (error) {
        res.status(500).send({
            message: 'Error while trying to get user by username: ' + req.params.username,
            error: error.message
        })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsername
}