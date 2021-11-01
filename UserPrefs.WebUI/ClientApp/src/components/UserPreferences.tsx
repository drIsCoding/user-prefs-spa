import React, { useState, useEffect } from 'react'
import { User } from '../types/User'
import UsersApi from '../api/usersApi'
import { Button } from 'reactstrap'
import CreateUserModal from './createUserModal'


export default function UserPreferences() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User[]>();
    const [showModal, setShowModal] = useState(false);

    const renderUserData = (userData: User[]) => {
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
                        <tr key={u.id}>
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
        UsersApi.getAllUsers().then(
            (u => {
                setUserData(u);
                setLoading(false);
            })
        );
    }, [])

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderUserData(userData);

    return (
        <div>
            <h1 id="tabelLabel">User Preferences</h1>
            <p>This component is getting user prefs data</p>
            <Button onClick={() => setShowModal(true)}>Enter New User</Button>
            <CreateUserModal visible={showModal}/>

            {contents}
        </div>
     )
}
