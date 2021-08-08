import React , { useContext } from 'react';
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerTextfield from '../../../../common/Textfield/Textfield';

const CustomerLogNumber = () => {

    const { PageCount , SetContacts } = useContext(CustomerContext);

    if(PageCount !== 6)
        return null

    return (
        <div style=
        {
            {
                display: 'flex', 
                flexFlow: 'column'
            }
        }
        >
            <CustomerLabel 
                LabelContent='we appreciate you dining with us'
                isLabelContrast={false}
            />
            <CustomerTextfield
                PlaceholderTitle='enter your contact number'
                HandleChange = {(e) => {
                    e.preventDefault()
                    SetContacts(e.target.value);
                    }
                }
                Name = 'CustomerContacts'
                MinimumValue = {0}
                Type = 'number'
            />
        </div>
    );
}

export default CustomerLogNumber;