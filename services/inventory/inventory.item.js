const Connection = require('../../database/mysql.connection');


module.exports = {
    GetQty: async(Id) => {
        try {
            const Qty = await Connection(`SELECT quantity FROM inventory WHERE id = ${Id}`);
            return Qty;
        } catch (error) {
            console.trace(error);
            return [];
        }
    },
    GetName: async(Id) => {
        try {
            const Name = await Connection(`SELECT name FROM inventory WHERE id = ${Id}`);
            return Name;
        } catch (error) {
            console.trace(error);
            return [];
        }
    },
    GetPrice: async(Id) => {
        try {
            const Price = await Connection(`SELECT price FROM inventory WHERE id = ${Id}`);
            return Price;
        } catch (error) {
            console.trace(error);
            return [];
        }
    },
    GetType: async(Id) => {
        try {
            const Type = await Connection(`SELECT type FROM inventory WHERE id = ${Id}`);
            return Type;
        } catch (error) {
            console.trace(error);
            return [];   
        }
    },
    GetTrendingDish: async() => {
        try {
            const TrendingDish = await Connection(`SELECT name, MIN(quantity) AS quantity FROM inventory`);
            return TrendingDish;
        } catch (error) {
            console.trace(error);
            return [];
        }
    }
};