import React from "react";

const initialState = {
    units: [
        {
            id: 1,
            name: "Chicken",
            coords: {
                lat: 59.965415,
                lng: 30.337844,
                src: "https://www.pinclipart.com/picdir/middle/59-598395_chicken-clipart-png-download.png"
            }
        },
        {
            id: 2,
            name: "Dragon",
            coords: {
                lat: 59.995415,
                lng: 30.337844,
                src: "https://art.pixilart.com/b163c360b05cfd8.gif"
            }
        }
    ]

}

const reducer = (state = initialState, action) => {


    return state;

}

export default reducer;