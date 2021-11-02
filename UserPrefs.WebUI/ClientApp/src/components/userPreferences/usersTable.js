"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var tableFilters_1 = require("./tableFilters");
var selectColorFilter_1 = require("./selectColorFilter");
var colorSwatch_1 = require("./colorSwatch");
var colorValues_1 = require("../common/colorValues");
function Table(_a) {
    var data = _a.data;
    //for fast color name lookup
    var _b = React.useState({}), colorsDict = _b[0], setColorsDict = _b[1];
    var columns = react_1.useMemo(function () { return [
        {
            Header: "First Name",
            accessor: "firstName",
            Filter: tableFilters_1.TextFilter,
            filter: 'includes'
        },
        {
            Header: "Last Name",
            accessor: "lastName",
            Filter: tableFilters_1.TextFilter,
            filter: 'includes'
        },
        {
            Header: "Age",
            accessor: "age",
            Filter: tableFilters_1.NumberRangeColumnFilter,
            filter: 'between'
        },
        {
            Header: "Color",
            accessor: "colorHex",
            Cell: function (_a) {
                var value = _a.value;
                return React.createElement("div", null,
                    React.createElement(colorSwatch_1.default, { hex: value }),
                    " ",
                    colorValues_1.ColorsDictionary[value]);
            },
            Filter: selectColorFilter_1.SelectColorFilter,
            filter: 'equals'
        },
        {
            Header: "Date Added",
            accessor: "dateAdded",
            Cell: function (_a) {
                var value = _a.value;
                return React.createElement("span", null,
                    new Date(value).toLocaleDateString(),
                    " ");
            },
            disableFilters: true
        }
    ]; }, [colorsDict]);
    // Use the state and functions returned from useTable to build your UI
    var _c = react_table_1.useTable({
        columns: columns,
        data: data,
        initialState: { pageIndex: 0 }
    }, react_table_1.useFilters, react_table_1.useSortBy, react_table_1.usePagination), getTableProps = _c.getTableProps, getTableBodyProps = _c.getTableBodyProps, headerGroups = _c.headerGroups, prepareRow = _c.prepareRow, page = _c.page, canPreviousPage = _c.canPreviousPage, canNextPage = _c.canNextPage, pageOptions = _c.pageOptions, pageCount = _c.pageCount, gotoPage = _c.gotoPage, nextPage = _c.nextPage, previousPage = _c.previousPage, setPageSize = _c.setPageSize, _d = _c.state, pageIndex = _d.pageIndex, pageSize = _d.pageSize;
    var paginationSelectOptions = [];
    for (var pageNum = 0; pageNum < pageCount; pageNum++) {
        paginationSelectOptions.push(React.createElement("option", { key: pageNum, value: pageNum }, pageNum + 1));
    }
    // Render the UI for your table
    return (React.createElement(React.Fragment, null,
        React.createElement("table", __assign({ className: 'table table-striped table-bordered' }, getTableProps()),
            React.createElement("thead", null, headerGroups.map(function (headerGroup) {
                var _a = headerGroup.getHeaderGroupProps(), key = _a.key, restHeaderGroupProps = __rest(_a, ["key"]);
                return (React.createElement(React.Fragment, { key: key },
                    React.createElement("tr", __assign({}, restHeaderGroupProps), headerGroup.headers.map(function (column) {
                        var _a = column.getHeaderProps(column.getSortByToggleProps()), key = _a.key, restHeaderProps = __rest(_a, ["key"]);
                        return (React.createElement("th", __assign({ key: key }, restHeaderProps),
                            column.render('Header'),
                            React.createElement("span", null,
                                "\u00A0",
                                column.canSort ?
                                    (column.isSorted ?
                                        (column.isSortedDesc ? React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLongArrowAltDown })
                                            : React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLongArrowAltUp }))
                                        : React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExchangeAlt, rotation: 90 }))
                                    : "")));
                    })),
                    React.createElement("tr", __assign({}, restHeaderGroupProps), headerGroup.headers.map(function (column) {
                        var _a = column.getHeaderProps(), key = _a.key, restHeaderProps = __rest(_a, ["key"]);
                        return (React.createElement("th", __assign({ key: key }, restHeaderProps),
                            React.createElement("div", null, column.canFilter ? column.render('Filter') : null)));
                    }))));
            })),
            React.createElement("tbody", __assign({}, getTableBodyProps()), page.map(function (row, i) {
                prepareRow(row);
                return (React.createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                    return React.createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
                })));
            }))),
        React.createElement("ul", { className: "pagination" },
            React.createElement("li", { className: "page-item" },
                React.createElement("button", { className: "page-link", onClick: function () { return gotoPage(0); }, disabled: !canPreviousPage }, "First")),
            React.createElement("li", { className: "page-item" },
                React.createElement("button", { className: "page-link", onClick: function () { return previousPage(); }, disabled: !canPreviousPage }, "Previous")),
            React.createElement("li", { className: "page-item" },
                React.createElement("select", { className: "form-control", onChange: function (e) { return gotoPage(e.target.value); } }, paginationSelectOptions)),
            React.createElement("li", { className: "page-item" },
                React.createElement("button", { className: "page-link", onClick: function () { return nextPage(); }, disabled: !canNextPage }, "Next")),
            React.createElement("li", { className: "page-item" },
                React.createElement("button", { className: "page-link", onClick: function () { return gotoPage(pageCount - 1); }, disabled: !canNextPage }, "Last")))));
}
exports.default = Table;
//# sourceMappingURL=usersTable.js.map