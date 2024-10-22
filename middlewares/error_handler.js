const error_handler = (error, req, res, next) => {
    return res.status(500).json({
        response: error,
        success: false,
        message: `Error interno del servidor - Peticion con el metodo ${req.method} y ruta ${req.url}`
    })
}

export default error_handler