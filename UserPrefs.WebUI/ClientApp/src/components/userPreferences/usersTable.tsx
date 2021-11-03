import * as React from 'react'
import { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useFilters } from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { TextFilter, SelectColumnFilter, NumberRangeColumnFilter } from './tableFilters'
import {SelectColorFilter} from './selectColorFilter'
import ColorSwatch from "./colorSwatch"
import {ColorsDictionary} from "../common/colorValues"

export default function UsersTable({ data }) {

    console.log("rendering user data");

    const columns = useMemo(() => [
        {
            Header: "First Name",
            accessor: "firstName",
            Filter: TextFilter,
            filter: 'includes'
        },
        {
            Header: "Last Name",
            accessor: "lastName",
            Filter: TextFilter,
            filter: 'includes'
        },
        {
            Header: "Age",
            accessor: "age",
            Filter: NumberRangeColumnFilter,
            filter: 'between'
        },
        {
            Header: "Color",
            accessor: "colorHex",
            Cell: ({ value }) => {
                return <div><ColorSwatch hex={value} /> {ColorsDictionary[value]}</div>
            },
            Filter: SelectColorFilter,
            filter: 'equals'
        },
        {
            Header: "Date Added",
            accessor: "dateAdded",
            Cell: ({ value }) => {
                return <span>{new Date(value).toLocaleDateString()} </span>
            },
            disableFilters: true
        }
    ], [])

    const memoData = useMemo(() => data, []);

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data: memoData,
        initialState: { pageIndex: 0, pageSize: 15 }
    },
        useFilters,
        useSortBy,
        usePagination)

    const paginationSelectOptions = [];
    for (let pageNum = 0; pageNum < pageCount; pageNum++) {
        paginationSelectOptions.push(<option key={pageNum} value={pageNum}>{pageNum + 1}</option>);
    }

    // Render the UI for your table
    return (
        <>
            <table className='table table-striped table-bordered' {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => {
                        const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                        return (
                            <React.Fragment key={key}>
                                <tr {...restHeaderGroupProps}>
                                    {headerGroup.headers.map(column => {
                                        const { key, ...restHeaderProps } = column.getHeaderProps(column.getSortByToggleProps())
                                        return (
                                            <th key={key} {...restHeaderProps}>
                                                {column.render('Header')}
                                                <span>&nbsp;
                                                    {column.canSort ?
                                                        (column.isSorted ?
                                                            (column.isSortedDesc ? <FontAwesomeIcon icon={faLongArrowAltDown}/>
                                                                : <FontAwesomeIcon icon={faLongArrowAltUp} />)
                                                            : <FontAwesomeIcon icon={faExchangeAlt} rotation={90} />)
                                                        : ""
                                                    }

                                                </span>
                                            </th>
                                        )
                                    })}
                                </tr>
                                <tr {...restHeaderGroupProps}>
                                    {headerGroup.headers.map(column => {
                                        const { key, ...restHeaderProps } = column.getHeaderProps()
                                        return (
                                            <th key={key} {...restHeaderProps}>
                                                {/* Render the columns filter UI */}
                                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                            </th>
                                        )
                                    })}
                                </tr>
                            </React.Fragment>
                        )
                    }
                    )}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            

            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        First
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Previous
                    </button>
                </li>
                <li className="page-item">
                    <select className="form-control" onChange={(e) => gotoPage(e.target.value)}>
                        {paginationSelectOptions}
                    </select>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        Last
                    </button>
                </li>
            </ul>
        </>
    )
}