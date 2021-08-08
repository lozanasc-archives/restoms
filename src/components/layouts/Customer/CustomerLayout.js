import React from 'react';
import MainCustomer from '../../views/Customer/CustomerView';
import { CustomerProvider } from '../../contexts/CustomerContext';
import './style/CustomerLayout.scss';


export const CustomerOrder = () => {

    window.addEventListener('beforeunload', function (e) {
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = '';
      });

    return (
        <CustomerProvider>
            <div className="CustomerLayoutContainer">
                <MainCustomer/>
            </div>
        </CustomerProvider>
    )
}

export const CustomerCheckout = () => {
    return (
        <div className="CustomerLayoutContainer">
            <h1>
                This is the Checkout component
            </h1>
        </div>
    )
}