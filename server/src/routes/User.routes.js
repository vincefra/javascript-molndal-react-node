import UserController from '../controllers/User.controller.js'

const routes = (app) => {
    /*länk för varje navigering och dess metod som ligger i controller
    nu har vi crud, 
    skapa
    hämta
    uppdatera
    ta bort
    */
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    app.get('/user/id/:id', UserController.getUserById)
    app.get('/user/name/:username', UserController.getUserByUsername)
    app.put('/user/id/:id', UserController.updateUser)
    app.delete('/user/id/:id', UserController.deleteUserById)
}

export default {
    routes
}