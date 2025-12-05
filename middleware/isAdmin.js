export const isAdmin = async (req, res, next) => {
    try {
        const user = req.user

        const userExist = await user.findOne({ email: user.email })

        if (!userExist) {
            return res.status(400).json({ message: "Not allowed" })
        }

        if (userExist.role !== 'ADMIN') {
            return res.status(400).json({ message: "you are not admin" })
        }
        next()




    } catch (error) {
        return res.status(400).json({
            message: "not a admin"
        })

    }
}