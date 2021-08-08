const express = require('express');
const Router = express.Router();

// Inventory services
const GetList = require('../../services/inventory/inventory.list');
const RemoveItem = require('../../services/inventory/inventory.remove');
const AddItem = require('../../services/inventory/inventory.new');
const Clear = require('../../services/inventory/inventory.clear');
const { NewQuantity } = require('../../services/inventory/inventory.update');
const { GetQty, GetName, GetPrice, GetType, GetTrendingDish } = require('../../services/inventory/inventory.item');

Router.post('/Remove', async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const Result = await RemoveItem(Id);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Item is deleted successfully!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Something went wrong! Item was not deleted!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/New', async(Request, Response) => {
    try {
        const { Name, Type, InitQty, InitPrice } = Request.body;
        const Result = await AddItem(Name, Type, InitQty, InitPrice);
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "Item added successfully!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "Something went wrong, Item was not added!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/ItemName', async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const GetItemName = await GetName(Id);
        if(GetItemName){
            Response.status(200)
            .send(GetItemName);
        } else {
            Response.status(500)
            .send(GetItemName);
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/ItemQty', async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const GetItemQty = await GetQty(Id);
        if(GetItemQty){
            Response.status(200)
            .send(GetItemQty);
        } else {
            Response.status(500)
            .send(GetItemQty);
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/ItemPrice', async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const GetItemPrice = await GetPrice(Id);
        if(GetItemName){
            Response.status(200)
            .send(GetItemPrice);
        } else {
            Response.status(500)
            .send(GetItemPrice);
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/ItemType', async(Request, Response) => {
    try {
        const { Id } = Request.body;
        const GetItemType = await GetType(Id);
        if(GetItemType){
            Response.status(200)
            .send(GetItemType);
        } else {
            Response.status(500)
            .send(GetItemType);
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.post('/QtyUpdate', async(Request, Response) => {
    try {
        const { NewQty, Id } = Request.body;
        const Result = await NewQuantity(NewQty, Id);
        if (Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": `${NewQty} has been updated successfully!`
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": `${NewQty} has not been updated successfully!`
            });
        }
    } catch (error) {
        console.trace(error);     
    }
});

Router.get('/TrendingDish', async(Request, Response) => {
    try {
        const Result = await GetTrendingDish();
        if(Result) {
            Response.status(200)
            .send(Result);
        } else {
            Response.status(500)
            .send({
                "Status": "Failed!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
})

Router.get('/List', async(Request, Response) => {
    try {
        const List = await GetList();
        if(List){
            Response.status(200)
            .send({
                'Status': true,
                'Description': 'Fetching list is Successful!',
                'List': List
            })
        } else {
            Response.status(500)
            .send({
                'Status': false,
                'Description': 'Fetching list is Unsuccessful!',
                'List': List
            })
        }
    } catch (error) {
        console.trace(error);
    }
});

Router.get('/Clear', async(Request, Response) => {
    try {
        const Result = await Clear();
        if(Result) {
            Response.status(200)
            .send({
                "Status": Result,
                "StatusDescription": "The inventory list has been cleared!"
            });
        } else {
            Response.status(500)
            .send({
                "Status": Result,
                "StatusDescription": "The inventory list has not been cleared, something went wrong!"
            });
        }
    } catch (error) {
        console.trace(error);
    }
});

module.exports = Router;