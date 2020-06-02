//

export class Autor {

    id: number;
    nombre: string;
    biografia: string;

    constructor(id: number, nombre: string = '', biografia: string = '') {

        this.id = id;
        this.nombre = nombre;
        this.biografia = biografia;

    }
}