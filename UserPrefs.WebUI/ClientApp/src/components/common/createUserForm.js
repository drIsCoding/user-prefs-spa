"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
;
function CreateUserForm() {
    var _a = react_hook_form_1.useForm(), register = _a.register, setValue = _a.setValue, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var onSubmit = function (data, event) {
        console.log(data);
        event.preventDefault();
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement("div", { className: "form-group" },
            React.createElement("label", null, "First Name"),
            React.createElement("input", __assign({ className: "form-control " + (errors.firstName ? 'is-invalid' : ''), id: "firstName", name: "firstName" }, register("firstName", { required: true }))),
            errors.firstName && React.createElement("div", { className: "invalid-feedback" }, "First Name is required.")),
        React.createElement("div", { className: "form-group" },
            React.createElement("label", null, "Last Name"),
            React.createElement("input", __assign({ className: "form-control " + (errors.lastName ? 'is-invalid' : ''), name: "lastName" }, register("lastName", { required: true }))),
            errors.lastName && React.createElement("div", { className: "invalid-feedback" }, "Last Name is required.")),
        React.createElement("button", { type: "submit" }, "Submit")));
}
exports.default = CreateUserForm;
//# sourceMappingURL=createUserForm.js.map