export class Usuarios {
    id: number;
    nombre: string;
    usuario: string;
    email: string;
    password: string;


    constructor(pId, pNombre, pUsuario, pEmail, pPassword) {
        this.id = pId;
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.email = pEmail;
        this.password = pPassword;
    }
}