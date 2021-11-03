"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var usersApi_1 = require("../../api/usersApi");
var createUserFormComponent_1 = require("../common/createUserFormComponent");
function UserEntryContainer() {
    var submitUser = function (formData) {
        console.log("submitting form!");
        console.log(formData);
        usersApi_1.default.createUser(formData);
    };
    var formId = "createUserForm";
    return React.createElement(createUserFormComponent_1.default, { formId: formId, onSubmit: submitUser });
}
exports.default = UserEntryContainer;
//# sourceMappingURL=userEntryContainer.js.map