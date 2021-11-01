import React, { useState, useEffect } from 'react'


export default function UserPreferences() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(true);

    const renderUserData = (userData) => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Color ID</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(u =>
                        <tr key={u.ID}>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.age}</td>
                            <td>{u.colorID}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }


    useEffect(() => {
        async function fetchUserData() {
            let response = await fetch('api/users/preferences')
            response = await response.json()
            setUserData(response);
            setLoading(false);
            console.log(response);
        }

        console.log("you are here!");

        fetchUserData();
    }, [])

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderUserData(userData);

    return (
        <div>
            <h1 id="tabelLabel" >User Preferences</h1>
            <p>This component is getting user prefs data</p>
            {contents}
        </div>
     )
}
