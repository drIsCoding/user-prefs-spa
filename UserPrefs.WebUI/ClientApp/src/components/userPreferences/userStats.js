"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var usersApi_1 = require("../../api/usersApi");
function UserStats() {
    var _a = react_1.useState([]), stats = _a[0], setStats = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        usersApi_1.default.getStats().then((function (s) {
            console.log(s);
            setStats(s);
            setLoading(false);
        }));
    }, []);
    return loading ? React.createElement("p", null,
        React.createElement("em", null, "Loading..."))
        : React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Age"),
                    React.createElement("th", null, "Most Popular Color"))),
            React.createElement("tbody", null, stats.map(function (s) {
                return React.createElement("tr", { key: s.maxAge },
                    React.createElement("td", null, s.maxAge),
                    React.createElement("td", null, s.colorStats[0]["hex"]));
            })));
}
exports.default = UserStats;
//# sourceMappingURL=userStats.js.map