import React , { useState, useContext} from 'react'
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';
import { OrderTransactionModal } from '../../../../../../common/Modals/Modal';
import { ListCard } from '../../../../../../common/Card/Card';
import { AdminContext } from '../../../../../../contexts/AdminContext';

const Transactions = () => {

    const { AllSessions, SetAllSessions, AsyncEndSession, AsyncClearSessions } = useContext(AdminContext);
    const [ TransactionModalActive, SetTransactionModalActive ] = useState(false);
    const [ TransactionFocus, SetTransactionFocus ] = useState({});

    return (
        <div className = "TransactionsContainer">
            {
                TransactionModalActive ? 
                <OrderTransactionModal
                    isModalContrast = {false}
                    key = {TransactionFocus.Key}                         
                    TransactionId = {TransactionFocus.Id}
                    TransactionName = {TransactionFocus.Name}
                    TransactionList = {TransactionFocus.Checkout}
                    TransactionTable = {TransactionFocus.Table}
                    TransactionStatus = {TransactionFocus.Status}
                    TempSessions = {AllSessions}
                    UpdateSessions = {SetAllSessions}
                    Cancel = {SetTransactionModalActive}
                    ClearSessions = {AsyncClearSessions}
                    EndSession = {AsyncEndSession}
                />
                :
                null
            }
            <div className="TopBar">
                <Label
                    LabelContent = "Transactions"
                    isLabelContrast = {true}
                />
                <Label                    
                    LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                    Style = {{fontSize: 'clamp(20px, 30px, 40px)'}}
                    isLabelContrast = {true}
                />
            </div>
            <div className="TransactionListContainer">
                <div className="TransactionList">
                    {
                        AllSessions.length !== 0 ?
                        AllSessions.map((Items, key) => 
                        <ListCard 
                            key = {key} 
                            CardContent = {Items.customer_name} 
                            CardFunction = {() => {
                                SetTransactionModalActive(true);
                                SetTransactionFocus({Key: key, Id: Items.customer_id, Name: Items.customer_name, Table: Items.customer_table_no, Checkout: JSON.parse(Items.checkout).checkout, Status: Items.status});
                            }}
                        />)
                        :
                        <Label
                            LabelContent = {`No recent transactions`}
                            Style = {{fontSize: 'clamp(7px, 14px, 21px)'}}
                            isLabelContrast = {false}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Transactions;
