export class Usuario {
    nombre: string;
    usuario: string;
    email: string;
    password: string;


    constructor(pNombre, pUsuario, pEmail, pPassword) {
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.email = pEmail;
        this.password = pPassword;
    }
}