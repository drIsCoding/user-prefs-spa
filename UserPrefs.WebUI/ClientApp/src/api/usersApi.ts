import axios from 'axios'
import { CreateUserForm } from '../types/forms';
import { User } from '../types/User'


export default class UsersApi {

    static getAllUsers() {
        return axios.get<User[]>("api/users").then((response) => response.data)
            .catch((error) => error);
    }


    static createUser(form: CreateUserForm) {
        console.log(form);
        console.log(JSON.stringify(form));
        return axios.post("api/users/create", JSON.stringify(form), {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.data)
            .catch((error) => error);
    }
}