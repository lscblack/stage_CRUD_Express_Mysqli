import express from 'express';
import { conn } from './middleWare.js';
import bcrypt from 'bcrypt'
const stage = express.Router()

stage.post("/register", async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ "error": "missing inputs" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        //sucss
        const [result] = await conn.query("INSERT INTO `user`(`username`, `password`) VALUES (?,?)", [username, hashedPassword])
        res.status(201).json({ "message": "USer Created Well" })
    } catch (err) {
        return res.status(500).json({ "error": err })
    }

})
export default stage