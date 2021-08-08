const Connection = require('../../database/mysql.connection');

module.exports = {
    NewQuantity: async(NewQty, Id) => {
        try {
            await Connection(`UPDATE inventory SET quantity = ${NewQty} WHERE id = ${Id}`);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    }
};