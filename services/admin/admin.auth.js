const Connection = require('../../database/mysql.connection');

/**
 * @param {String} User accepts the username as body
 */
module.exports = async(User) => {
    try {
        // ? Query to be updated to pull more information 
        const Query = `SELECT password FROM admin WHERE username = '${User}'`;
        const AuthData = await Connection(Query);
        return AuthData;
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
}