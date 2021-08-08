import React , { useState } from 'react';
import ModalButton from '../Button/Button';
import ModalLabel from '../Label/Label';
import { CheckoutFoodCard, ListCard } from '../Card/Card';

import './style/Modal.scss';
import Textfield from '../Textfield/Textfield';

export const FoodModal = (props) => {

    const [ FoodQty, SetFoodQty ] = useState(0);

    return (
        <div className = "ModalContainer">
            <div className="FoodModal ModalBase">
                <ModalLabel
                    LabelContent = {`${props.FoodName}`}
                    Style = {{fontSize: 'clamp(15px, 25px, 30px)'}}
                />
                <ModalLabel
                    LabelContent = {`Price: ${props.FoodPrice}`}
                    Style = {{fontSize: 'clamp(15px, 25px, 30px)'}}
                />
                <Textfield
                    Type = "number"
                    PlaceholderTitle = {`Quantity`}
                    Name = "FoodQty"
                    HandleChange = {(e) => {
                        e.preventDefault();
                        SetFoodQty(e.target.value);
                    }}
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {    
                                const exist = props.CheckoutList.find((item) => item.Id === props.FoodId);
                                if(exist) 
                                    alert('Item is already in checkout!')
                                else if(props.FoodQty < FoodQty)
                                    alert(`Sorry, there's not enough ${props.FoodName}`)
                                else 
                                    props.SetCheckoutList([...props.CheckoutList, { Id: props.FoodId, Name: props.FoodName, Price: props.FoodPrice, Qty: FoodQty, Total: (props.FoodPrice * FoodQty)}]);
                                props.SetFoodModalStatus(false);
                            }}
                    />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {true}
                        ButtonContent = "Cancel"
                        ButtonFunction = {() => {
                            props.SetFoodModalStatus(false);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const ItemModal = (props) => {

    const RemoveItem = (Id) => {
        const UpdatedInventoryList = props.TempInventory.filter(Item => Item.id !== Id);
        props.UpdateInventory(UpdatedInventoryList);
        props.PopItem(Id);
    }

    return (
        <div className = "DashboardModalContainer">
            <div className={props.isModalContrast ? 'ItemModal DashboardModalBase Contrast' : 'ItemModal DashboardModalBase NonContrast'}>
                <ModalLabel
                    LabelContent = {`Item Id: ${props.FoodId}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Item Name: ${props.FoodName}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Price: ${props.FoodPrice}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Qty: ${props.ItemQuantity}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Delete Item"
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonFunction = {() => {
                                // Resets the the database table C:
                                if (props.TempInventory.length === 1)
                                    props.ClearInventory();
                                RemoveItem(props.FoodId);
                                props.SetModalStatus(false);
                            }}
                        />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {props.isModalContrast ? false : true}
                        ButtonContent = "Edit Item"
                        ButtonFunction = {() => {
                            props.SetEditStatus(true);
                            props.SetModalStatus(false);
                        }}
                    />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {props.isModalContrast ? false : true}
                        ButtonContent = "Cancel"
                        ButtonFunction = {() => {
                            props.SetModalStatus(false);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const ModifyItemModal = (props) => {
    return (
        <div className = "DashboardModalContainer">
            <div className={props.isModalContrast ? 'ModifyItemModal DashboardModalBase Contrast' : 'ModifyItemModal DashboardModalBase NonContrast'}>
                <ModalLabel
                    LabelContent = {`Item: ${props.ItemName}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <Textfield
                    Type = "text"
                    PlaceholderTitle = {`New Name`}
                    Name = "UpdateName"
                />
                <Textfield
                    Type = "number"
                    PlaceholderTitle = {`New Quantity`}
                    Name = "UpdateQuantity"
                />
                <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                alert('Are you sure?');
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {true}
                            ButtonContent = "Cancel"
                            ButtonFunction = {() => {
                                props.SetEditStatus(false);
                            }}
                        />
                    </div>
            </div>
        </div>
    );
};

export const OrderTransactionModal = (props) => {

    // const [ ItemQty, SetItemQty ] = useState(0);

    const EndSession = (Id, Status) => {

        if(Status === 0) {
            alert('Session is already archived');
            return;
        }

        const UpdatedSessions = props.TempSessions.filter(Session => Session.customer_id !== Id);
        props.UpdateSessions(UpdatedSessions);
        props.EndSession(Id);
        for(let i in props.TransactionList){
            
            let TListQty = props.TransactionList[i].Qty
            let ItemQty = 0;
            props.ItemQty(props.TransactionList[i].Id)
            .then((Qty) => ItemQty = Qty[0].quantity)
            .catch(err => console.log(err));

            setTimeout(() => {
                console.log("Item Qty from TransactionList = ", TListQty);
                console.log("Item Qty from Database = ", ItemQty);
                setTimeout(() => {
                    let NewDeductedQty = (ItemQty - TListQty);
                    props.UpdateInventory(NewDeductedQty, props.TransactionList[i].Id);
                    console.log((ItemQty - TListQty));
                }, 2000)
            }, 2000)
        }
    };

    const TotalPayable = () => {
        let Total = 0;
        for( let i = 0; i < props.TransactionList.length; i++ )
            Total += props.TransactionList[i].Total;

        return Total;
    }

    return (
        <div className = "DashboardModalContainer">
            <div className={props.isModalContrast ? "TransactionModal DashboardModalBase Contrast" : "TransactionModal DashboardModalBase NonContrast"}>
                <ModalLabel
                    LabelContent = {`Transaction Id: ${props.TransactionId}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Customer Name: ${props.TransactionName}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Customer's Table: ${props.TransactionTable}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Session Status: 
                        ${
                        props.TransactionStatus === 1 ? 'Active' : 'Archived'
                        }`
                    }
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(10px, 15px, 20px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Total Payable: ${TotalPayable()}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(10px, 15px, 20px)',
                        textAlign: 'start'
                    }}
                />
                <div className={props.isModalContrast ? "OrderedItemsContainer NonContrast" : "OrderedItemsContainer Contrast"}>
                    {
                        props.TransactionList.map((Items, key) => (
                            <ListCard
                                key = {key}
                                CardContent = { Items.Name }
                            />
                        ))
                    }
                </div>
                <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "End Session"
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonFunction = {() => {                                
                                EndSession(props.TransactionId, props.TransactionStatus);
                                props.Cancel(false);
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonContent = "Cancel"
                            ButtonFunction = {() => {
                                props.Cancel(false);
                            }}
                        />
                </div>
            </div>
        </div>
    );
};

export const CheckoutModal = (props) => {
    return (
        <div className = "ModalContainer">
            <div className="CheckoutModal ModalBase">
                <ModalLabel
                    LabelContent = "Checkout"
                    Style = {{
                        fontSize: 'clamp(20px, 25px, 30px)'
                    }}
                />
                <div className="CheckoutContainer">
                    <div className="ModalList">
                        {
                            props.CheckoutList.length > 0 ?
                                props.CheckoutList.map((Items, key) => 
                                <CheckoutFoodCard
                                    key = {key}
                                    CheckoutList = {props.CheckoutList}
                                    SetCheckoutList = {props.SetCheckoutList}
                                    id = {Items.Id}
                                    FoodName = {Items.Name}
                                    FoodQty = {Items.Price}
                                />
                                )
                            :
                                <ModalLabel
                                    LabelContent = "Checkout card is Empty! Start Ordering 👀"
                                    isLabelContrast = {true}
                                    Style = {{
                                        fontSize: 'clamp(20px, 25px, 30px)'
                                    }}
                                />
                        }
                    </div>
                    <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                if(props.CheckoutList.length !== 0){
                                    props.SetCustomerCheckout(props.CheckoutList);
                                    props.SetCheckoutList([]);
                                    props.Proceed();
                                } else 
                                    alert('You need atleast 1 order to proceed checkout')
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {true}
                            ButtonContent = "Cancel"
                            ButtonFunction = {() => {
                                props.SetModalStatus(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const NewItemModal = (props) => {

    const [ ItemName , SetItemName ] = useState('');
    const [ ItemType , SetItemType ] = useState('');
    const [ ItemQty , SetItemQty ] = useState('');
    const [ ItemPrice , SetItemPrice ] = useState('');

    return (
        <div className="DashboardModalContainer">
            <div className = {props.isModalContrast ? 'NewItemModal DashboardModalBase Contrast' : 'NewItemModal DashboardModalBase NonContrast'}>
                <div className="InnerContainer">
                <ModalLabel
                    LabelContent = "New Item"
                    Style = {{
                        fontSize: 'clamp(10px, 20px, 30px)'
                    }}
                />
                    <Textfield
                            Type = "text"
                            PlaceholderTitle = {`New Item Name`}
                            Name = "ItemName"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemName(e.target.value);
                            }}
                    />
                    <Textfield
                            Type = "text"
                            PlaceholderTitle = {`New Item Type`}
                            Name = "ItemType"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemType(e.target.value);
                            }}
                    />
                    <Textfield
                            Type = "number"
                            PlaceholderTitle = {`Initial Quantity`}
                            Name = "InitQty"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemQty(e.target.value);
                            }}
                    />
                    <Textfield
                            Type = "number"
                            PlaceholderTitle = {`Initial Price`}
                            Name = "InitPrice"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemPrice(e.target.value);
                            }}
                    />
                    <div className="ModalButtonGroup">
                            <ModalButton
                                isButtonLink = {false}
                                ButtonContent = "Cancel"
                                isButtonContrast = {props.isModalContrast ? false : true}
                                ButtonFunction = {() => {
                                    props.SetModalStatus(false);
                                }}
                            />
                            <ModalButton
                                isButtonLink = {false}
                                isButtonContrast = {props.isModalContrast ? false : true}
                                ButtonContent = "Add Item"
                                ButtonFunction = {() => {
                                    const lastItemId = (props.TempInventory.length + 1);
                                    console.log(lastItemId);
                                    props.PushItem( ItemName, ItemType, ItemQty, ItemPrice );
                                    props.UpdateInventory([...props.TempInventory, { id: lastItemId, name: ItemName, type: ItemType, quantity: ItemQty, price: ItemPrice }])
                                    props.SetModalStatus(false);
                                }}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EditSettingInfoModal = (props) => {

    const [ NewValue , SetNewValue ] = useState('');

    return (
        <div className='DashboardModalContainer'>
            <div className = {
                props.isModalContrast ? 
                'DashboardModalBase EditSettingInfoModal Contrast'
                    :
                'DashboardModalBase EditSettingInfoModal NonContrast'
            } >
                <div className="InnerContainer">
                    <ModalLabel
                        LabelContent = {`Editing ${props.InfoEditable}`}
                        isLabelContrast = {false}
                        Style = {{
                            fontSize: 'clamp(15px, 20px, 25px)'
                        }}
                    />
                    <div className="ModalInputGroup">
                        <Textfield
                            Type = 'text'
                            Name = {`Old${props.InfoEditable}`}
                            Rest = {{
                                'defaultValue': `${
                                    props.InfoEditable === 'Username' ? 
                                        props.ToEditData.username :
                                    props.InfoEditable === 'Fullname' ?
                                        props.ToEditData.fullname :
                                    props.InfoEditable === 'Password' ?
                                        props.ToEditData.password :
                                    props.InfoEditable === 'Contact' ?
                                        props.ToEditData.phone :
                                    props.InfoEditable === 'Address' ?
                                        props.ToEditData.address :
                                    undefined
                                }`
                            }}
                        />
                        <Textfield
                            Type = {props.InfoEditable === 'Password' ? "password" : "text"}
                            PlaceholderTitle = {`New ${props.InfoEditable}`}
                            Name = {`New${props.InfoEditable}`}
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetNewValue(e.target.value);
                            }}
                        />
                    </div>
                    <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Cancel"
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonFunction = {() => {
                                props.SetModalActive(false);
                                props.SetModalType('');
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonContent = "Accept Changes"
                            ButtonFunction = {    
                                () => {
                                    if (props.InfoEditable === 'Username')
                                        props.SetNewUsername(NewValue, props.ToEditData.username, props.ToEditData.id);
                                    else if (props.InfoEditable === 'Fullname')
                                        props.SetNewName(NewValue, props.ToEditData.fullname, props.ToEditData.id);
                                    else if (props.InfoEditable === 'Password')
                                        props.SetNewPassword(NewValue, props.ToEditData.password, props.ToEditData.id);
                                    else if (props.InfoEditable === 'Contact')
                                        props.SetNewContacts(NewValue, props.ToEditData.phone, props.ToEditData.id)
                                    else if (props.InfoEditable === 'Address')
                                        props.SetNewAddress(NewValue, props.ToEditData.address, props.ToEditData.id);
                                    props.SetModalActive(false);
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

