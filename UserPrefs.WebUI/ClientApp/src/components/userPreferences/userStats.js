"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var statsApi_1 = require("../../api/statsApi");
var colorValues_1 = require("../common/colorValues");
function UserStats() {
    var _a = react_1.useState([]), stats = _a[0], setStats = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        statsApi_1.default.getColorsByAge().then((function (s) {
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
            React.createElement("tbody", null, stats.map(function (s, index) {
                var _a = s.ageRange, maxAge = _a.maxAge, minAge = _a.minAge;
                var ageLabel = minAge + " - " + maxAge;
                if (index === 0) {
                    ageLabel = "< " + (maxAge + 1);
                }
                else if (index === stats.length - 1) {
                    ageLabel = "> " + (minAge + 1);
                }
                else {
                    ageLabel = minAge + " - " + maxAge;
                }
                return React.createElement("tr", { key: maxAge },
                    React.createElement("td", null, ageLabel),
                    React.createElement("td", null, colorValues_1.ColorsDictionary[s.colorStats[0]["hex"]]));
            })));
}
exports.default = UserStats;
//# sourceMappingURL=userStats.js.map