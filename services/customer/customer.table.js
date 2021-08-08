const Connection = require('../../database/mysql.connection');
/**
 * 
 * @returns JSON other wise an empty array
 */
module.exports = async() => {
    try {
        const TableData = await Connection(`SELECT * FROM TABLE_LIST`);
        return TableData;
    } 
    catch (error) {
        console.trace(error);
        return [];
    }
}