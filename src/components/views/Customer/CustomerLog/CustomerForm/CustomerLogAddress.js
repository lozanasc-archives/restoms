import React , { useContext } from 'react';
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerTextfield from '../../../../common/Textfield/Textfield';

const CustomerLogAddress = () => {

    const { PageCount , SetAddress } = useContext(CustomerContext);

    if(PageCount !== 5)
        return null;
    
    return (
        <div 
            style = {
                {
                    display: 'flex', 
                    flexFlow: 'column'
                }
            }
        >
            <CustomerLabel 
                LabelContent={`how's your day?`}
                isLabelContrast={false}
            />
            <CustomerTextfield
                PlaceholderTitle='enter your address'
                HandleChange = {(e) => {
                    e.preventDefault()
                    SetAddress(e.target.value);
                    }
                }
                Name = 'CustomerAddress'
                Type = 'text'
            />
        </div>
    );
}

export default CustomerLogAddress;