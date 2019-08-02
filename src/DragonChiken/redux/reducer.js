import React from "react";

const MOVE_UNIT_BY_STEP = "MOVE_UNIT_BY_STEP";

export const DIRECTIONS = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
}

const initialState = {
    units: [
        {
            id: 1,
            name: "Chicken",
            src: "https://www.pinclipart.com/picdir/middle/59-598395_chicken-clipart-png-download.png",
            coords: {
                lat: 59.965415,
                lng: 30.337844
            }
        },
        {
            id: 2,
            name: "Dragon",
            coords: {
                lat: 59.995415,
                lng: 30.337844
            },
            src: "https://art.pixilart.com/b163c360b05cfd8.gif"
        }
    ]

}

const getNewCoords = (direction, coords) => {
    console.log(direction);
    switch (direction) {
        case DIRECTIONS.UP:
            return {...coords, lat: coords.lat + STEP}
        case DIRECTIONS.DOWN:
            return {...coords, lat: coords.lat - STEP}
        case DIRECTIONS.RIGHT:
            return {...coords, lng: coords.lng + STEP}
        case DIRECTIONS.LEFT:
            return {...coords, lng: coords.lng - STEP}
        default: return coords;
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case MOVE_UNIT_BY_STEP:
            return {...state,
                units: state.units.map( u => {
                    if (u.id != action.unitId) return u;
                    return { ...u, coords: getNewCoords(action.direction, u.coords)}
                })
            }

        default:
            return state;

    }

}

const moveUnitByStep = (direction, unitId) => ({type: MOVE_UNIT_BY_STEP, direction, unitId});

const STEP = 0.0001;

export const move = (direction, unitId) => (dispatch, getState) => {
    setInterval(() => {
        dispatch(moveUnitByStep(direction, unitId));

    }, 100);
}


export default reducer;