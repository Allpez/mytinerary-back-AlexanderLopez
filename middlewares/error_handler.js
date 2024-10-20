//Internal Server Error

const error_handler = (error, req, res, next) => {
    console.log(error); 
    const status = error.status || 500;

    return res.status(status).json({
        success: false,
        response: error.message || "Internal Server Error",
        type: status === 500 ? "Server failed" : "Error"
    });
}

export default error_handler;