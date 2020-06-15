
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
        db.query(`select * from comics where comics.titulo like "${pTit}" or comics.autor like "${pTit}"`, (err, rows) => {

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
        db.query(`select * from comics where comics.genero = ? and comics.titulo like "${pTit}" or comics.autor like "${pTit}"`, [pCat], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}




module.exports = {
    getAllComics,
    getByCat,
    getByTit
}