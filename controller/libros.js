import Service from '../service/libros.js'


class Controlador {
    constructor() {
        this.servicio = new Service()
    }

    obtenerLibros = async (req,res) => {
        const { id } = req.params
        const libros = await this.servicio.obtenerLibros(id)
        res.send(libros)
    }


    guardarLibro = async (req,res) => {
        const libro = req.body
        const libroGuardado = await this.servicio.guardarLibro(libro)
        res.json(libroGuardado)
    }

    actualizarLibro = async (req,res) => {
        const { id } = req.params
        const libro = req.body
        const libroActualizado = await this.servicio.actualizarLibro(id, libro)
        res.json(libroActualizado)
    }

    borrarLibro = async (req,res) => {
        const { id } = req.params
        const libroBorrado = await this.servicio.borrarLibro(id)
        res.json(libroBorrado)
    }
}

export default Controlador
