"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createUserFormComponent_1 = require("../common/createUserFormComponent");
var reactstrap_1 = require("reactstrap");
var usersApi_1 = require("../../api/usersApi");
function CreateUserModal(props) {
    var submitUser = function (formData) {
        console.log("submitting form!");
        console.log(formData);
        usersApi_1.default.createUser(formData);
        props.handleCreateSuccess(formData);
        props.toggle();
    };
    var formId = "createUserForm";
    return React.createElement(reactstrap_1.Modal, { toggle: props.toggle, isOpen: props.visible, centered: true },
        React.createElement(reactstrap_1.ModalHeader, { toggle: props.toggle }, "Create New User"),
        React.createElement(reactstrap_1.ModalBody, null,
            React.createElement(createUserFormComponent_1.default, { formId: formId, onSubmit: submitUser })),
        React.createElement(reactstrap_1.ModalFooter, null,
            React.createElement("button", { className: "btn btn-secondary", onClick: function () { return props.toggle(); }, type: "submit" }, "Cancel"),
            React.createElement("button", { className: "btn btn-primary", form: formId, type: "submit" }, "Create User")));
}
exports.default = CreateUserModal;
//# sourceMappingURL=createUserModal.js.map