import React, { useContext , useState } from 'react';
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import AlertCard, {TableCardComponent as TableCard} from '../../../../common/Card/Card';
import CustomerButton from '../../../../common/Button/Button';

const CustomerLogTable = () => {

    const { PageCount, _NextStage, CustomerDineType,  TableList, CustomerCount, SetTable } = useContext(CustomerContext);

    // Constant for Max Table you can Aqcuire as a Group
    const MaxTablePerGroup = CustomerCount === 'Group' ? 2 : 1;
    const [Count, SetCount] = useState(0);
    const [TableStatus, SetTableStatus] = useState(false);
    
    if(PageCount !== 7)
        return null;
    // eslint-disable-next-line
    else if(CustomerDineType === 'Takeout'){
        SetTable(0);
        _NextStage();
    }
        

    return (
        <div
            style = 
            {{
                display: 'flex',
                flexFlow: 'column',
                margin: 'auto',
                padding: '20px'
            }}
        >            
            { 
            Count >= 1 || TableStatus ? 
                <AlertCard
                    Style = {{zIndex: '1', position: 'absolute', top: '20px', left: '30px'}} 
                    AlertTitle={Count >= 1 ? 'Table limit reached' : TableStatus ? 'Table is taken' : null}
                /> 
            : 
                null
            }
            <CustomerLabel
                LabelContent = 'Choose your desired table'
            />
            <div
                style = 
                {
                    {
                        display: 'flex',
                        flexFlow: 'row wrap',
                        margin: '2px auto',
                        maxWidth: 'clamp(100%, 60%, 60%)',
                        justifyContent: 'space-evenly',
                    }
                }
            >
            {
                TableList.length > 0 ?
                TableList.map((items, key) => 
                    <TableCard
                        key = {key}
                        TableNumber = {items.id}
                        SeatType = {items.seat_no}
                        isTaken = {items.availability}
                        PropsTablecount
                        TableIsChosen = {
                            items.availability ? 
                                () => 
                                    {
                                        SetTableStatus(true);
                                        setTimeout(() => {
                                            SetTableStatus(false)
                                        }, 4000);
                                    }
                                    : 
                                () => 
                                    {
                                        if(Count < MaxTablePerGroup)
                                        {
                                            SetTable(items.id);
                                            SetCount(Count + 1);
                                            items.availability = 1;
                                        }
                                    }
                        }
                    /> 
                )
                :
                <CustomerLabel
                LabelContent={`Something went wrong! 😭`}   
                />
            }
            </div>
            {Count <= 0 ? 
            null
            :
            <CustomerButton
                isButtonLink = {false}
                isButtonContrast = {true}
                ButtonContent = 'Proceed.'
                ButtonFunction = {(e) => {
                    e.preventDefault();
                    _NextStage();
                    }
                }
            />}
        </div>
    );
};

export default CustomerLogTable;