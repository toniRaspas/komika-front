export class Indice {
    id: number;
    fk_usuario: number;
    fk_comic: number;
    estado: string;
    puntuacion: string;


    constructor(id: number, fk_usuario: number, fk_comic: number, estado: string, puntuacion: string) {
        this.id = id;
        this.fk_usuario = fk_usuario;
        this.fk_comic = fk_comic;
        this.estado = estado;
        this.puntuacion = puntuacion;
    }
}