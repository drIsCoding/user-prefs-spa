import axios from 'axios'
import { AgeColorStat } from '../types/ageColorStat';
import { CreateUserForm } from '../types/forms';
import { User } from '../types/User'


export default class UsersApi {

    static getAllUsers(): Promise<User[]>  {
        return axios.get<User[]>("api/users").then((response) => response.data)
            .catch((error) => error);
    }


    static createUser(form: CreateUserForm) {
        return axios.post("api/users/create", JSON.stringify(form), {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.data)
            .catch((error) => error);
    }

    static getStats(): Promise<AgeColorStat[]> {
        return axios.get("api/users/stats").then((response) => response.data)
            .catch((error) => error);
    }
}