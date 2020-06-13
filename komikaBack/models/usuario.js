


const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from komika.usuarios', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}






module.exports = {
    getAllUsers
}