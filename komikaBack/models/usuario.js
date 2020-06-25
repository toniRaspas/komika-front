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
            resolve(rows);
        });
    });
};

const getById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};


const editUserId = (pId, { nombre, usuario, email, foto }) => {
    return new Promise((resolve, reject) => {
        db.query('update usuarios set nombre=?, usuario=?, email=?, foto=? where id=?', [nombre, usuario, email, foto, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

///////////////////////////Alvaro esto he decidido ponerlo finalmente aqui poruqe, realmente estamos trabajando con la info de usuario


module.exports = {
    create, getByEmail, getByUser, getById, editUserId
}