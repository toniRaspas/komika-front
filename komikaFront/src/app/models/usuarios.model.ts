export class Usuario {
    nombre: string;
    usuario: string;
    email: string;
    password: string;
    foto: string;


    constructor(pNombre, pUsuario, pEmail, pPassword, pFoto) {
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.email = pEmail;
        this.password = pPassword;
        this.foto = pFoto;
    }
}