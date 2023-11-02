import ModelFile from '../model/librosFile.js'

class Service{
    constructor(){
        this.model = new ModelFile()
    }
    
    obtenerLibros = async id => {
        const libros = await this.model.obtenerLibros(id)
        return libros
    }   
    
    
    guardarLibro = async libro => {
        const libroGuardado = await this.model.guardarLibro(libro)
        return libroGuardado
    }

    actualizarLibro =  async (id, libro) => {
        const libroActualizado = await this.model.actualizarLibro(id,libro)
        return libroActualizado
    }

    borrarLibro = async id => {
        const libroBorrado = await this.model.borrarLibro(id)
        return libroBorrado
    }
}


export default Service