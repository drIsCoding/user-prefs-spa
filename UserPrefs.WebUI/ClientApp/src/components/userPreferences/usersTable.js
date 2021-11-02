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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var preferencesApi_1 = require("../../api/preferencesApi");
//export function ColorSwatch({hex}) {
//    const styleObj = {
//        backgroundColor: { hex },
//        width: "30px",
//        height: "30px",
//        outline: "none",
//        borderRadius: "4px"
//    }
//     return <div style={styleObj}></div>
//}
function Table(_a) {
    var data = _a.data;
    //for fast color name lookup
    var _b = React.useState({}), colorsDict = _b[0], setColorsDict = _b[1];
    React.useEffect(function () {
        preferencesApi_1.default.getAllColors().then((function (colors) {
            //takeoff on this: 
            // https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
            var colorsObj = colors.reduce(function (obj, item) {
                var _a;
                return __assign(__assign({}, obj), (_a = {}, _a[item["hex"]] = item.name, _a));
            }, {});
            setColorsDict(colorsObj);
        }));
    }, []);
    var columns = react_1.useMemo(function () { return [
        {
            Header: "First Name",
            accessor: "firstName"
        },
        {
            Header: "Last Name",
            accessor: "lastName"
        },
        {
            Header: "Age",
            accessor: "age"
        },
        {
            Header: "Color",
            accessor: "colorHex",
            Cell: function (_a) {
                var value = _a.value;
                return React.createElement("div", null,
                    colorsDict[value],
                    " ");
            }
        },
        {
            Header: "Date Added",
            accessor: "dateAdded",
            Cell: function (_a) {
                var value = _a.value;
                return React.createElement("span", null,
                    new Date(value).toLocaleDateString(),
                    " ");
            }
        }
    ]; }, [colorsDict]);
    // Use the state and functions returned from useTable to build your UI
    var _c = react_table_1.useTable({
        columns: columns,
        data: data,
        initialState: { pageIndex: 0 },
    }, react_table_1.usePagination), getTableProps = _c.getTableProps, getTableBodyProps = _c.getTableBodyProps, headerGroups = _c.headerGroups, prepareRow = _c.prepareRow, page = _c.page, canPreviousPage = _c.canPreviousPage, canNextPage = _c.canNextPage, pageOptions = _c.pageOptions, pageCount = _c.pageCount, gotoPage = _c.gotoPage, nextPage = _c.nextPage, previousPage = _c.previousPage, setPageSize = _c.setPageSize, _d = _c.state, pageIndex = _d.pageIndex, pageSize = _d.pageSize;
    // Render the UI for your table
    return (React.createElement(React.Fragment, null,
        React.createElement("table", __assign({ className: 'table table-striped' }, getTableProps()),
            React.createElement("thead", null, headerGroups.map(function (headerGroup) { return (React.createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) { return (React.createElement("th", __assign({}, column.getHeaderProps()), column.render('Header'))); }))); })),
            React.createElement("tbody", __assign({}, getTableBodyProps()), page.map(function (row, i) {
                prepareRow(row);
                return (React.createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                    return React.createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
                })));
            }))),
        React.createElement("div", { className: "pagination" },
            React.createElement("button", { onClick: function () { return gotoPage(0); }, disabled: !canPreviousPage }, '<<'),
            ' ',
            React.createElement("button", { onClick: function () { return previousPage(); }, disabled: !canPreviousPage }, '<'),
            ' ',
            React.createElement("button", { onClick: function () { return nextPage(); }, disabled: !canNextPage }, '>'),
            ' ',
            React.createElement("button", { onClick: function () { return gotoPage(pageCount - 1); }, disabled: !canNextPage }, '>>'),
            ' ',
            React.createElement("span", null,
                "Page",
                ' ',
                React.createElement("strong", null,
                    pageIndex + 1,
                    " of ",
                    pageOptions.length),
                ' '),
            React.createElement("span", null,
                "| Go to page:",
                ' ',
                React.createElement("input", { type: "number", defaultValue: pageIndex + 1, onChange: function (e) {
                        var page = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(page);
                    }, style: { width: '100px' } })),
            ' ',
            React.createElement("select", { value: pageSize, onChange: function (e) {
                    setPageSize(Number(e.target.value));
                } }, [10, 20, 30, 40, 50].map(function (pageSize) { return (React.createElement("option", { key: pageSize, value: pageSize },
                "Show ",
                pageSize)); })))));
}
exports.default = Table;
//# sourceMappingURL=usersTable.js.map