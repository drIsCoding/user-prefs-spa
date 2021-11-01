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
var preferencesApi_1 = require("../../api/preferencesApi");
var usersApi_1 = require("../../api/usersApi");
;
function CreateUserForm() {
    var _a = react_hook_form_1.useForm(), register = _a.register, setValue = _a.setValue, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var _b = react_1.useState(""), chosenColor = _b[0], setChosencColor = _b[1];
    var _c = react_1.useState(""), chosenDisplayColor = _c[0], setChosenDisplayColor = _c[1];
    var _d = react_1.useState([]), hexValues = _d[0], setHexValues = _d[1];
    //for fast color name lookup
    var _e = react_1.useState({}), colorsDict = _e[0], setColorsDict = _e[1];
    var onSubmit = function (data, event) {
        console.log("submitting form!");
        console.log(data);
        event.preventDefault();
        var userForm = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: parseInt(data.age),
            colorHex: chosenColor
        };
        usersApi_1.default.createUser(userForm);
    };
    var handleColorChange = function (color, event) {
        console.log(color, event);
        setChosencColor(color.hex);
        setChosenDisplayColor(colorsDict[color.hex]);
    };
    react_1.useEffect(function () {
        preferencesApi_1.default.getAllColors().then((function (colors) {
            //takeoff on this: 
            // https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
            var colorsObj = colors.reduce(function (obj, item) {
                var _a;
                return __assign(__assign({}, obj), (_a = {}, _a[item["hex"]] = item.name, _a));
            }, {});
            setColorsDict(colorsObj);
            var hexArray = colors.map(function (c) { return c.hex; });
            setHexValues(hexArray);
        }));
    }, []);
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
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
                React.createElement("span", null, "Chosen color:"),
                React.createElement("input", { type: "text", readOnly: true, className: "form-control-plaintext", id: "displayColor", name: "displayColor", value: chosenDisplayColor }),
                React.createElement("input", __assign({ type: "hidden", name: "colorHex", value: chosenColor }, register("colorHex"))),
                React.createElement(react_color_1.CirclePicker, { width: "210px", onChange: handleColorChange, colors: hexValues }))),
        React.createElement("button", { className: "btn btn-primary", type: "submit" }, "Submit")));
}
exports.default = CreateUserForm;
//# sourceMappingURL=createUserForm.js.map