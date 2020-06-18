//


export class Comic {

    id: number;
    titulo: string;
    autor: string;
    dibujante: string;
    ano: number;
    genero: string;
    escuela: string;
    editorial: string;
    descripcion: string;
    nombreArchivo: string;
    linkFoto: string;
    archivo: string;

    constructor(id: number, titulo: string = '', autor: string = '', dibujante: string = '', ano: number, genero: string = '', escuela: string = '', editorial: string = '', descripcion: string = '', nombreArchivo: string = '', linkFoto: string = '', archivo: string = '') {

        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.dibujante = dibujante;
        this.ano = ano;
        this.genero = genero;
        this.escuela = escuela;
        this.editorial = editorial;
        this.descripcion = descripcion;
        this.nombreArchivo = nombreArchivo;
        this.linkFoto = linkFoto;
        this.archivo = archivo;
    }

}