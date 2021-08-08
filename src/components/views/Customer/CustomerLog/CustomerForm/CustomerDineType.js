import React , { useContext } from 'react'
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerButton from '../../../../common/Button/Button';

const CustomerDineType = () => {

    const { PageCount , _NextPage , SetDineType , CustomerName} = useContext(CustomerContext);

    if (PageCount !== 3)
        return null;

    return (
        <div style = {{
            display: 'flex',
            flexFlow: 'column'
        }}>
            <CustomerLabel
                LabelContent={`Hello, ${CustomerName || 'anonynmous'}!`}
                isLabelContrast={false}
            />
            <div style = {{
                display: 'flex',
                flexFlow: 'row',
                margin: 'auto'
            }}>
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Takeout'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        SetDineType('Takeout');
                        _NextPage();
                    }}
                    Style = {{margin: 'auto 5px'}}
                />
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Dine-In'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        SetDineType('Dine-In');
                        _NextPage();
                    }}
                    Style = {{margin: 'auto 5px'}}
                />                
            </div>
        </div>
    )
}

export default CustomerDineType;
