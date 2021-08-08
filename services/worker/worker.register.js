const Connection = require('../../database/mysql.connection');

/**
 * @param {String} Username Worker's username 
 * @param {String} Password Worker's password
 * @param {String} FullName Worker's full name
 * @param {String} Contact Worker's contact number
 * @param {String} Address Worker's physical address
 */
module.exports = async(Username, Password, FullName, Contact, Address) => {
    try {
        await Connection(`INSERT INTO salesperson 
                        (
                            id,
                            username,
                            password,
                            fullname,
                            phone,
                            address)
                        VALUES
                        (
                            null,
                            '${Username}',
                            '${Password}',
                            '${FullName}',
                            '${Contact}',
                            '${Address}'
                        );
                        `);
        return true;
    } catch (error) {
        console.trace('Something went wrong', error);
        return false;
    }
}