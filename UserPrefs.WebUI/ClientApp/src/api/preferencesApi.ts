import axios from 'axios'
import { Color } from '../types/color';


export default class PreferencesApi {

    static getAllColors(): Promise<Color[]> {
        return axios.get<Color[]>("api/preferences/colors").then((response) => response.data)
            .catch((error) => error);
    }
}