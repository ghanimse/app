import express, { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const config = process.env

const signAuth = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers?.authorization
    if(!token) {
        next()
        return
    }

    try {
        token = token.replace('Bearer ', '')
        const decodedToken: string = jwt.verify(token, config.PRIVATE_KEY)
        res.json({ redirect: true}).end()
    } catch (error) {
        next()
    }
}


export default signAuth
