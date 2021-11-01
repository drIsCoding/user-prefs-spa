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
                    Hi!
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}