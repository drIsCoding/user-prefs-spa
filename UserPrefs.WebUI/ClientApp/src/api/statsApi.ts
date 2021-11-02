import axios from 'axios'
import { AgeColorInfo } from '../types/ageColorInfo';
import { CreateUserForm } from '../types/forms';
import { User } from '../types/User'


export default class StatsApi {

    static getColorsByAge(): Promise<AgeColorInfo[]> {
        return axios.get("api/stats/colorsByAge").then((response) => response.data)
            .catch((error) => error);
    }
}