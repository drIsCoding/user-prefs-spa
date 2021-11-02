import * as React from 'react'

interface Props {
    hex: string
}

export default function ColorSwatch(props: Props) {
    const styleObj = {
        backgroundColor: props.hex,
        width: "20px",
        height: "20px",
        outline: "none",
        borderRadius: "4px",
        display: "inline-block",
        verticalAlign: "text-bottom",
        marginRight: "5px"
    }

    return <div style={styleObj}></div>
}