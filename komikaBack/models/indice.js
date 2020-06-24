const getIndexUserId = (userId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tbi_usuarios_comics, comics where comics.id = tbi_usuarios_comics.fk_comic and tbi_usuarios_comics.fk_usuario = ? order by tbi_usuarios_comics.id desc', [userId], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

const createInIndex = (fk_usuario, fk_comic) => {
    return new Promise((resolve, reject) => {
        db.query('insert ignore into tbi_usuarios_comics (fk_usuario, fk_comic) VALUES (?, ?)', [fk_usuario, fk_comic], (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
};


const deleteIndex = (fk_usuario, fk_comic) => {
    return new Promise((resolve, reject) => {
        db.query('delete from tbi_usuarios_comics where fk_usuario=? and fk_comic= ?', [fk_usuario, fk_comic], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })

}

const updatePage = ({ fk_usuario, fk_comic }, pagina) => {
    return new Promise((resolve, reject) => {
        db.query('update tbi_usuarios_comics set pagina=? where fk_usuario=? and fk_comic=?'), [pagina, fk_usuario, fk_comic], (err, result) => {
            if (err) reject(err);
            resolve(result);
        }
    })
}
/*
const progress = (idIndex) => {
    return new Promise((resolve, reject) => {
        db.query('update tbi_usuarios_comics where pagina = ?', [page], (err, result) => { if (err) reject(err); resolve(result) })
    })
}
*/
module.exports = { getIndexUserId, createInIndex, deleteIndex, updatePage }