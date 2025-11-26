import user from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const register = async (req, res) => {
    try {
        const { fullname, email, password, phone } = req.body
        if (!email || !password || !fullname) {
            return res.status(400).json({ message: "Some field is missing", })
        }
        const userExist = await user.find({ email: email })
        if (userExist[0]) {
            return res.status(400).json({ message: "user already exist" })
        }
        const hashedpassword = bcrypt.hashSync(password, 9)

        const data = await user.create({
            email,
            fullname,
            password: hashedpassword
        })

        return res.status(400).json({ message: "user already exist", data })



        return res.status(200).json({
            message: "login in successfully",
            data: userExist[0]
        })




    } catch (error) {
        console.log("error occured", error.message);
        res.status(400).json({
            message: "Failed to create",
            error: error.message
        })

    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await user.find({ email })

        if (!userExist[0]) {
            return res.status(400).json({
                message: "user doesnot exist to login"

            })
        }
        const ispasswordmatched = bcrypt.compareSync(password, userExist[0].password)


        if (!ispasswordmatched) {
            return res.status(400).json({ message: "Password doesn't match" })

        }

        const payload = {
            email: userExist[0].email,
            phone: userExist[0].phone,
            fullname: userExist[0].fulLname
        }
        const token = jwt.sign(payload, "thisissecretpassword")

        res.cookie('authToken', token)
        return res.status(200).json({
            message: "Logged in successfully",
            data: payload, token
        })


        // if (password !== userExist[0].password) {
        //     return res.status(400).json({ message: "password doesnot match" })
        // }


    } catch (error) {
        console.log("error occured", error.message);
        res.status(400).json({
            message: "Failed to create",
            error: error.message
        })

    }
}