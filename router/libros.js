import express from 'express'
import Controlador from '../controller/libros.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controlador = new Controlador()
    }
        
        start(){
            this.router.get('/', this.controlador.obtenerLibros)
            this.router.get('/:id', this.controlador.obtenerLibros)
            this.router.post('/', this.controlador.guardarLibro)
            this.router.put('/:id', this.controlador.actualizarLibro)
            this.router.delete('/:id', this.controlador.borrarLibro)
            
            return this.router
        }
}


export default Router

