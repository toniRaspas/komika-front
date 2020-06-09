

const getAllComics = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from comics', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}




module.exports = {
    getAllComics
}