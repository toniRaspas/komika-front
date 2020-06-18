//
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
}

//////////////////////////////////////OBTENER ENLACE DE UN CÓMIC CONCRETO//////////////////////////////////////////
const getByIdViewer = (pId) => {
    return new Promise((resolve, reject) => {

        db.query('SELECT comics.archivo FROM comics WHERE comics.id = ?', [pId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}




module.exports = {
    getAllComics,
    getByCat,
    getByTit,
    getByFilter,
    getByIdViewer
}