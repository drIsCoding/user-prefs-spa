"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var PreferencesApi = /** @class */ (function () {
    function PreferencesApi() {
    }
    PreferencesApi.getAllColors = function () {
        return axios_1.default.get("api/preferences/colors").then(function (response) { return response.data; })
            .catch(function (error) { return error; });
    };
    return PreferencesApi;
}());
exports.default = PreferencesApi;
//# sourceMappingURL=preferencesApi.js.map