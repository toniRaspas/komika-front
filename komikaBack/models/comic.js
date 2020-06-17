
const getAllComics = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from comics', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
//añadir, filtro por autor y por nombre

const getByCat = (pCat) => {
    return new Promise((resolve, reject) => {
        db.query('select * from comics where comics.genero = ?', [pCat], (err, rows) => {

            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getByTit = (pTit) => {
    return new Promise((resolve, reject) => {
        pTit = '%' + pTit + '%';
        db.query(`select * from comics where comics.titulo like "${pTit}" or comics.autor like "${pTit}" or comics.editorial like "${pTit}"`, (err, rows) => {

            if (err) reject(err);
            resolve(rows);
        });
    });
};
//"select * from comics where parse(comics.titulo) like'%?%'"
//select * from comics where comics.genero = pcalt and comics lower(comics.titulo) like  

const getByFilter = (pCat, pTit) => {
    return new Promise((resolve, reject) => {
        pTit = '%' + pTit + '%';
        pCat = pCat;

        //SELECT * FROM comics WHERE comics.genero = 'terror' and (comics.titulo or comics.autor like '%o%')
        db.query(`SELECT * FROM comics WHERE comics.genero = "${pCat}" AND (comics.titulo LIKE"${pTit}" OR comics.autor LIKE"${pTit}" OR comics.editorial LIKE"${pTit}")`, [pCat, pTit], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
};

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from comics where Id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const updateById = (pId, { titulo, autor, dibujante, ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, fk_autor }) => {
    return new Promise((resolve, reject) => {
        db.query('update comics set titulo=?, autor=?, dibujante=?, ano=?, genero=?, escuela=?, editorial=?, descripcion=?, nombreArchivo=?, linkFoto=?, archivo=?, fk_autor=? where id=?', [titulo, autor, dibujante, ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, fk_autor, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};





module.exports = {
    getAllComics,
    getByCat,
    getByTit,
    getByFilter,
    deleteById,
    updateById
}