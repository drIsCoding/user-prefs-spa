import * as React from 'react'
import { ColorsArray } from '../common/colorValues'

export function SelectColorFilter({
    column: { filterValue, setFilter },
}) {

    // Render a multi-select box
    return (
        <select className="form-control"
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
        >
            <option value="">All</option>
            {ColorsArray.map((color, i) => (
                <option key={color.hex} value={color.hex}>
                    {color.name}
                </option>
            ))}
        </select>
    )
}