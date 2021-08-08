import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../../../../contexts/AuthContext';
import { WorkerContext } from '../../../../../../contexts/WorkerContext';
import { Spring } from 'react-spring/renderprops';
import Label from '../../../../../../common/Label/Label';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';
import { EditSettingInfoModal as EditModal } from '../../../../../../common/Modals/Modal';

const Settings = ({Id, Username, Name, Password, Contact, Address}) => {

    const {LogOff} = useContext(AuthContext);
    const { Data, AsyncEditInfoUsername, AsyncEditInfoName, AsyncEditInfoPassword, AsyncEditInfoAddress, AsyncEditInfoContacts, AsyncDeleteAccount } = useContext(WorkerContext);

    const [ ModalActive, SetModalActive ] = useState(false);
    const [ ModalType, SetModalType ] = useState('');

    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "SettingsContainer" style={{...props}}>
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
                            Style = {{color: '#E56B6F'}}
                            
                        />
                        <Button
                            isButtonLink = {false}
                            isButtonContrast = {false}
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
                                isButtonContrast = {false}
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
}

export default Settings;
