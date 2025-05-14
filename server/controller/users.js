import express from 'express';
import bcrypt from 'bcrypt'
import conn from '../db/db.js';
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

stage.post("/login", async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ "error": "missing inputs" })
    }
    try {
        //sucss
        const [result] = await conn.query("SELECT * FROM `user` WHERE `username`= ?", [username])
        if (result.length === 0) {
            return res.status(404).json({ "message": "invalid creditials" })
        }
        const oneUser = result[0]
        const checkPass = await bcrypt.compare(password, oneUser.password)
        if (!checkPass) {
            res.status(404).json({ "message": "invalid creditials" })
        }
        res.status(200).json({ "message": "sucess","data":oneUser.username })
    } catch (err) {
        return res.status(500).json({ "error": err })
    }

})

export default stage