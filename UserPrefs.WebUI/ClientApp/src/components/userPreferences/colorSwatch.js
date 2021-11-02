"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function ColorSwatch(props) {
    var styleObj = {
        backgroundColor: props.hex,
        width: "30px",
        height: "30px",
        outline: "none",
        borderRadius: "4px",
        display: "inline-block"
    };
    return React.createElement("div", { style: styleObj });
}
exports.default = ColorSwatch;
//# sourceMappingURL=colorSwatch.js.map