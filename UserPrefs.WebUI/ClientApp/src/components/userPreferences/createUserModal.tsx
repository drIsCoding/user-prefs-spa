import * as React from 'react'
import { useEffect, useState } from "react"
import CreateUserForm from '../common/createUserForm'
import {
    Modal, ModalFooter,
    ModalHeader, ModalBody
} from 'reactstrap'

interface Props {
    visible: boolean,
    toggle: () => void
}

export default function CreateUserModal(props: Props) {
    return <Modal toggle={props.toggle} isOpen={props.visible} centered={true}>
        <ModalHeader toggle={props.toggle}>Create New User</ModalHeader>
        <ModalBody>
            <CreateUserForm />
        </ModalBody>
    </Modal>
}