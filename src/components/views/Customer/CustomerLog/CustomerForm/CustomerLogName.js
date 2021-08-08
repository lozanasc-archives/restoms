import React , { useContext } from 'react';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerTextfield from '../../../../common/Textfield/Textfield';
import { CustomerContext } from '../../../../contexts/CustomerContext';

const CustomerLogName = () => {

    const { PageCount , SetName } = useContext(CustomerContext);

    if(PageCount !== 2)
        return null;

    return (
        <div style=
        {  
            {
                display: 'flex', 
                flexFlow: 'column',
            }
        }
        >
            <CustomerLabel 
                LabelContent='welcome.'
                isLabelContrast={false}
            />
            <CustomerTextfield
                PlaceholderTitle='enter your name'
                HandleChange = { (e) => {
                    e.preventDefault();
                        SetName(e.target.value);
                    } 
                }
                Name = 'CustomerName'
                Type = 'text'
            />
        </div>
    );
};

export default CustomerLogName;