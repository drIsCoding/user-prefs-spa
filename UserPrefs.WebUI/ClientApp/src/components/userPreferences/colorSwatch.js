"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function ColorSwatch(props) {
    var styleObj = {
        backgroundColor: props.hex,
        width: "20px",
        height: "20px",
        outline: "none",
        borderRadius: "4px",
        display: "inline-block",
        verticalAlign: "text-bottom",
        marginRight: "5px"
    };
    return React.createElement("div", { style: styleObj });
}
exports.default = ColorSwatch;
//# sourceMappingURL=colorSwatch.js.map