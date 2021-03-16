import UserModel from '../models/User.model.js'
import StatusCode from '../../config/StatusCode.js'

const createUser = async (req, res) => {
    //httpstatuses.com

    //krävs body-parser för nå body, annars undefined
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password
    })

    try {
        if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'No inputdata' }) }
        //async, vi väntar på response innan vi skickar
        //201, created
        const response = await user.save()
        res.status(StatusCode.CREATED).send(response)
    }
    catch (error) {
        //lyckades anropa men något gick fel
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'No inputdata' }) }
        //200 OK, lyckades hämta och skicka
        const response = await UserModel.find()
        res.status(StatusCode.OK).send(response)
    }
    catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'No inputdata' }) }
        const response = await UserModel.findById(req.params.id)
        res.status(StatusCode.OK).send(response)
    }
    catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to get user by id: ' + req.params.id,
            error: error.message
        })
    }
}

const getUserByUsername = async (req, res) => {
    try {
        if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'No inputdata' }) }
        const response = await UserModel.find({ username: req.params.username })
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(statuscode.NOT_FOUND).send({ message: 'Could not find user by the name : ' + req.query.username })
    }
    catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to get user by username: ' + req.params.username,
            error: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'No inputdata' }) }
        const response = await UserModel.findByIdAndUpdate(req.params.id, {
            username: req.body.username,
            password: req.body.password
        })
        res.status(StatusCode.OK).send(response)
    }
    catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to update user by id: ' + req.params.id,
            error: error.message
        })
    }
}

const deleteUserById = async (req, res) => {
    try {
        if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'No inputdata' }) }
        const response = await UserModel.findByIdAndDelete(req.params.id)
        res.status(StatusCode.OK).send({ message: 'Deleted user by id: ' + req.params.id })
    }
    catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to delete user by id: ' + req.params.id,
            error: error.message
        })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    updateUser,
    deleteUserById
}