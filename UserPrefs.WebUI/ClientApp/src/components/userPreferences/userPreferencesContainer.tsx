import * as React from 'react'
import { useEffect, useMemo, useState } from "react"
import { User } from '../../types/user'
import UsersApi from '../../api/usersApi'
import { Button } from 'reactstrap'
import CreateUserModal from './createUserModal'
import Table from './usersTable'
import UserStats from './userStats'
import { CreateUserForm } from '../../types/forms'
import { Alert } from 'reactstrap'


export default function UserPreferencesContainer() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User[]>();
    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [showSuccess]);

    const getUsers = () => {
        UsersApi.getAllUsers().then(
            (u => {
                //const columns= useMemo(() => columnSet, [columnSet]);
                const memoData = useMemo(() => u, [u]);
                setUserData(memoData);
                console.log("setting user data");
                setLoading(false);
            })
        );
    }

    const handleNewUserCreation = (formData: CreateUserForm) => {
        console.log(formData);
        getUsers();
        setShowSuccess(true);
    }

    let contents = loading
        ? <p><em>Loading...</em></p>
        : <Table data={userData} />

    return (
        <div>
            <h1>All Users</h1>
            <p>A list of all the users and their color preferences</p>


            <CreateUserModal visible={showModal} toggle={() => setShowModal(false)} handleCreateSuccess={handleNewUserCreation}/>
            {/*<UserStats />*/}

            <button className="btn btn-primary float-right mb-4" onClick={() => setShowModal(true)}>Create New User</button>
            {showSuccess && <Alert fade={true}>Success!</Alert>}

            {contents}
        </div>
     )
}
