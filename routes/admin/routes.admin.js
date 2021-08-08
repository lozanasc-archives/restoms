const express = require('express');
const Router = express.Router();
const {compare, hash} = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Services
const Authenticate = require('../../services/admin/admin.auth');
const Register = require('../../services/admin/admin.register');
const { AllSessions , ActiveSessions, EndSession } = require('../../services/admin/admin.sessions');
const { AdminInformation, EditName, EditFullname, EditAddress, EditContacts, EditPassword, DeleteAccount } = require('../../services/admin/admin.info');

// Middleware for Authenticating Token
const AuthenticateToken = (Request, Response, Next) => {
    const AuthenticationHeader = Request.headers['authorization'];
    const Token = AuthenticationHeader && AuthenticationHeader.split(' ')[1];
    Token == null ? Response.sendStatus(401) : jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (Error, {Username, Password}) => {
        Error ? Response.sendStatus(403) : 
        Request.Username = Username;
        Request.Password = Password;
        Next();
    }) 
};

Router.get('/SessionsActive', AuthenticateToken, async(Request, Response) => {
    try {
        const GetActiveSessions = await ActiveSessions();
        if(GetActiveSessions){
            Response.status(200)
            .send({
                "Status": true,
                "StatusDescription": "Fetching active Order sessions list is successful",
                "ActiveSessions": GetActiveSessions
            });
        } else { 
            Response.status(500)
            .send({
                "Status": false,
                "StatusDescription": "Fetch failed!",
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/EndSession', AuthenticateToken, async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const Result = await EndSession(Id);
        if(Result){
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Session successful, moved to archived!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Session unsuccessful, something went wrong!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.get('/Sessions', AuthenticateToken, async(Request, Response) => {
    try {
        const GetSessions = await AllSessions();
        if(GetSessions){
            Response.status(200).send({
                "Status": true,
                "StatusDescription": "Fetching Order sessions list is successful",
                "Sessions": GetSessions
            });
        } else {
            Response.status(500)
            .send({
                "Status": false,
                "StatusDescription": "Fetch failed!",
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/AdminData', AuthenticateToken, async(Request, Response) => {
    try {
        const { Username } = Request.body;
        const GetAdminInformation = await AdminInformation(Username);
        if(GetAdminInformation){
            Response.status(200)
            .send({
                "Status": "Successful!",
                "Data": GetAdminInformation
            });
        }
        else {
            Response.status(500)
            .send({
                "Status": GetAdminInformation,
                "StatusDescription": "Something went wrong, my apologies...",
            })
        }
    } catch (error) {
        Response.status(500)
        .send({
            "Status": false,
            "StatusDescription": "Something went wrong, my apologies...",
            "Error": error
        });
    }
});

Router.post('/EditUsername', AuthenticateToken, async(Request, Response) => {
    try {
        const { NewUsername, OldUsername, Id} = Request.body;
        const Result = await EditName(NewUsername, OldUsername, Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldUsername} to ${NewUsername} is successful!`
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldUsername} to ${NewUsername} is unsuccessful!`
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/EditFullname', AuthenticateToken, async(Request, Response) => {
    try {
        const { NewFullname, OldFullname, Id} = Request.body;
        const Result = await EditFullname(NewFullname, OldFullname, Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldFullname} to ${NewFullname} is successful!`
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldFullname} to ${NewFullname} is unsuccessful!`
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/EditContacts', AuthenticateToken, async(Request, Response) => {
    try {
        const { NewContacts, OldContacts, Id} = Request.body;
        const Result = await EditContacts(NewContacts, OldContacts, Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldContacts} to ${NewContacts} is successful!`
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldContacts} to ${NewContacts} is unsuccessful!`
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/EditPassword', AuthenticateToken, async(Request, Response) => {
    try {
        const { NewPassword, OldPassword, Id} = Request.body;
        const EncryptedPassword = await hash(NewPassword, 10);
        const Result = await EditPassword(EncryptedPassword, OldPassword, Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldPassword} to ${EncryptedPassword} is successful!`
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldPassword} to ${EncryptedPassword} is unsuccessful!`
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/EditAddress', AuthenticateToken, async(Request, Response) => {
    try {
        const { NewAddress, OldAddress, Id} = Request.body;
        const Result = await EditAddress(NewAddress, OldAddress, Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldAddress} to ${NewAddress} is successful!`
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": `Changing of ${OldAddress} to ${NewAddress} is unsuccessful!`
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/Authenticate', async(Request, Response) => {
        try {
            const { Username, Password } = Request.body;
            const Auth = await Authenticate(Username);
            if(Auth) {
                if(await compare(Password, Auth[0].password)) {
                    const AccessToken = jwt.sign({ Username, Password }, process.env.ACCESS_TOKEN_SECRET);
                    Response.status(200)
                    .send(
                        {
                            "Status": true,
                            "StatusDescription": "Login Authentication Successful",
                            "Username": Username,
                            "AccessToken": AccessToken
                        }
                    )
                } 
                else {
                    Response.send(403)
                    .send(
                        {
                            "Status": false,
                            "StatusDescription": "Login Unsuccessful, password or username is incorrect"
                        }
                    )
                }
            }
            else {
                Response.status(500)
                .send({
                    "Status": Auth,
                    "StatusDescription": "Username not found, operation failed!"
                })
            }
            } catch (error) {
                console.trace(error);
                Response.send(403)
                    .send(
                        {
                            "Status": false,
                            "StatusDescription": "Login Unsuccessful, password or username is incorrect"
                        }
                    )
            }
});

Router.post('/Delete', AuthenticateToken, async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const Result = await DeleteAccount(Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Account successfully deleted!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Account was not deleted, something went wrong!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});




Router.post('/Register', AuthenticateToken, urlencodedParser, [

    check('Username', 'Username should at least contain 3 characters or more')
        .exists()
        .isLength({min: 3})
    ,
    check('Password', 'Password should atleast contain 8 characters or more')
        .exists()
        .isLength({min: 8})
    ,
    check('Fullname', 'Fullname should atleast contain 3 characters or more')
    .exists()
    .isLength({min: 3})
    ,

    check('Contact', 'The contact number you entered is not valid!')
    .exists()
    .isInt()
    .isLength({min: 11, max: 11})

    ,
    check('Address', 'This field should not be left empty and should be 3 characters or more')
    .exists()
    .isLength({min: 3})

], async(Request, Response) => {
    try {
        // ? Server-sided form validations
        const validationErrors = validationResult(Request);

        if(!validationErrors.isEmpty()){
            Response.status(422)
            .send({'Error': validationErrors.array()});
        }
        else {
            const { Username, Password, Fullname, Contact, Address } = Request.body;
            const EncryptedPassword = await hash(Password, 10);
            const AdminData = await Register(Username, EncryptedPassword, Fullname, Contact, Address);
            if(AdminData){
                Response.status(200)
                .send(
                    {
                        "Status": AdminData,
                        "StatusDescription": "Admin registration is successful"
                    }
                );
            }
            else {
                Response.status(500)
                .send(
                    {
                        "Status": AdminData,
                        "StatusDescription": "Something went wrong, operation failed!"
                    }
                )
            }
        }
    } catch (error) {
        console.trace(error);
    }
});

module.exports = Router;