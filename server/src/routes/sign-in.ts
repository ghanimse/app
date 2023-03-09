import express, { Request, Response } from 'express'
import signAuth from '../middleware/sign-auth';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = express.Router()
const prisma = new PrismaClient()
const config = process.env

router.post('/', signAuth, async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if(username && password) {
        const user = await prisma.user.findFirst({
            where: { username: username },
            select: { password: true }
        })

        const isFound = bcrypt.compareSync(password, String(user?.password))
        if(isFound) {
            const token = jwt.sign({ data: { username, password } }, config.PRIVATE_KEY, { expiresIn: '1h' })
            res.setHeader('Authorization', `Bearer ${token}`);
            res.header("Access-Control-Expose-Headers", "*");
        }
        res.json(isFound)
    }
    res.end()
})



export default router