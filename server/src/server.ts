import express, { Router } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import signupRouter from './routes/sign-up'
import signinRouter from './routes/sign-in'
import homeRouter from './routes/home'

const app = express()
const port = 3000


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))


app.use('/api/signup', signupRouter)
app.use('/api/signin', signinRouter)
app.use('/api', homeRouter)



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});


