import express from 'express';
import connectDb from './config/db.js';
import { sum } from './config/db.js';
import user from './models/user.js';
import userRoutes from './routes/userRoutes.js';
import { register } from './controllers/authController.js';
import authRoute from './routes/authRoute.js';
import productRoute from './routes/productRoute.js'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()
app.use(cors())

app.use(express.json()) //for server to understand json format msg received from frontend.
configDotenv()

app.use(cookieParser())

connectDb() //initialization of database


// app.post('/home', async (req, res) => {

//     try {
//         const email = req.body.email
//         const password = req.body.password
//         const fullname = req.body.fullname
//         await user.create({
//             email: email.com,
//             phone: "9845689988",
//             password: password11,
//             fullname: anjie
//         })



//         res.json({
//             message: "user created",
//             people: {
//                 name: "Anjila",
//                 add: "DKT"
//             }
//         })
//     } catch (error) {
//         console.log("error occured to create", error.message);
//         res.status(400).json({
//             message: "Failed to create",
//             error: error.message
//         })
//     }
// })




// app.get('/user', async (req, res) => {
//     try {
//         const result = await user.find()
//         res.status(200).json({
//             message: "user found successful",
//             user: result
//         })
//         // res.send("Hello I am root")

//     } catch (error) {
//         console.log("error occured to create", error.message);
//         res.status(400).json({
//             message: "Failed to find",
//             error: error.message
//         })

//     }
// })


app.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const result = await user.findById(userId)

        res.status(200).json({
            message: "Hello",
            user: result
        })

    } catch (error) {
        console.log("error occured to create", error.message);
        res.status(400).json({
            message: "Failed to find user",
            error: error.message
        })

    }
})


app.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const result = await user.findByIdAndDelete(userId)

        res.status(200).json({
            message: "delete successfully",
        })

    } catch (error) {
        console.log("error occured to create", error.message);
        res.status(400).json({
            message: "Failed to find and delete user",
            error: error.message
        })

    }
})

app.put('/user/:id', async (req, res) => {
    try {
        const userid = req.params.id
        const { email, fullname, phone } = req.body
        // const data = req.body
        // const result = await user.findByIdAndUpdate(userid, data)


        const result = await user.findByIdAndUpdate(userid, {
            fullname: fullname,
            email: email,
            phone: phone
        }, { new: true })

        res.status(200).json({
            message: "Update successfully",
            data: result
        })
    } catch (error) {
        console.log("error occured to create", error.message);
        res.status(400).json({
            message: "Failed to find and update user",
            error: error.message
        })

    }
})





// console.log("This is home nrunning...");
// res.json({
//     message: "This is home page."
// })
// })

// app.get('/', (req, res) => {
//     res.send("Hello i am root")
// })

app.use('/wow', userRoutes)
app.use('/auth', authRoute)
app.use('/product', productRoute)
// app.use('/hy',)


app.listen(3000, () => {
    console.log("Server is running....");
})
sum()
