//Bad Request

const bad_request = (error, req, res, next) => {
    if (error.status === 400) {
        return res.status(400).json({
            //Manejo de error 400
            success: false,
            response: error.message,
            message: "Bad request: The parameter was not found or is invalid."
        })
    }
    next(error);
}

export default bad_request