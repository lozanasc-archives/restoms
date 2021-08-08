import React, { useContext, useState } from 'react';
import LoginButton from '../../../common/Button/Button';
import LoginLabel from '../../../common/Label/Label';
import LoginInput from '../../../common/Textfield/Textfield';
import { AuthContext } from '../../../contexts/AuthContext';
// import AlertCard from '../../../common/Card/Card';
import './style/LoginForm.scss';
import Logo from '../../../../assets/restoms-logo/logo.png';

const Login = () => {

    const { LogIn } = useContext(AuthContext);
    
    const [ Username, SetUsername ] = useState('');
    const [ Password, SetPassword ] = useState('');
    
    const Authenticate = async (Credentials) => {
        try {
            const Auth = await fetch('/API/Admin/Authenticate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Credentials)
            });
            return Auth.json();
        } catch (error) {
            console.trace('Something went wrong', error);
        }
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const {AccessToken, Username: Name, Status} = await Authenticate({
                'Username': Username,
                'Password': Password
            });
            if (Status){
                localStorage.setItem("AccessToken", AccessToken);
                localStorage.setItem("Username", Name);
                LogIn(Status, "Admin");
            } else {
                alert('Recheck your Username and Password input');
            }
        } catch (error) {
            alert('Recheck your Username and Password input');
        }
        
        
    }

    return (
        <form 
        className="LoginContainer"
        onSubmit = {SubmitHandler}
        >
            <div className="ButtonContainer">
                <LoginButton
                        isButtonLink = {true}
                        isButtonContrast = {false}
                        ButtonContent = 'Back to Menu'
                        ButtonLinkRoute = '/'
                />
            </div>
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <LoginLabel
                    LabelContent = 'Admin Login'
                />
                <LoginInput
                    PlaceholderTitle = 'Username here'
                    Name = 'Username'
                    HandleChange = {(e) => SetUsername(e.target.value)}
                />
                <LoginInput
                    PlaceholderTitle = 'Password here'
                    Name = 'Password'
                    HandleChange = {(e) => SetPassword(e.target.value)}
                    Type = 'password'
                />
                <LoginButton
                    isButtonLink = {false}
                    isButtonContrast = {false}
                    ButtonContent = 'LOGIN'
                    Type = 'submit'
                />
            </div>
        </form>
    )
}

export default Login;
