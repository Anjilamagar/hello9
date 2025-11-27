export const isLoggedIn = (req, res, next) => {
    try {
        console.log(req.headers.authorization);

        return res.send(req.headers.authorization)


    } catch (error) {
        res.status(40).json({
            message: "Error ccured in middleware.",
            error: error.message
        })

    }
}