import React , { useState , useContext } from 'react';
import { Spring } from 'react-spring/renderprops';
import { AdminContext } from '../../../../../../contexts/AdminContext';
import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';
import { NewItemModal as AddItem , ItemModal as ViewItem, ModifyItemModal as EditItem } from '../../../../../../common/Modals/Modal';
import Button from '../../../../../../common/Button/Button';
import '../style/Content.scss';

const Inventory = () => {
    
    const { Inventory, AsyncAddItem, AsyncRemoveItem, AsyncClearInventory } = useContext(AdminContext);

    const [ AddItemModalStatus, SetAddItemModalStatus ] = useState(false);
    const [ InventoryItemModalStatus, SetInventoryItemModalStatus ] = useState(false);
    const [ TempInventory, SetTempInventory ] = useState(Inventory);
    const [ EditItemModalStatus, SetEditItemModalStatus ] = useState(false);
    const [ ItemFocus, SetItemFocus] = useState({});

    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "InventoryContainer" style = {{...props}}>
                    {
                        AddItemModalStatus ?
                            <AddItem
                                SetModalStatus = {SetAddItemModalStatus}
                                isModalContrast = {false}
                                PushItem = {AsyncAddItem}
                                UpdateInventory = {SetTempInventory}
                                TempInventory = {TempInventory}
                            />
                        :
                            null
                    }
                    {
                        InventoryItemModalStatus ? 
                            <ViewItem
                                FoodId = { ItemFocus.Id }
                                FoodName = { ItemFocus.Name }
                                FoodPrice = { ItemFocus.Price }
                                ItemQuantity = { ItemFocus.Quantity }
                                SetModalStatus = { SetInventoryItemModalStatus }
                                SetEditStatus = { SetEditItemModalStatus }
                                UpdateInventory = {SetTempInventory}
                                TempInventory = {TempInventory}
                                PopItem = {AsyncRemoveItem}
                                ClearInventory = {AsyncClearInventory}
                            />
                        :
                            null
                    }
                    {
                        EditItemModalStatus ?
                            <EditItem 
                                isModalContrast = {false}
                                ItemName = {ItemFocus.Name}
                                InitialQuantity = {ItemFocus.Quantity}
                                SetEditStatus = { SetEditItemModalStatus }
                            />
                        :
                            null
                    }
                    <div className="TopBar">
                        <Label
                            LabelContent = "Inventory"
                            isLabelContrast = {true}
                        />
                        <Label
                            LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)'}}
                            isLabelContrast = {true}
                        />
                    </div>
                    <div className="InventoryListContainer">
                        <div className="InventoryList">
                            {
                                TempInventory.length !== 0 ?
                                TempInventory.map((Items, key) => 
                                <ListCard 
                                    key = {key} 
                                    CardContent = {Items.name}
                                    CardFunction = {() => {
                                        SetInventoryItemModalStatus(true);
                                        SetItemFocus({Id: Items.id, Name: Items.name, Price: Items.price, Quantity: Items.quantity});
                                    }}
                                />
                                )
                                :
                                <Label
                                    LabelContent = "Resupply needed!"
                                    isLabelContrast = {false}
                                />
                            }
                        </div>
                    </div>
                    <div className="ButtonContainer">
                        <Button
                            isButtonLink = {false}
                            ButtonContent = 'Add New Item'
                            isButtonContrast= {true}
                            ButtonFunction = {() => {
                                SetAddItemModalStatus(true);
                            }}
                        />
                    </div>
                </div>
        }
        </Spring>
    );
};

export default Inventory;