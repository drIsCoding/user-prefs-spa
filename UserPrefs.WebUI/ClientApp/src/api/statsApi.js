"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var StatsApi = /** @class */ (function () {
    function StatsApi() {
    }
    StatsApi.getColorsByAge = function () {
        return axios_1.default.get("api/stats/colorsByAge").then(function (response) { return response.data; })
            .catch(function (error) { return error; });
    };
    return StatsApi;
}());
exports.default = StatsApi;
//# sourceMappingURL=statsApi.js.map