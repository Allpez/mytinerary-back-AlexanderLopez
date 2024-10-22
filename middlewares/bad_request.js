//Bad Request 400

const bad_request = (error, req, res, next) => {
    console.log(error)
    if (error.status = "bad Request") {
        return res.status(400).json({
            success: false,
            response: error,
            message: 'Bad request: The parameter was not found or is invalid.'
        })
    }
    next(error)
}
export default bad_request