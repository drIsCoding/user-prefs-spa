import * as React from "react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CirclePicker } from 'react-color'
import UsersApi from "../../api/usersApi";
import { CreateUserForm } from "../../types/forms";
import { ColorsDictionary, HexArray, ColorsArray } from "./colorValues"

interface FormData {
    firstName: string,
    lastName: string,
    age: string,
    colorHex: string,
    displayColor: string
};
export default function CreateUserForm() {
    const { register, control, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [chosenColor, setChosenColor] = useState("");


    const onSubmit = (data: FormData, event) => {
        console.log("submitting form!");
        console.log(data);
        event.preventDefault();
        const userForm: CreateUserForm = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: parseInt(data.age),
            colorHex: chosenColor
        }
        UsersApi.createUser(userForm);
    };

    const handlePickerColorChange = (color) => {
        setChosenColor(color.hex);
    }

    const handleSelectColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setChosenColor(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="alert alert-success" role="alert">
                User successfully created!
            </div>
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
                    <select className={`mb-2 form-control ${errors.colorHex ? 'is-invalid' : ''}`}
                        name="colorHex"
                        value={chosenColor}
                        onChange={(e) => { console.log(e); setChosenColor(e.target.value) }}
                        {...register("colorHex", { required: true })}>
                        <option value="">None</option>
                        {ColorsArray.map((color, i) => (
                            <option key={color.hex} value={color.hex}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                    {errors.colorHex && <div className="invalid-feedback">You must choose a color.</div>}

                    <CirclePicker width="210px" onChange={(color) => setChosenColor(color.hex)}
                        color={chosenColor}
                        colors={HexArray} />
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}