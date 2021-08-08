import React, { useState } from 'react';
import RegisterButton from '../../../common/Button/Button';
import RegisterLabel from '../../../common/Label/Label';
import RegisterInput from '../../../common/Textfield/Textfield';
import './style/RegistrationForm.scss';
import Logo from '../../../../assets/restoms-logo/logo.png';

const Register = () => {

    const [ NewUsername, SetNewUsername ] = useState('');
    const [ NewPassword, SetNewPassword ] = useState('');
    const [ NewFullname, SetNewFullname ] = useState('');
    const [ NewContacts, SetNewContacts ] = useState('');
    const [ NewAddress, SetNewAddress ] = useState('');
 
    const Register = async(NewUsername, NewPassword, NewFullname, NewContacts, NewAddress) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${localStorage.getItem('AccessToken')}`);
            headers.append('Content-Type', 'application/json');
    
            const Register = await fetch('/API/Admin/Register', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    'Username': NewUsername,
                    'Password': NewPassword,
                    'Fullname': NewFullname,
                    'Contact': NewContacts,
                    'Address': NewAddress
                })
            });
            return Register.json();    
        } catch (error) {
            alert('Something went wrong!');
        }
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        Register(NewUsername, NewPassword, NewFullname, NewContacts, NewAddress)
        .then(Result => console.log(Result))
        .catch(Error => console.error(Error));
    }

    return (
        <form 
            className="RegisterContainer"
            onSubmit = {SubmitHandler}
        >
            <div className="ButtonContainer">
                <RegisterButton
                        isButtonLink = {true}
                        isButtonContrast = {false}
                        ButtonContent = 'Back to Menu'
                        ButtonLinkRoute = '/'
                />
            </div>
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <RegisterLabel
                    LabelContent = 'Admin Registration'
                />
                <RegisterInput
                    PlaceholderTitle = 'Username here'
                    HandleChange = {(e) => SetNewUsername(e.target.value)}
                    Name = 'Username'
                />
                <RegisterInput
                    PlaceholderTitle = 'Password here'
                    HandleChange = {(e) => SetNewPassword(e.target.value)}
                    Name = 'Password'
                    Type = 'password'
                />
                <RegisterInput
                    PlaceholderTitle = 'Fullname here'
                    Name = 'Fullname' 
                    HandleChange = {(e) => SetNewFullname(e.target.value)}
                />
                <RegisterInput
                    PlaceholderTitle = 'Contact here'
                    Name = 'Contact'
                    HandleChange = {(e) => SetNewContacts(e.target.value)}
                    Type = "number"
                />
                <RegisterInput
                    PlaceholderTitle = 'Address here'
                    Name = 'Address'
                    HandleChange = {(e) => SetNewAddress(e.target.value)}
                />
                <RegisterButton
                    isButtonLink = {false}
                    isButtonContrast = {false}
                    ButtonContent = 'Register'
                    Type = 'submit'
                />
            </div>
        </form>
    );
}

export default Register;