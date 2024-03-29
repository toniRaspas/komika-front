//
const getAllComics = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM comics', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
/*select round(avg (puntuacion),0) as puntos from tbi_usuarios_comics where fk_comic =?'*/
const getAllId = () => {
    return new Promise((resolve, reject) => {
        db.query('select id from comics', (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

const getById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from comics where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};



//añadir, filtro por autor y por nombre

const getByCat = (pCat) => {
    return new Promise((resolve, reject) => {
        db.query('select * from comics where comics.genero = ?', [pCat], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Recogemos por título
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
};

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from comics where Id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const updateById = (pId, { titulo, autor, dibujante, ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, archivoLocal, fk_autor }) => {
    return new Promise((resolve, reject) => {
        db.query('update comics set titulo=?, autor=?, dibujante=?, ano=?, genero=?, escuela=?, editorial=?, descripcion=?, nombreArchivo=?, linkFoto=?, archivo=?, archivoLocal=?, fk_autor=? where id=?', [titulo, autor, dibujante, ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, archivoLocal, fk_autor, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

//////////////////////////////////////OBTENER ENLACE DE UN CÓMIC CONCRETO//////////////////////////////////////////
const getByIdViewer = (pId) => {
    return new Promise((resolve, reject) => {

        db.query('SELECT comics.archivo FROM comics WHERE comics.id = ?', [pId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getByIdDescription = (pId) => {
    return new Promise((resolve, reject) => {

        db.query('SELECT comics.descripcion FROM comics WHERE comics.id = ?', [pId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const createComic = ({ titulo, autor, dibujante, ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, archivoLocal, fk_autor }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into comics (titulo, autor, dibujante,ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, archivoLocal, fk_autor) values (?,?,?,?,?,?,?,?,?,?,?,?,?)', [titulo, autor, dibujante, ano, genero, escuela, editorial, descripcion, nombreArchivo, linkFoto, archivo, archivoLocal, fk_autor], (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};




module.exports = {
    getAllComics,
    getByCat,
    getByTit,
    getByFilter,
    getByIdViewer,
    updateById,
    deleteById,
    getById,
    getByIdViewer,
    createComic,
    getByIdDescription,
    getAllId
}