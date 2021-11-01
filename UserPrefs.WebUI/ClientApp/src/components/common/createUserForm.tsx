import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CirclePicker } from 'react-color'
import PreferencesApi from "../../api/preferencesApi";

interface FormData {
    firstName: string,
    lastName: string,
    age: number,
    chosenColor: string,
    displayColor: string
};
export default function CreateUserForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [chosenColor, setChosencColor] = useState("");
    const [chosenDisplayColor, setChosenDisplayColor] = useState("");
    const [hexValues, setHexValues] = useState<string[]>([]);

    //for fast color name lookup
    const [colorsDict, setColorsDict] = useState({});

    const onSubmit = (data, event) => {
        console.log(data);
        event.preventDefault();
    };

    const handleColorChange = (color, event) => {
        console.log(color, event);
        setChosencColor(color.hex);
        setChosenDisplayColor(colorsDict[color.hex]);
    }

    useEffect(() => {
        PreferencesApi.getAllColors().then(
            (colors => {


                //takeoff on this: 
                // https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
                const colorsObj = colors.reduce((obj, item) => {
                    return {
                        ...obj,
                        [item["hex"]]: item.name,
                    };
                }, {});

                setColorsDict(colorsObj);

                const hexArray = colors.map(c => c.hex);
                setHexValues(hexArray);
            })
        );
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>First Name</label>
                <input className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName" {...register("firstName", { required: true })} />
                {errors.firstName && <div className="invalid-feedback">First Name is required.</div>}
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    name="lastName" {...register("lastName", { required: true })} />
                {errors.lastName && <div className="invalid-feedback">Last Name is required.</div>}
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" min="1" max="120"
                            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                            name="age" {...register("age", { required: true })} />
                        {errors.age && <div className="invalid-feedback">Age is required.</div>}
                    </div>
                </div>
                <div className="col-sm">
                    <label>Choose color preference</label>
                    <span>Chosen color:</span>
                    <input type="text" readOnly className="form-control-plaintext"
                        id="displayColor" name="displayColor" value={chosenDisplayColor}
                        {...register("displayColor", { required: true })}
                    />
                    {errors.displayColor && <div className="invalid-feedback">You must pick a color</div>}
                    <input type="hidden" name="chosenColor" value={chosenColor}
                        {...register("chosenColor", { required: true })} />

                    <CirclePicker width="210px" onChange={handleColorChange}
                        colors={hexValues} />
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}