//Not Found

const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        //Manejo de error 404
        success: false,
        message: `The resource requested with the method ${req.method} with the route ${req.url} could not be found on this server.! - 404 Not Found`
    })
}

export default not_found_handler   