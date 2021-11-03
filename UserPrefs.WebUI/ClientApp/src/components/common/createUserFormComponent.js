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
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_color_1 = require("react-color");
var colorValues_1 = require("./colorValues");
;
function CreateUserFormComponent(props) {
    var _a = react_hook_form_1.useForm(), register = _a.register, control = _a.control, setValue = _a.setValue, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var _b = react_1.useState(""), chosenColor = _b[0], setChosenColor = _b[1];
    var onSubmit = function (data, event) {
        event.preventDefault();
        var userForm = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: parseInt(data.age),
            colorHex: chosenColor
        };
        props.onSubmit(userForm);
    };
    var handlePickerColorChange = function (color) {
        setChosenColor(color.hex);
    };
    var handleSelectColorChange = function (e) {
        console.log(e.target.value);
        setChosenColor(e.target.value);
    };
    return (React.createElement("form", { id: props.formId, onSubmit: handleSubmit(onSubmit) },
        React.createElement("div", { className: "form-group" },
            React.createElement("label", null, "First Name"),
            React.createElement("input", __assign({ className: "form-control " + (errors.firstName ? 'is-invalid' : ''), id: "firstName", name: "firstName" }, register("firstName", { required: true }))),
            errors.firstName && React.createElement("div", { className: "invalid-feedback" }, "First Name is required.")),
        React.createElement("div", { className: "form-group" },
            React.createElement("label", null, "Last Name"),
            React.createElement("input", __assign({ className: "form-control " + (errors.lastName ? 'is-invalid' : ''), name: "lastName" }, register("lastName", { required: true }))),
            errors.lastName && React.createElement("div", { className: "invalid-feedback" }, "Last Name is required.")),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-sm" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Age"),
                    React.createElement("input", __assign({ type: "number", min: "1", max: "120", className: "form-control " + (errors.age ? 'is-invalid' : ''), name: "age" }, register("age", { required: true }))),
                    errors.age && React.createElement("div", { className: "invalid-feedback" }, "Age is required."))),
            React.createElement("div", { className: "col-sm" },
                React.createElement("label", null, "Choose color preference"),
                React.createElement("select", __assign({ className: "mb-2 form-control " + (errors.colorHex ? 'is-invalid' : ''), name: "colorHex", value: chosenColor, onChange: function (e) { console.log(e); setChosenColor(e.target.value); } }, register("colorHex", { required: true })),
                    React.createElement("option", { value: "" }, "None"),
                    colorValues_1.ColorsArray.map(function (color, i) { return (React.createElement("option", { key: color.hex, value: color.hex }, color.name)); })),
                errors.colorHex && React.createElement("div", { className: "invalid-feedback" }, "You must choose a color."),
                React.createElement(react_color_1.CirclePicker, { width: "210px", onChange: function (color) { return setChosenColor(color.hex); }, color: chosenColor, colors: colorValues_1.HexArray })))));
}
exports.default = CreateUserFormComponent;
//# sourceMappingURL=createUserFormComponent.js.map