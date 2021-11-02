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
var preferencesApi_1 = require("../../api/preferencesApi");
var tableFilters_1 = require("./tableFilters");
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
// Define a default UI for filtering
function DefaultColumnFilter(_a) {
    var _b = _a.column, filterValue = _b.filterValue, preFilteredRows = _b.preFilteredRows, setFilter = _b.setFilter;
    var count = preFilteredRows.length;
    return (React.createElement("input", { value: filterValue || '', onChange: function (e) {
            setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }, placeholder: "Search " + count + " records..." }));
}
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
                    colorsDict[value],
                    " ");
            },
            Filter: tableFilters_1.SelectColumnFilter,
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
            }
        }
    ]; }, [colorsDict]);
    // Use the state and functions returned from useTable to build your UI
    var _c = react_table_1.useTable({
        columns: columns,
        data: data,
        initialState: { pageIndex: 0 },
        defaultCanFilter: true
    }, react_table_1.useSortBy, react_table_1.usePagination), getTableProps = _c.getTableProps, getTableBodyProps = _c.getTableBodyProps, headerGroups = _c.headerGroups, prepareRow = _c.prepareRow, page = _c.page, canPreviousPage = _c.canPreviousPage, canNextPage = _c.canNextPage, pageOptions = _c.pageOptions, pageCount = _c.pageCount, gotoPage = _c.gotoPage, nextPage = _c.nextPage, previousPage = _c.previousPage, setPageSize = _c.setPageSize, _d = _c.state, pageIndex = _d.pageIndex, pageSize = _d.pageSize;
    // Render the UI for your table
    return (React.createElement(React.Fragment, null,
        React.createElement("table", __assign({ className: 'table table-striped' }, getTableProps()),
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
                                        (column.isSortedDesc ? React.createElement("i", { className: "far fa-long-arrow-down" })
                                            : React.createElement("i", { className: "far fa-long-arrow-up" }))
                                        : React.createElement("i", { className: "far fa-sort-alt" }))
                                    : "")));
                    })),
                    React.createElement("tr", __assign({}, restHeaderGroupProps), headerGroup.headers.map(function (column) {
                        var _a = column.getHeaderProps(), key = _a.key, restHeaderProps = __rest(_a, ["key"]);
                        console.log(column.canFilter);
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