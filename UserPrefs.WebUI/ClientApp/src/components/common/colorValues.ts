import { Color } from "../../types/color";

export const ColorsArray: Color[] = [
    {
        "hex": "#ffeb3b",
        "name": "yellow"
    },
    {
        "hex": "#ffc107",
        "name": "amber"
    },
    {
        "hex": "#ff9800",
        "name": "orange"
    },
    {
        "hex": "#f44336",
        "name": "red"
    },
    {
        "hex": "#ff5890",
        "name": "pink"
    },
    {
        "hex": "#9c27b0",
        "name": "purple"
    },
    {
        "hex": "#673ab7",
        "name": "lavender"
    },
    {
        "hex": "#3f51b5",
        "name": "blue"
    },
    {
        "hex": "#2196f3",
        "name": "azure"
    },
    {
        "hex": "#00bcd4",
        "name": "topaz"
    },
    {
        "hex": "#009688",
        "name": "teal"
    },
    {
        "hex": "#4caf50",
        "name": "green"
    },
    {
        "hex": "#795548",
        "name": "brown"
    },
    {
        "hex": "#607d8b",
        "name": "grey"
    },
    {
        "hex": "#000000",
        "name": "black"
    }
];

export const ColorsDictionary = {
    "#ffeb3b": "yellow",
    "#ffc107": "amber",
    "#ff9800": "orange",
    "#f44336": "red",
    "#ff5890": "pink",
    "#9c27b0": "purple",
    "#673ab7": "lavender",
    "#3f51b5": "blue",
    "#2196f3": "azure",
    "#00bcd4": "topaz",
    "#009688": "teal",
    "#4caf50": "green",
    "#795548": "brown",
    "#607d8b": "grey",
    "#000000": "black"
};

export const HexArray = [
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#f44336",
    "#ff5890",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#795548",
    "#607d8b",
    "#000000"
];

/*
 If want to dynamically update the colors dictionary + hex array instead of hardcoding, use these:
    
    // colors dictionary
    //takeoff on this:
    // https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
    const colorsObj = colors.reduce((obj, item) => {
        return {
            ...obj,
            [item["hex"]]: item.name,
        };
    }, {});
    
    //colors hex array
    const hexArray = colors.map(c => c.hex);
 */