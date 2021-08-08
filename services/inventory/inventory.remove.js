const Connection = require('../../database/mysql.connection');

module.exports = async(Id) => {
    try {
        const Query = `DELETE FROM inventory WHERE id = ${Id}`;
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace(error);
        return false;
    }
}