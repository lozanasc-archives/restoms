const Connection = require('../../database/mysql.connection');

module.exports = async(Name, Type, InitQty, InitPrice) => {
    try {
        const Query = ` INSERT INTO inventory 
                        (
                            id, 
                            name, 
                            type, 
                            quantity, 
                            price
                        )
                        VALUES
                        (
                            null,
                            '${Name}',
                            '${Type}',
                            ${InitQty},
                            ${InitPrice}
                        )
                        `;
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace(error);
        return false;
    }
}