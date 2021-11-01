import * as React from 'react'
import { useEffect, useState } from "react"
import CreateUserForm from '../common/createUserForm'
import {
    Modal, ModalFooter,
    ModalHeader, ModalBody
} from 'reactstrap'

interface Props {
    visible: boolean
}

export default function CreateUserModal(props: Props) {
    return <Modal isOpen={props.visible} centered={true}>
        <ModalBody>
            <CreateUserForm />
        </ModalBody>
    </Modal>
}