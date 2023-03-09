import express, { Express, Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
const config = process.env

const auth = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization
    
    if(!token) {
        res.status(401)
        .json({ codeStatus: 401, errorMessage: 'Unauthorized, token not exist' })
        return
    }

    try {
        token = token.replace('Bearer ', '')
        const decodedToken: string = jwt.verify(token, config.PRIVATE_KEY)
        next()
    } catch (error) {
        res.status(401)
        .json({ codeStatus: 401, errorMessage: 'Unauthorized, invalid token' })
    }
}

export default auth
