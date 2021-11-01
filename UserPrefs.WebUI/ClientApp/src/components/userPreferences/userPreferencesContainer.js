"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var usersApi_1 = require("../../api/usersApi");
var reactstrap_1 = require("reactstrap");
var createUserModal_1 = require("./createUserModal");
var usersTable_1 = require("./usersTable");
function UserPreferencesContainer() {
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(), userData = _b[0], setUserData = _b[1];
    var _c = react_1.useState(false), showModal = _c[0], setShowModal = _c[1];
    var renderUserData = function (userData) {
        return (React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "First Name"),
                    React.createElement("th", null, "Last Name"),
                    React.createElement("th", null, "Age"),
                    React.createElement("th", null, "Color ID"))),
            React.createElement("tbody", null, userData.map(function (u) {
                return React.createElement("tr", { key: u.id },
                    React.createElement("td", null, u.firstName),
                    React.createElement("td", null, u.lastName),
                    React.createElement("td", null, u.age),
                    React.createElement("td", null, u.colorHex));
            }))));
    };
    react_1.useEffect(function () {
        usersApi_1.default.getAllUsers().then((function (u) {
            setUserData(u);
            setLoading(false);
        }));
    }, []);
    var contents = loading
        ? React.createElement("p", null,
            React.createElement("em", null, "Loading..."))
        : React.createElement(usersTable_1.default, { data: userData });
    return (React.createElement("div", null,
        React.createElement("h1", { id: "tabelLabel" }, "User Preferences"),
        React.createElement("p", null, "This component is getting user prefs data"),
        React.createElement(reactstrap_1.Button, { onClick: function () { return setShowModal(true); } }, "Enter New User"),
        React.createElement(createUserModal_1.default, { visible: showModal }),
        contents));
}
exports.default = UserPreferencesContainer;
//# sourceMappingURL=userPreferencesContainer.js.map