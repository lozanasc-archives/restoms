import React, { useContext , useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { AuthContext } from '../../../../../../contexts/AuthContext';
import { AdminContext } from '../../../../../../contexts/AdminContext';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';
import { EditSettingInfoModal as EditModal } from '../../../../../../common/Modals/Modal';
import Label from '../../../../../../common/Label/Label';
import '../style/Content.scss';

const Settings = () => {

    const { LogOff } = useContext(AuthContext);
    const { Data, AsyncEditInfoUsername, AsyncEditInfoName, AsyncEditInfoPassword, AsyncEditInfoAddress, AsyncEditInfoContacts, AsyncDeleteAccount } = useContext(AdminContext);

    
    const [ ModalActive, SetModalActive ] = useState(false);
    const [ ModalType, SetModalType ] = useState('');

    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "SettingsContainer" style = {{...props}}>
                    {
                        ModalActive ? 
                        <EditModal
                            ToEditData = {Data}
                            SetNewUsername = {AsyncEditInfoUsername}
                            SetNewName = {AsyncEditInfoName}
                            SetNewPassword = {AsyncEditInfoPassword}
                            SetNewContacts = {AsyncEditInfoContacts}
                            SetNewAddress = {AsyncEditInfoAddress}
                            InfoEditable = {ModalType}
                            isModalContrast  = {false}
                            SetModalActive = {SetModalActive}
                            SetModalType = {SetModalType}
                        /> 
                            : 
                        null
                    }
                    <div className="TopBar">
                        <Label
                            LabelContent = "Settings"
                            isLabelContrast = {true}
                        />
                        <Button
                            isButtonLink = {false}
                            isButtonContrast = {true}
                            ButtonContent = 'Logout'
                            ButtonFunction = {() => {LogOff()}}
                        />
                    </div>
                    <div className="SettingsInfoContainer">
                            <Label
                                LabelContent = "General Information"
                                isLabelContrast = {false}
                                Style = {{fontSize: 'clamp(10px, 20px, 30px)', textAlign: 'start'}}
                            />
                            <div className="InfoContainer">
                                <div className="IdUsername">
                                    <ListCard
                                        CardContent = {`Account Id: ${Data.id}`}
                                    />
                                    <ListCard
                                        CardContent = {`Username: ${Data.username}`}
                                        CardFunction = {() => {
                                            SetModalType('Username');
                                            SetModalActive(true);
                                        }}
                                    />
                                </div>
                                <ListCard
                                    CardContent = {`Name: ${Data.fullname}`}
                                    CardFunction = {() => {
                                        SetModalType('Fullname');
                                        SetModalActive(true);
                                    }}
                                />
                                <ListCard
                                    CardContent = {`Password: ${Data.password}`}
                                    CardFunction = {() => {
                                        SetModalType('Password');
                                        SetModalActive(true);
                                    }}
                                />
                                <ListCard
                                    CardContent = {`Contact #: ${Data.phone}`}
                                    CardFunction = {() => {
                                        SetModalType('Contact');
                                        SetModalActive(true);
                                    }}
                                />
                                <ListCard
                                    CardContent = {`Address: ${Data.address}`}
                                    CardFunction = {() => {
                                        SetModalType('Address');
                                        SetModalActive(true);
                                    }}
                                />
                            </div>
                            <div className="ButtonGroup">
                                    <Button
                                        isButtonLink = {false}
                                        ButtonContent = "Delete Account"
                                        isButtonContrast = {true}
                                        ButtonFunction = {() => {
                                             if(window.confirm('Are you sure? Doing this will erase your account forever!')){
                                                 AsyncDeleteAccount(Data.id);
                                                 LogOff();
                                             }
                                            else {
                                                return;
                                            }
                                        }}
                                    />
                                </div>
                                
                    </div>
                </div>
            }
        </Spring>
        
    );
};

export default Settings;
