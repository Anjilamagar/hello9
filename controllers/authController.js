import user from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateOtp } from "../utils/generator.js"
import { sendMail } from "../services/sendMail.js"
import Otp from "../models/otp.js"



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

        const emailExist = await Otp.findOne({ email })
        const otp = await generateOtp()
        if (emailExist) {
            await Otp.findOneAndUpdate({ email }, {
                otp: otp,
                isUsed: false
            })
        } else {
            await Otp.create({
                email: email,
                otp: otp,
                isUsed: false
            })
        }

        await sendMail(otp, email)
        return res.status(200).json({
            message: "Verification mail.sent successfully",
            data
        })






        // return res.status(200).json({
        //     message: "login in successfully",
        //     data
        // })




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
        const token = jwt.sign(payload, "thisiss  ecretpassword")

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