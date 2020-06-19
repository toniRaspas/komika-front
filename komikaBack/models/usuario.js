const create = ({ nombre, usuario, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (id, nombre, usuario, email, password) values (?,?,?,?,?)',
            [null, nombre, usuario, email, password],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
}

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email=?', [pEmail], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);

        });
    });
}


const getByUser = (pUsuario) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where usuario=?', [pUsuario], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
};

const getByRole = (pRol) => {
    return new Promise((resolve, reject) => {
        db.query('')
    });
}


module.exports = {
    create, getByEmail, getByUser
}