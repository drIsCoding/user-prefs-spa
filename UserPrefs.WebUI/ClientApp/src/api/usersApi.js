"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var UsersApi = /** @class */ (function () {
    function UsersApi() {
    }
    UsersApi.getAllUsers = function () {
        return axios_1.default.get("api/users").then(function (response) { return response.data; })
            .catch(function (error) { return error; });
    };
    UsersApi.createUser = function (form) {
        return axios_1.default.post("api/users/create", JSON.stringify(form), {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(function (response) { return response.data; })
            .catch(function (error) { return error; });
    };
    return UsersApi;
}());
exports.default = UsersApi;
//# sourceMappingURL=usersApi.js.map