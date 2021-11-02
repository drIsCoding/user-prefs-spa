"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectColorFilter = void 0;
var React = require("react");
var colorValues_1 = require("../common/colorValues");
function SelectColorFilter(_a) {
    var _b = _a.column, filterValue = _b.filterValue, setFilter = _b.setFilter;
    // Render a multi-select box
    return (React.createElement("select", { value: filterValue, onChange: function (e) {
            setFilter(e.target.value || undefined);
        } },
        React.createElement("option", { value: "" }, "All"),
        colorValues_1.ColorsArray.map(function (color, i) { return (React.createElement("option", { key: color.hex, value: color.hex }, color.name)); })));
}
exports.SelectColorFilter = SelectColorFilter;
//# sourceMappingURL=selectColorFilter.js.map