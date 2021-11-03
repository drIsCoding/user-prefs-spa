import * as React from 'react'
import { useState } from 'react';
import UsersApi from '../../api/usersApi';
import { CreateUserForm } from '../../types/forms';
import CreateUserFormComponent from '../common/createUserFormComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

export default function UserEntryContainer() {

    const [showSuccess, setShowSuccess] = useState(false);

    const submitUser = (formData: CreateUserForm) => {
        console.log("submitting form!");
        console.log(formData);
        UsersApi.createUser(formData);
        setShowSuccess(true);
    }

    const formId = "createUserForm";

    return <>
        {showSuccess ?
            <div className="text-center mt-5">
                <p className="display-4 mb-4">Your information was submitted</p>
                <FontAwesomeIcon icon={faClipboardCheck} size="6x"/>
            </div>
            : <>
                <h1>Welcome New User!</h1>
                <p>Please enter your information below</p>
                <CreateUserFormComponent formId={formId} onSubmit={submitUser} />
                <button className="btn btn-primary" form={formId} type="submit">Submit</button>
            </>
        }
    </>
}