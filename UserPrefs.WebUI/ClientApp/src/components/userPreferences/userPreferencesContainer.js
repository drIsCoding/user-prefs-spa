"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var usersApi_1 = require("../../api/usersApi");
var createUserModal_1 = require("./createUserModal");
var usersTable_1 = require("./usersTable");
var reactstrap_1 = require("reactstrap");
function UserPreferencesContainer() {
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(), userData = _b[0], setUserData = _b[1];
    var _c = react_1.useState(false), showModal = _c[0], setShowModal = _c[1];
    var _d = react_1.useState(false), showSuccess = _d[0], setShowSuccess = _d[1];
    react_1.useEffect(function () {
        getUsers();
    }, []);
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            setShowSuccess(false);
        }, 5000);
        return function () { return clearTimeout(timer); };
    }, [showSuccess]);
    var getUsers = function () {
        usersApi_1.default.getAllUsers().then((function (u) {
            setUserData(u);
            setLoading(false);
        }));
    };
    var handleNewUserCreation = function (formData) {
        console.log(formData);
        getUsers();
        setShowSuccess(true);
    };
    var contents = loading
        ? React.createElement("p", null,
            React.createElement("em", null, "Loading..."))
        : React.createElement(usersTable_1.default, { data: userData });
    return (React.createElement("div", null,
        React.createElement("h1", null, "All Users"),
        React.createElement("p", null, "A list of all the users and their color preferences"),
        React.createElement(createUserModal_1.default, { visible: showModal, toggle: function () { return setShowModal(false); }, handleCreateSuccess: handleNewUserCreation }),
        React.createElement("button", { className: "btn btn-primary float-right mb-4", onClick: function () { return setShowModal(true); } }, "Create New User"),
        showSuccess && React.createElement(reactstrap_1.Alert, { fade: true }, "Success!"),
        contents));
}
exports.default = UserPreferencesContainer;
//# sourceMappingURL=userPreferencesContainer.js.map