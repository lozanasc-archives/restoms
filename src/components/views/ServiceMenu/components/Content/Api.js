import React from 'react';
import './style/Content.scss';
import Label from '../../../../common/Label/Label';
const Api = () => {
    return (
        <div className = "ApiContainer">
            <Label
                LabelContent = "API"
                isLabelContrast = {true}
                Style = {{textAlign: 'start'}}
            />
            <Label
                LabelContent = "This page is only available for the development/prototyping stage, this page or module will not be included in deployment."
                Style = {{textAlign: 'start', color: '#E56B6F', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <Label
                LabelContent = {`What is an API? An API is the interface that connects the front-end and the back-end, the back-end stores the data the API serves that data and the front-end presents the data.`}
                isLabelContrast = {true}
                Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <u
                style = {{color: '#355070'}}
            >
                <Label
                    LabelContent = "Available Endpoints"
                    isLabelContrast = {true}
                    Style = {{textAlign: 'start', fontSize: 'clamp(15px,30px,45px)'}}
                />
            </u>
            <div className="TestContainer">
                <Label
                    LabelContent = {`Customer API endpoints`}
                    isLabelContrast = {true}
                    Style = {{textAlign: 'start', fontSize: 'clamp(12px,24px,48px)'}}
                />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`GET /API/Customer/Tables`}
                            isLabelContrast = {false}
                            LabelFunction = {() => {
                                window.open('http://localhost:3000/API/Customer/Tables','_blank');
                            }}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`returns an array of JSON objects containing table data`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Customer/NewSessions`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends a JSON object payload to the Databse with customer information`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                <Label
                    LabelContent = {`Inventory API endpoints`}
                    isLabelContrast = {true}
                    Style = {{textAlign: 'start', fontSize: 'clamp(12px,24px,48px)'}}
                />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`GET /API/Inventory/TrendingDish`}
                            isLabelContrast = {false}
                            LabelFunction = {() => {
                                window.open('http://localhost:3000/API/Inventory/TrendingDish','_blank');
                            }}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Returns the item with the least amount of quantity`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/Remove`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the item to be deleted, and will return a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/New`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends a JSON object containing item data to be inserted into the database`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/ItemName`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the item, returns the name of item`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/ItemQty`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the item, returns the quantity of item`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/ItemPrice`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the item, returns the price of item`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/ItemType`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the item, returns the type of item`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                     <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Inventory/QtyUpdate`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the item and the new qty as new value, returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    
                <Label
                    LabelContent = {`Admin API endpoints [needs authorization]`}
                    isLabelContrast = {true}
                    Style = {{textAlign: 'start', fontSize: 'clamp(12px,24px,48px)'}}
                />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`GET /API/Admin/SessionsActive`}
                            isLabelContrast = {false}
                            LabelFunction = {() => {
                                window.open('http://localhost:3000/API/Admin/SessionsActive','_blank');
                            }}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Returns an array of JSON objects with order session datas that have active status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`GET /API/Admin/Sessions`}
                            isLabelContrast = {false}
                            LabelFunction = {() => {
                                window.open('http://localhost:3000/API/Admin/Sessions','_blank');
                            }}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Returns an array of JSON objects with order session datas, active or not`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/EndSession`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the session to be wrapped-up; it updates the status of the session to 0`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                     <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/AdminData`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the Username and returns a JSON object that contains all the information of the user agent`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/EditUsername`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new usernames and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/EditFullname`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new fullname and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/EditPassword`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new password and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/EditContacts`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new contacts and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/EditAddress`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new address and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/Authenticate`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the username and password and returns a JSON object containing admin information including the agent's AccessToken`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/Delete`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the account to be deleted, returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Admin/Register`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends a JSON object containing new registree information and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                <Label
                    LabelContent = {`Worker API endpoints [needs authorization]`}
                    isLabelContrast = {true}
                    Style = {{textAlign: 'start', fontSize: 'clamp(12px,24px,48px)'}}
                />
                <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`GET /API/Worker/SessionsActive`}
                            isLabelContrast = {false}
                            LabelFunction = {() => {
                                window.open('http://localhost:3000/API/Worker/SessionsActive','_blank');
                            }}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Returns an array of JSON objects with order session datas that have active status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`GET /API/Worker/Sessions`}
                            isLabelContrast = {false}
                            LabelFunction = {() => {
                                window.open('http://localhost:3000/API/Worker/Sessions','_blank');
                            }}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Returns an array of JSON objects with order session datas, active or not`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/EndSession`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the session to be wrapped-up; it updates the status of the session to 0`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                     <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/AdminData`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the Username and returns a JSON object that contains all the information of the user agent`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/EditUsername`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new usernames and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/EditFullname`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new fullname and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/EditPassword`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new password and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/EditContacts`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new contacts and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/EditAddress`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id, old and new address and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/Authenticate`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the username and password and returns a JSON object containing Worker information including the agent's AccessToken`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/AdmWorkerin/Delete`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends the id of the account to be deleted, returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
                    <u
                        style = {{color: '#E56B6F'}}
                    >
                        <Label
                            LabelContent = {`POST /API/Worker/Register`}
                            isLabelContrast = {false}
                            Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)', color: '#E56B6F'}}
                        />
                    </u>
                    <Label
                        LabelContent = {`Sends a JSON object containing new registree information and returns a JSON object with the query status`}
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(7px,15px,21px)'}}
                    />
            </div>
        </div>
    )
}

export default Api;
