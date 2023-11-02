import fs from 'fs'

class ModelFile {
    constructor() {
        this.nombreArchivo = 'libros.json'
    }

    leerArchivo = async nombre => {
        let libros = []
        try {
            libros = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch {}

        return libros
    }

    escribirArchivo  = async (nombre, libros) => {
        await fs.promises.writeFile(nombre, JSON.stringify(libros,null,'\t'))
    }


    obtenerLibros = async id => {    
        try {
            const libros = await this.leerArchivo(this.nombreArchivo)
            if(id) {
                const libro = libros.find( libro => libro.id === id )
                return libro || {}
            }
            else {
                return libros
            }
        }
        catch {
            return id? {} : []
        }
    }

    guardarLibro = async libro => {
        const libros = await this.leerArchivo(this.nombreArchivo)

        libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
        libros.push(libro)

        await this.escribirArchivo(this.nombreArchivo, libros)

        return libro
    }

    actualizarLibro = async (id, libro) => {
        libro.id = id

        const libros = await this.leerArchivo(this.nombreArchivo)

        const index = libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            const libroAnterior = libros[index]
            const libroNuevo = { ...libroAnterior, ...libro }
            libros.splice(index,1,libroNuevo)
            await this.escribirArchivo(this.nombreArchivo, libros)

            return libroNuevo
        }
        else {
            libros.push(libro)
            await this.escribirArchivo(this.nombreArchivo, libros)

            return libro
        }
    }

    borrarLibro = async id => {
        let libro = {}

        const libros = await this.leerArchivo(this.nombreArchivo)

        const index = libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            libro = libros.splice(index,1)[0]
            await this.escribirArchivo(this.nombreArchivo, libros)
        }
        return libro    
    }
}
  




export default ModelFile