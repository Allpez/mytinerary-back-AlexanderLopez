//Not Found 404

const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success: false,
        message:`The resource requested with the method ${req.method} and the route ${req.originalUrl} could not be found on this server! - 404 Not Found`
    })
}

export default not_found_handler 