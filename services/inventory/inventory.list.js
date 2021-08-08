const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const Query = `SELECT * FROM inventory`;
        const Menu = await Connection(Query);
        return Menu;
    } catch (error) {
        console.trace(error);
        return [];
    }
}