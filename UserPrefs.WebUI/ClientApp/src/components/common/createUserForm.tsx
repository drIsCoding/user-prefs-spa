import React, { useEffect } from "react";
import PreferencesApi from "../../api/preferencesApi";

export default function CreateUserForm() {

    useEffect(() => {
        PreferencesApi.getAllColors().then(
            (c => {
                console.log(c);
            })
        );
    }, [])

    return <span>Here be colors!</span>
}