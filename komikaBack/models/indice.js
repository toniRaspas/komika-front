const getIndexUserId = (userId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tbi_usuarios_comics, comics where comics.id = tbi_usuarios_comics.fk_comic and tbi_usuarios_comics.fk_usuario = ?', [userId], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

const createInIndex = (fkUser, fkComic) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tbi_usuarios_comics (fk_usuario, fk_comic) VALUES (?, ?);', [fkUser, fkComic], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = { getIndexUserId, createInIndex }