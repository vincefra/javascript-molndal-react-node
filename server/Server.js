import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import UserRoutes from './src/routes/User.routes.js'

dotenv.config() //instansiera

const app = express()

//gör kunna nå komplex objekt aka nested
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) //berättar att vi använder json

app.use(helmet())
app.use(morgan('common'))

const port = process.env.PORT //för nå variabeln port i env

/*
app.post //create
app.put //update
app.delete  //delete
app.get //read
*/

//req, ta emot, res skicka
app.get("/product", (req, res) => {
    res.send("Yaay!")
})

//skickar med app till routes, för routes ska nå post
UserRoutes.routes(app)

mongoose.connect('mongodb://localhost/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(() => {
        console.log('Something went wrong when connecting to DB..')
        process.exit()
    }
    )

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

export default app