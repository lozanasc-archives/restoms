const express = require('express');
const Router = express.Router();

// Services
const FetchTable = require('../../services/customer/customer.table');
const OrderSession = require('../../services/customer/customer.session');

Router.get('/Tables', async(Request, Response) => {
    try {
        const TableData = await FetchTable();
        if(TableData){
            Response.status(200)
            .send(TableData);
        } else {
            Response.status(500)
            .send({
                'Status': TableData
            });
        }
    } catch (error) {
        Response.status(500)
        .send({
            'Status': false,
            'Description': 'Something went wrong!',
            'Error': JSON.stringify(error)
        })
    }
});

Router.post('/NewSession', async(Request, Response) => {
    try {
        const { DineType, Count, Name, Address, Phone, Table, Checkout} = Request.body;
        const NewSession = await OrderSession(DineType, Count, Name, Address, Phone, Table, JSON.stringify(Checkout));
        if(NewSession){
            Response.status(200)
            .send({
                'Status': NewSession,
                'Description': 'Order confirmed!'
            });
        } else {
            Response.status(500)
            .send({
                'Status': NewSession,
                'Description': 'Order unsuccessful! Please contact management!'
            });
        }
    } catch (error) {
        console.trace(error);
    }
});



module.exports = Router;