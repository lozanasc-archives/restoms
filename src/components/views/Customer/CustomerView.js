import React from 'react';
import { Spring } from 'react-spring/renderprops';
import CustomerLog from './CustomerLog/CustomerLog';
import CustomerMenu from './CustomerMenu/CustomerMenu';
import CustomerConfirmation from './CustomerMenu/CustomerConfirmation';
const CustomerView = () => {
        return (
                <Spring
                        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
                        to = {{opacity: 1}}
                >
                {
                        props => 
                        <div style={{...props}}>       
                                <CustomerLog/>
                                <CustomerMenu/>
                                <CustomerConfirmation/>
                        </div>
                }
        </Spring> 
        );
}

export default CustomerView;