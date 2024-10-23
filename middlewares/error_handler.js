//Internal Server Error 500

const error_handler = (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        response: error,
        message: 'Internal Server Error'
    })
}

export default error_handler
