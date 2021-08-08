import { createContext, useState, useEffect } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {

    
    const [ CustomerSessionStatus, SetCustomerSessionStatus ] = useState(false);
    const [ CustomerName, SetCustomerName ] = useState(null);
    const [ CustomerDineType, SetCustomerDineType ] = useState(null);
    const [ CustomerCount, SetCustomerCount ] = useState(null);
    const [ CustomerAddress, SetCustomerAddress ] = useState(null);
    const [ CustomerContacts, SetCustomerContacts ] = useState(0);
    const [ CustomerTable, SetCustomerTable ] = useState(0);
    const [ CustomerCheckout, SetCustomerCheckout ] = useState([]);
    const [ Stage, SetStage ] = useState(1);
    const [ OrderSession, SetOrderSession ] = useState({});
    const [ PageCount, SetPageCount] = useState(1);
    const [ MenuList, SetMenuList ] = useState([]);
    const [ TableList, SetTableList ] = useState([]);

    const PushOrderSessionToDB = async({DineType, Count, Name, Address, Phone, Table, Checkout}) => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json")
            const Data = await fetch('/API/Customer/NewSession', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "DineType": DineType,
                    "Count": Count,
                    "Name": Name,
                    "Address": Address,
                    "Phone": Phone,
                    "Table": Table,
                    "Checkout": Checkout
                })
            });
            return Data;
        } catch (error) {
            console.trace(error);
        }
    }

    const FetchTableList = async() => {
        try {
            const Data = await fetch('/API/Customer/Tables', {
                method: 'GET'
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const FetchMenuList = async() => {
        try {
            const Data = await fetch('/API/Inventory/List', {
                method: 'GET'
        });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const _NextStage = () => {
        SetStage(Stage >= 2 ? 3 : Stage + 1);
    }

    const _NextPage = () => {
        SetPageCount(PageCount >= 6 ? 7 : PageCount + 1);
    }

    
    const _BackPage = (DecrementValue) => {
        SetPageCount(PageCount <= 1 ? 1 : PageCount - DecrementValue);
    }

    const CompleteSession = () => {
        sessionStorage.removeItem("CustomerSessionStatus");
        sessionStorage.removeItem("CustomerName");
        sessionStorage.removeItem("CustomerDineType");
        sessionStorage.removeItem("CustomerCount");
        sessionStorage.removeItem("CustomerAddress");
        sessionStorage.removeItem("CustomerContacts");
        sessionStorage.removeItem("CustomerTable");
        sessionStorage.removeItem("CustomerCheckout");
    }

    const InitializeSession = (SessionStatus) => {
        SetCustomerSessionStatus(SessionStatus);
        sessionStorage.setItem('CustomerSessionStatus', SessionStatus);
    }

    const SetName = Name => {
        SetCustomerName(Name);
        sessionStorage.setItem('CustomerName', Name);
    }

    const SetDineType = DineType => {
        SetCustomerDineType(DineType);
        sessionStorage.setItem('CustomerDineType', DineType);
    }

    const SetCount = Count => {
        SetCustomerCount(Count);
        sessionStorage.setItem('CustomerCount', Count);
    }

    const SetAddress = Address => {
        SetCustomerAddress(Address);
        sessionStorage.setItem('CustomerAddress', Address);
    }

    const SetContacts = Contacts => {
        SetCustomerContacts(Contacts);
        sessionStorage.setItem('CustomerContacts', Contacts);
    }

    const SetTable = Table => {
        SetCustomerTable(Table);
        sessionStorage.setItem('CustomerTable', Table);
    }  

    const SetCheckout = Checkout => {
        SetCustomerCheckout(Checkout);
        sessionStorage.setItem('CustomerCheckout', Checkout);    
    }

    useEffect(() => {

        // grabs the Menu list from the /API/Inventory/List endpoint
        FetchMenuList()
        .then(
            ({List}) => SetMenuList(List)
        )
        .catch(
            Error => console.trace(Error)
        );

        // grabs the Table list from the /API/Customer/Tables endpoint
        FetchTableList()
        .then(
            Data => SetTableList(Data)
        )
        .catch(
            Error => console.trace(Error)
        );
        
        

    }, []);

    return (
        <CustomerContext.Provider value = {
            { 
                CustomerSessionStatus,
                InitializeSession,
                CompleteSession,
                Stage,
                SetStage,
                SetPageCount,
                SetOrderSession,
                _NextStage,
                _NextPage, 
                _BackPage, 
                PageCount, 
                OrderSession,
                CustomerCheckout,
                CustomerName,
                CustomerDineType,
                CustomerCount, 
                CustomerAddress,
                CustomerContacts,
                CustomerTable,
                SetDineType, 
                SetCount, 
                SetName, 
                SetAddress, 
                SetContacts, 
                SetTable,  
                SetCustomerCheckout, 
                MenuList,
                TableList,
                PushOrderSessionToDB 
            }
        }>
            {props.children}
        </CustomerContext.Provider>
    )
};