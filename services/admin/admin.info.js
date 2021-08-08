const Connection = require('../../database/mysql.connection');

module.exports = {
    AdminInformation: async(Username) => {
        try {
            const Query = `SELECT * FROM admin WHERE username = '${Username}'`;
            const result = await Connection(Query);
            return result;
        } catch (error) {
            console.trace('Something went wrong...', error);
            return [];
        }
    },
    EditName: async(NewUsername, OldUsername, Id) => {
        try {
            const Query = `UPDATE admin SET username = '${NewUsername}' WHERE username = '${OldUsername}' AND id = ${Id}`;
            await Connection(Query);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    },
    EditFullname: async(NewName, OldName, Id) => {
        try {
            const Query = `UPDATE admin SET fullname = '${NewName}' WHERE fullname = '${OldName}' AND id = ${Id}`;
            await Connection(Query);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    },
    EditContacts: async(NewContacts, OldContacts, Id) => {
        try {
            const Query = `UPDATE admin SET phone = '${NewContacts}' WHERE phone = '${OldContacts}' AND id = ${Id}`;
            await Connection(Query);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    },
    EditPassword: async(NewPassword, OldPassword, Id) => {
        try {
            const Query = `UPDATE admin SET password = '${NewPassword}' WHERE password = '${OldPassword}' AND id = ${Id}`;
            await Connection(Query);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    },
    EditAddress: async(NewAddress, OldAddress, Id) => {
        try {
            const Query = `UPDATE admin SET address = '${NewAddress}' WHERE address = '${OldAddress}' AND id = ${Id}`;
            await Connection(Query);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    },
    DeleteAccount: async(Id) => {
        try {
            const Query = `DELETE FROM admin WHERE id = ${Id}`;
            await Connection(Query);
            return true;
        } catch (error) {
            console.trace(error);
            return false;
        }
    }
};