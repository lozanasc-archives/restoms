const Connection = require('../../database/mysql.connection');
/**
 * @param {String} User Username of the Agent
 * @returns a JSON otherwise a false 
 **/
module.exports = async(User) => {
    try {
        const Query = `SELECT password FROM salesperson WHERE username = '${User}'`;
        const AuthData = await Connection(Query);
        return AuthData;
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
};