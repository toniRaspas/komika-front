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

    constructor(id: number, titulo: string = '', autor: string = '', dibujante: string = '', ano: number, genero: string = '', escuela: string = '', editorial: string = '', descripcion: string = '') {

        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.dibujante = dibujante;
        this.ano = ano;
        this.genero = genero;
        this.escuela = escuela;
        this.editorial = editorial;
        this.descripcion = descripcion;
    }

}