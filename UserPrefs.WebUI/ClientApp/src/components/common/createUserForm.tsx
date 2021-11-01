import React, { useEffect, useState } from "react";
import PreferencesApi from "../../api/preferencesApi";
import {Label, Input} from 'reactstrap'
import { Color } from "../../types/color";
import { GithubPicker } from 'react-color'

export default function CreateUserForm() {
    const [colors, setColors] = useState<Color[]>([]);

    useEffect(() => {
        PreferencesApi.getAllColors().then(
            (c => {
                setColors(c);
            })
        );
    }, [])

    return <>

        <GithubPicker colors={colors.map(c => c.hex)} onSwatchHover={(c, e) => console.log(c,e)}/>
       
        </>
}