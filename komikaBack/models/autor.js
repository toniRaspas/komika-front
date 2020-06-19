const getAllAuthors = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from autores', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from autores where Id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from autores where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            console.log(resolve(result));
            resolve(result);
        });
    });
};


const updateById = (pId, { nombre, biografia }) => {
    console.log(nombre);
    return new Promise((resolve, reject) => {
        db.query('update autores set nombre=?, biografia=? where id=?', [nombre, biografia, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};


module.exports = {
    getAllAuthors,
    deleteById,
    getById,
    updateById
}