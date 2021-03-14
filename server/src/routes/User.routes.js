import UserController from '../controllers/User.controller.js'

const routes = (app) => {

    //länk för varje navigering och dess metod som ligger i controller
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    app.get('/user/id/:id', UserController.getUserById)
    app.get('/user/name/:username', UserController.getUserByUsername)
}

export default {
    routes
}