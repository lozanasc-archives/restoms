import React from 'react';
import { NavLink } from 'react-router-dom';
import Label from '../../../../common/Label/Label';
const Home = () => {
    return (
        <div className = "HomeContainer">
            <Label
                LabelContent = "Home"
                isLabelContrast = {true}
                Style = {{textAlign: 'start'}}
            />
            <Label
                LabelContent = "This page is only available for the development/prototyping stage, this page or module will not be included in deployment."
                Style = {{textAlign: 'start', color: '#E56B6F', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <div className="CardContainer">
                <div className="CardGroup">
                    <div className="LinkBox">    
                        <NavLink
                            to = '/Customer/Order'
                        >
                            Customer
                        </NavLink>
                    </div>
                    <Label
                        LabelContent = "Enables the the customers to log their basic information (this is in compliance to the local government's mandatory covid safety protocol for contact tracing), and the ability to create order session which allows customers to order their food on the system."
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(8px,16px,24px)'}}
                    />
                </div>
                <div className="CardGroup">
                    <div className="LinkBox">
                        <NavLink
                            to = '/Worker/Login'
                        >
                            Worker
                        </NavLink>
                    </div>
                    <Label
                        LabelContent = "or Salesperson this service enables the Worker/Salesperson to accommodate order sessions the customer has made, check different important data on the dashboard like transaction history and inventory."
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(8px,16px,24px)'}}
                    />
                </div>
                <div className="CardGroup">
                    <div className="LinkBox">
                        <NavLink
                            to = '/Admin/Login'
                        >
                            Admin
                        </NavLink>
                    </div>
                    <Label
                        LabelContent = "has almost the same privileges with the Worker it can check important data on the Dashboard like transaction history and inventory, but this component have the ability to add or remove Worker accounts and check their transaction histories."
                        isLabelContrast = {true}
                        Style = {{textAlign: 'start', fontSize: 'clamp(8px,16px,24px)'}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
