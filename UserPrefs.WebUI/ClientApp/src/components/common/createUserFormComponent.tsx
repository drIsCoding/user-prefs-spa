import * as React from "react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CirclePicker } from 'react-color'
import { CreateUserForm } from "../../types/forms";
import { ColorsDictionary, HexArray, ColorsArray } from "./colorValues"

interface FormData {
    firstName: string,
    lastName: string,
    age: string,
    colorHex: string,
    displayColor: string
};

interface Props {
    formId: string,
    onSubmit: (formData: CreateUserForm) => void
}

export default function CreateUserFormComponent(props: Props) {
    const { register, control, setValue, handleSubmit, formState} = useForm<FormData>();
    const { errors } = formState;

    const onSubmit = (data: FormData, event) => {
        event.preventDefault();
        const userForm: CreateUserForm = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: parseInt(data.age),
            colorHex: data.colorHex
        }
        props.onSubmit(userForm);
    };

    return (
        <form id={props.formId} onSubmit={handleSubmit(onSubmit)}>
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
                            name="age" {...register("age", { required: true, min: 1, max:120 })} />
                         {errors.age && errors.age.type === "required" && <div className="invalid-feedback">Age is required.</div>}
                        {errors.age && errors.age.type === "min" && <div className="invalid-feedback">Age must be at least 1.</div>}
                        {errors.age && errors.age.type === "max" &&  <div className="invalid-feedback">Age must be no more than 120.</div>}
                        {errors.age && <div className="invalid-feedback">Age is required.</div>}
                    </div>
                </div>
                <div className="col-sm">
                    <label>Choose color preference</label>

                    <Controller
                        control={control}
                        name="colorHex"
                        render={({ field: { value, onChange } }) => {
                            return (
                                <select className={`mb-2 form-control ${errors.colorHex ? 'is-invalid' : ''}`}
                                    name="colorHex"
                                    value={value}
                                    onChange={onChange}
                                    {...register("colorHex", { required: true })}>
                                    <option value="">None</option>
                                    {ColorsArray.map((color, i) => (
                                        <option key={color.hex} value={color.hex}>
                                            {color.name}
                                        </option>
                                    ))}
                                </select>
                            )
                        }}
                        rules= {{ required: true }}
                    />
                    {errors.colorHex && <div className="invalid-feedback">You must choose a color.</div>}


                    <CirclePicker width="100%" onChange={(color) =>
                        setValue("colorHex", color.hex, {
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true
                        })}
                        colors={HexArray} />
                </div>
            </div>
        </form>
    )
}