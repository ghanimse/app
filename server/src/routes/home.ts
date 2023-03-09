import express, { Request, Response } from 'express'
import auth from '../middleware/auth'

const router = express.Router()

router.get('/', auth, (req: Request, res: Response) => {
res.status(200)
.send({ 
        codeStatus: 200,
        data: {
            message: 'hello from the server'
        }
    })
})


export default router