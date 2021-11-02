import * as React from 'react'

interface Props {
    hex: string
}

export default function ColorSwatch(props: Props) {
    const styleObj = {
        backgroundColor: props.hex,
        width: "30px",
        height: "30px",
        outline: "none",
        borderRadius: "4px",
        display: "inline-block"
    }

    return <div style={styleObj}></div>
}