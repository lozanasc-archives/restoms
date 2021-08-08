import { createContext, useState, useEffect } from 'react';

export const WorkerContext = createContext();

export const WorkerProvider = (props) => {
    
    const authToken = localStorage.getItem('AccessToken');
    const user = localStorage.getItem('Username');

    const [ Data, SetData ] = useState({});
    const [ Inventory, SetInventory ] = useState([]);
    const [ ActiveSessions, SetActiveSessions ] = useState([]);
    const [ AllSessions, SetAllSessions ] = useState([]);
    const [ TrendingDish, SetTrendingDish ] = useState('');

    const GetData = async(User) => {
       try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Data = await fetch('/API/Worker/WorkerData', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({'Username': User})
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const GetInventory = async() => {
        try {
            const Data = await fetch('/API/Inventory/List', {
                method: 'GET'
        });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const GetSessions = async() => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);

            const Data = await fetch('/API/Worker/Sessions', {
                method: 'GET',
                headers: headers
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const GetActiveSessions = async() => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);

            const Data = await fetch('/API/Worker/SessionsActive', {
                method: 'GET',
                headers: headers
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEditInfoUsername = async(NewUsername, OldUsername, Id) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Worker/EditUsername', {
                method: 'POST',
                body: JSON.stringify({
                    "NewUsername": NewUsername,
                    "OldUsername": OldUsername,
                    "Id": Id
                }),
                headers: headers
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEditInfoName = async(NewFullname, OldFullname, Id) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Worker/EditFullname', {
                method: 'POST',
                body: JSON.stringify({
                    "NewFullname": NewFullname,
                    "OldFullname": OldFullname,
                    "Id": Id
                }),
                headers: headers
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEditInfoPassword = async(NewPassword, OldPassword, Id) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Worker/EditPassword', {
                method: 'POST',
                body: JSON.stringify({
                    "NewPassword": NewPassword,
                    "OldPassword": OldPassword,
                    "Id": Id
                }),
                headers: headers
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEditInfoContacts = async(NewContacts, OldContacts, Id) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Worker/EditContacts', {
                method: 'POST',
                body: JSON.stringify({
                    "NewContacts": NewContacts,
                    "OldContacts": OldContacts,
                    "Id": Id
                }),
                headers: headers
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEditInfoAddress = async(NewAddress, OldAddress, Id) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Worker/EditAddress', {
                method: 'POST',
                body: JSON.stringify({
                    'NewAddress': NewAddress,
                    'OldAddress': OldAddress,
                    'Id': Id
                }),
                headers: headers
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncAddItem = async(Name, Type, InitQty, InitPrice) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const Result = await fetch('/API/Inventory/New', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Name": Name,
                    "Type": Type,
                    "InitQty": InitQty,
                    "InitPrice": InitPrice
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncRemoveItem = async(Id) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const Result = await fetch('/API/Inventory/Remove', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Id": Id
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncDeleteAccount = async(Id) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Worker/Delete', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Id": Id
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEndSession = async(Id) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', `Bearer ${authToken}`);
            const Result = await fetch('/API/Worker/EndSession', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Id": Id
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncClearInventory = async() => {
        try {
            const Result = await fetch('/API/Inventory/Clear', {
                method: 'GET'
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncUpdateQty = async(NewQty, Id) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const Result = await fetch('/API/Inventory/QtyUpdate', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "NewQty": NewQty,
                    "Id": Id
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncGetQty = async(Id) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const Result = await fetch('/API/Inventory/ItemQty', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Id": Id
                })
            });

            return Result.json();    
        } catch (error) {
            console.trace(error);
        }
    };

    const GetTrendingDish = async() => {
        try {
            const Result = await fetch('/API/Inventory/TrendingDish', {
                method: 'GET'
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    useEffect(() => {
        // Fetches inventory list
        GetInventory()
        .then(({ List }) => SetInventory(List))
        .catch(err => console.trace(err));
        
        GetTrendingDish()
        .then(TrendingDish => SetTrendingDish(TrendingDish[0].name))
        .catch(err => console.log(err));

        // Fetches admin agent data
        GetData(user)
        .then(({ Data }) => SetData(Data[0]))
        .catch(err => console.trace(err));

        // Fetches all sessions, active or not
        GetSessions()
        .then(({ Sessions }) => SetAllSessions(Sessions))
        .catch(err => console.trace(err));
        
        // Fetches active sessions
        GetActiveSessions()
        .then(({ ActiveSessions }) => SetActiveSessions(ActiveSessions))
        .catch(err => console.trace(err));
    }, []);

    return (
        <WorkerContext.Provider
            value = {
                {
                    Data,
                    SetActiveSessions,
                    SetAllSessions,
                    ActiveSessions,
                    AllSessions,
                    Inventory,
                    AsyncUpdateQty,
                    AsyncAddItem,
                    AsyncRemoveItem,
                    AsyncEndSession,
                    AsyncClearInventory,
                    AsyncEditInfoUsername,
                    AsyncEditInfoName,
                    AsyncEditInfoPassword,
                    AsyncEditInfoAddress,
                    AsyncEditInfoContacts,
                    AsyncDeleteAccount,
                    AsyncGetQty,
                    TrendingDish
                }
            }
        >
            {props.children}
        </WorkerContext.Provider>
    )
}