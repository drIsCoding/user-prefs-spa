import * as React from 'react'
import { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import PreferencesApi from '../../api/preferencesApi';


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

export default function Table({ data }) {

    //for fast color name lookup
    const [colorsDict, setColorsDict] = React.useState({});


    React.useEffect(() => {
        PreferencesApi.getAllColors().then(
            (colors => {

                //takeoff on this: 
                // https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
                const colorsObj = colors.reduce((obj, item) => {
                    return {
                        ...obj,
                        [item["hex"]]: item.name,
                    };
                }, {});

                setColorsDict(colorsObj);
            })
        );
    }, [])

    const columns = useMemo(() => [
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
            Cell: ({ row, cell }) => {
                console.log(row.original.colorHex, colorsDict);
                return <div>{colorsDict[row.original.colorHex]} </div>
            }
        }
    ], [colorsDict])


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
        data,
        initialState: { pageIndex: 0 },
    },
        usePagination)

    // Render the UI for your table
    return (
        <>
            <table className='table table-striped' {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
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
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}