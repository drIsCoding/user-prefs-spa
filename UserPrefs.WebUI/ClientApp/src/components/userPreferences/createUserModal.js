"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createUserForm_1 = require("../common/createUserForm");
var reactstrap_1 = require("reactstrap");
function CreateUserModal(props) {
    return React.createElement(reactstrap_1.Modal, { isOpen: props.visible, centered: true },
        React.createElement(reactstrap_1.ModalBody, null,
            React.createElement(createUserForm_1.default, null)));
}
exports.default = CreateUserModal;
//# sourceMappingURL=createUserModal.js.map