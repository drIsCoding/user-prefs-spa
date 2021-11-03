import * as React from 'react'
import { useEffect, useState } from "react"
import { User } from '../../types/user'
import UsersApi from '../../api/usersApi'
import { Button } from 'reactstrap'
import CreateUserModal from './createUserModal'
import UsersTable from './usersTable'
import { CreateUserForm } from '../../types/forms'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'


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
                setUserData(u);
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
        : <UsersTable data={userData} />

    return (
        <div>
            <h1>All Users</h1>

            <button className="btn btn-primary float-right mb-4" onClick={() => setShowModal(true)}>Create New User</button>
            <p>A list of all the users and their color preferences (<Link to="user-stats">see user statistics</Link>)</p>

            <CreateUserModal visible={showModal} toggle={() => setShowModal(false)} handleCreateSuccess={handleNewUserCreation}/>
            
            {showSuccess && <Alert fade={true}>Success!</Alert>}
            
            {contents}
        </div>
     )
}
