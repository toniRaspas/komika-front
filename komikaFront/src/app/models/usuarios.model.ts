export class Usuario {
    id: number;
    nombre: string;
    usuario: string;
    email: string;
    password: string;
    foto: string;


    constructor(pId, pNombre, pUsuario, pEmail, pPassword, pFoto) {
        this.id = pId;
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.email = pEmail;
        this.password = pPassword;
        this.foto = pFoto;
    }
}