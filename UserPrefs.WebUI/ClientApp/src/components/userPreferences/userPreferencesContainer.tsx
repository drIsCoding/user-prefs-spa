import * as React from 'react'
import { useEffect, useState } from "react"
import { User } from '../../types/user'
import UsersApi from '../../api/usersApi'
import { Button } from 'reactstrap'
import CreateUserModal from './createUserModal'
import Table from './usersTable'
import UserStats from './userStats'


export default function UserPreferencesContainer() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User[]>();
    const [showModal, setShowModal] = useState(false);


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
        : <Table data={userData} />

    return (
        <div>
            <h1 id="tabelLabel">User Preferences</h1>
            <p>This component is getting user prefs data</p>
            <Button onClick={() => setShowModal(true)}>Enter New User</Button>
            <CreateUserModal visible={showModal} toggle={() => setShowModal(false)}/>
            <UserStats/>
            {contents}
        </div>
     )
}
