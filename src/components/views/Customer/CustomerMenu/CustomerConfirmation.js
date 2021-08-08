import React , { useContext } from 'react';
import CustomerButton from '../../../common/Button/Button';
import CustomerLabel from '../../../common/Label/Label';
import { CustomerContext } from '../../../contexts/CustomerContext';
import './style/Confirmation.scss';

const CustomerConfirmation = () => {

    const 
    { 
        Stage, 
        SetStage, 
        SetPageCount,
        CustomerCheckout,
        CompleteSession,
        CustomerName,
        CustomerDineType,
        CustomerCount,
        CustomerTable,
        CustomerAddress,
        CustomerContacts,
        PushOrderSessionToDB
    } = useContext(CustomerContext);

    if(Stage!==3)
        return null;

    return (
        <div className="ConfirmationContainer">
            <div className="InnerContainer">
                <CustomerLabel
                    isLabelContrast = {false}
                    LabelContent = {`Thank you, ${CustomerName}`}
                />
                <CustomerLabel
                    isLabelContrast = {false}
                    LabelContent = {`Your bill will follow shortly...`}
                />
                <CustomerButton 
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Confirm'
                    ButtonLinkRoute = '/Customer/Order'
                    ButtonFunction = {() => {
                        CompleteSession();
                        SetStage(1);
                        SetPageCount(1);
                        PushOrderSessionToDB({
                            DineType: CustomerDineType,
                            Count: CustomerCount,
                            Name: CustomerName, 
                            Address: CustomerAddress,
                            Phone: CustomerContacts,
                            Table: CustomerTable,
                            Checkout: CustomerCheckout
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default CustomerConfirmation;
//