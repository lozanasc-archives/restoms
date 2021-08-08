import React , { useContext } from 'react';
import Label from '../../../../common/Label/Label';
import Button from '../../../../common/Button/Button';
import './style/CustomerPolicyAgreement.scss';
import { CustomerContext } from '../../../../contexts/CustomerContext';

const CustomerPolicyAgreement = () => {

    const { PageCount , _NextPage , InitializeSession } = useContext(CustomerContext);

    if(PageCount !== 1)
        return null;
        
    return (
        <div className="PolicyAgreementContainer">
            <div className="InnerContainer">
                <Label
                    LabelContent = 'Privacy Policy'
                />
                <div className="PolicyContainer">
                    <p>
                        Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our Web Application, https://github.com/restauMS/web-based-restaurant-management-system, and other sites we own and operate.
                        
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                        
                        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                        
                        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                        
                        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                        
                        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                        
                        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                        <br/>
                        <br/>
                        <span style={{textAlign: 'center', margin: '10px auto', fontSize: 'clamp(20px,10px,30px)'}}>
                            This policy is effective as of the 24th of December 2020.
                        </span>
                    </p>
                </div>
                <Button
                    isButtonContrast = {true}
                    ButtonContent = 'I understand'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        InitializeSession(true);
                        _NextPage();
                    }}
                />
            </div>
        </div>
    );
}

export default CustomerPolicyAgreement;