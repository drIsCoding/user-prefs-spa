import * as React from 'react'
import UsersApi from '../../api/usersApi';
import { CreateUserForm } from '../../types/forms';
import CreateUserFormComponent from '../common/createUserFormComponent'

export default function UserEntryContainer() {

    const submitUser = (formData: CreateUserForm) => {
        console.log("submitting form!");
        console.log(formData);
        UsersApi.createUser(formData);
    }

    const formId = "createUserForm";

    return <>
        <CreateUserFormComponent formId={formId} onSubmit={submitUser} />
        <button className="btn btn-primary" form={formId} type="submit">Submit User Information</button>
    </>
}