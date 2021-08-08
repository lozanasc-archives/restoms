import React from 'react';
import { Spring } from 'react-spring/renderprops';
// Component Imports
import Button from '../Button/Button';
// Asset Imports
import AlertCardIcon from '../../../assets/alert-card/warning-icon.png';
import './style/Card.scss';
/*
    * Alert Card Component
    ? Card Component responsible for warning users
*/
const AlertCardComponent = AlertProps => 
{
    return (
        <Spring
        from = {{opacity: 0, transform: 'translateX(-2000px)', transition: '0.5s ease-in-out'}}
        to = {{opacity: 1, transform: 'translateX(0px)'}}
        >
            {props =>
                <div className="AlertCard" style={{...props,...AlertProps.Style}}>
                    <img src={AlertCardIcon} alt="Red circle with exclamation point inside it"/>
                <h1>
                    {AlertProps.AlertTitle}!
                </h1>   
            </div>
            }
        </Spring>
        
    )
}

/*
    * Table Card Component
    ? Card component responsible for outputting Table availability
*/
export const TableCardComponent  = props => 
{
        return (
            <div 
            className = 
            {
                props.isTaken ? 'TableCard TableCardTaken' : 'TableCard'
            }
            onClick = 
            {
                props.TableIsChosen
            }
            >
                {props.isTaken ? 
                    <h1
                    style={{marginBottom: '20px'}}
                    >
                        Occupied
                    </h1>
                    :
                    <span>
                        <h3
                        style={{marginBottom: '35px'}}
                        >
                            Table #{props.TableNumber}
                        </h3>
                        <h1>
                            Available 
                        </h1>
                        <p>
                            Seats: {props.SeatType}
                        </p>
                    </span>
                }
            </div>
        )
}

/*
    * Food Item Card Component
    ? 
*/
export const FoodItemCardComponent = props => 
{
        return (
            <div
                className={props.isRounded ? 'FoodItemCard FoodItemCardRounded' : 'FoodItemCard'}
                style = {{...props.Style}}
                onClick = {props.FoodCardFunction}
            >
                <h1>
                    {props.FoodName}
                </h1>
                <h2>
                    ₱{props.FoodPrice}
                </h2>
            </div>
        )
}

export const CheckoutFoodCard = props => {

    const RemoveCard = (Id) => {
        const UpdatedCheckoutList = props.CheckoutList.filter(Order => Order.Id !== Id);
        props.SetCheckoutList(UpdatedCheckoutList);
    }

    return (
        <div className = {props.isCheckoutFoodCardContrast ? 'CheckoutFoodCard Contrast' : 'CheckoutFoodCard'}>
            <img src={props.FoodImageSrc} alt={props.FoodImageAlt}/>
            <div className="CheckoutInfo">
                <h5>
                    {props.FoodName}
                </h5>
                <h6>
                    {props.FoodQty}
                </h6>
                <h6>
                    {props.FoodTotal}
                </h6>
            </div>
            <div className="ButtonContainer">
                    <Button
                        isButtonLink = {false}
                        ButtonContent = 'Remove'
                        isButtonContrast = {true}
                        ButtonFunction = {() => RemoveCard(props.id)}
                        Style = {{minHeight: '0', minWidth: '100px'}}
                    />
            </div>
        </div>
    )
}

export const ListCard = props => {

    return (
        <div className="ListCard"
            onClick = {props.CardFunction}
        >
            <h4>
                {props.CardContent}
            </h4>
        </div>
    )
}



export default AlertCardComponent;
