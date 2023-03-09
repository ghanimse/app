import express, { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import signAuth from '../middleware/sign-auth';


const prisma = new PrismaClient()
const router = express.Router()
const config = process.env

router.post('/', signAuth, async (req: Request, res: Response) => {
    
    const { username, email, phone, password, city, firstName, lastName } = req.body;
    if(username && email && password && phone) {
        const user = {
            userValidation: {
                username: false,
                email: false,
                phone: false
            },
            isExist: function() {
                return this.userValidation.username || this.userValidation.email || this.userValidation.phone
            }
        } 

        if(username) {
            const isFound = await prisma.user.findFirst({ where: { username: username } })
            user.userValidation.username = !!isFound 
        }

        if(email) {
            const isFound = await prisma.user.findFirst({ where: { email: email } })
            user.userValidation.email = !!isFound 
        }

        if(phone) {
            const isFound = await prisma.user.findFirst({ where: { phone: phone } })
            user.userValidation.phone = !!isFound 
        }

        if(user.isExist()) {
            res.json(user.userValidation).end()
            return
        }
        
        const encryptedPass: string = bcrypt.hashSync(password, 13) 
        console.log(encryptedPass);
        
        const isCreated = await prisma.user.create({
            data: { firstName, lastName, username, email, 
                city, phone, password: encryptedPass 
            }     
        })

        if(isCreated) {
            let token = jwt.sign({ username, password }, config.PRIVATE_KEY, {expiresIn: '1h'})
            token = `Bearer ${token}`
            res.setHeader('Authorization', token)
            res.setHeader('Access-Control-Expose-Headers', '*')
            res.json({ isCreated: true })
        }
    } 
    res.end()
})

export default router