import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CirclePicker } from 'react-color'

interface FormData {
    firstName: string,
    lastName: string,
    age: number
};
export default function CreateUserForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [chosenColor, setChosencColor] = useState("None");

    const onSubmit = (data, event) => {
        console.log(data);
        event.preventDefault();
    };

    const handleColorChange = (color, event) => {
        console.log(color, event);
        setChosencColor(color.hex);
    }

    const handleColorHover = (color, event) => {
        //console.log(color, event);
    }

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
                    <input type="text" readOnly className="form-control-plaintext"
                        id="chosenColor" name="chosenColor" value={chosenColor}/>
                    <CirclePicker width="210px" onChange={handleColorChange} onSwatchHover={handleColorHover}
                        colors={["#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#e91e63", "#9c27b0",
                            "#673ab7", "#3f51b5", "#2196f3", "#00bcd4", "#009688",
                            "#4caf50", "#795548", "#607d8b", "#000000"]}  />
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}