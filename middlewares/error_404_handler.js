const error_404_handler = (error, req, res, next) => {
    if (error.value = 404) {
        return res.status(404).json({
            succcess: false,
            message: `ruta no encontrada - Not Found - Petición con metodo ${req.method} y ruta ${req.url}`
        })
    }
    next()
}

export default error_404_handler