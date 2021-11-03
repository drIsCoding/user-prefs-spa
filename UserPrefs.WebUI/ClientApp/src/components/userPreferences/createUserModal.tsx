import * as React from 'react'
import { useEffect, useState } from "react"
import CreateUserFormComponent from '../common/createUserFormComponent'
import {
    Modal, ModalFooter,
    ModalHeader, ModalBody
} from 'reactstrap'
import { CreateUserForm } from '../../types/forms'
import UsersApi from '../../api/usersApi'

interface Props {
    visible: boolean,
    toggle: () => void
}

export default function CreateUserModal(props: Props) {

    const submitUser = (formData: CreateUserForm) => {
        console.log("submitting form!");
        console.log(formData);
        UsersApi.createUser(formData);
    }

    const formId = "createUserForm";

    return <Modal toggle={props.toggle} isOpen={props.visible} centered={true}>
        <ModalHeader toggle={props.toggle}>Create New User</ModalHeader>
        <ModalBody>
            <CreateUserFormComponent formId={formId} onSubmit={submitUser} />
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-secondary" onClick={() => props.toggle()} type="submit">Cancel</button>
            <button className="btn btn-primary" form={formId} type="submit">Create User</button>
        </ModalFooter>
    </Modal>
}