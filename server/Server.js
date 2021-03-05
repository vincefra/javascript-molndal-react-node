import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config() //instansiera

const app = express()
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

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})