import React , { useState , useContext} from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import Button from '../../../../common/Button/Button';
import LoginLabel from '../../../../common/Label/Label';
import LoginInput from '../../../../common/Textfield/Textfield';
import './style/LoginForm.scss';
import Logo from '../../../../../assets/restoms-logo/logo.png';


const Login = () => {

    const { LogIn } = useContext(AuthContext);
    
    const [Username, SetUsername] = useState('');
    const [Password, SetPassword] = useState('');
        
    const Authenticate = async(Credentials) => {
        try {
            const Auth = await fetch('/API/Worker/Authenticate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Credentials)
            });
            return Auth.json();
        } catch (error) {
            console.trace('Something went wrong', error);
        }
    }

    const SubmitHandler = async(e) => {
        e.preventDefault();
        try {
            const {AccessToken, Username: Name, Status} = await Authenticate({
                'Username': Username,
                'Password': Password
            });
            if(Status){
                localStorage.setItem('AccessToken', AccessToken);
                localStorage.setItem('Username', Name);
                LogIn(Status, "Worker");
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
                <Button
                        isButtonLink = {true}
                        isButtonContrast = {true}
                        ButtonContent = 'Back to Menu'
                        ButtonLinkRoute = '/'
                />
            </div>
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <LoginLabel
                    isLabelContrast = {false}
                    LabelContent = 'Worker Login'
                />
                <LoginInput
                    PlaceholderTitle = 'Username here'
                    HandleChange = {(e) => SetUsername(e.target.value)}
                />
                <LoginInput
                    PlaceholderTitle = 'Password here'
                    Type = 'password'
                    HandleChange = {(e) => SetPassword(e.target.value)}
                />
                <Button
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'LOGIN'
                    Type = 'submit'
                />
            </div>
        </form>
    )
}

export default Login;