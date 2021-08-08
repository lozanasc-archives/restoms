const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        await Connection('TRUNCATE inventory');
        return true;
    } catch (error) {
        console.trace(error);
        return false;
    }
}