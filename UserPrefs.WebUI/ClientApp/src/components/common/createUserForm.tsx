import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    firstName: string,
    lastName: string,
    age: number
};
export default function CreateUserForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data, event) => {
        console.log(data);
        event.preventDefault();
    };

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
            <button
                type="submit">Submit</button>
        </form>
    )
}