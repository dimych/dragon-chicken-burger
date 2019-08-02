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

const reducer = (state = initialState, action) => {

switch (action.type) {
    case MOVE_UNIT_BY_STEP:
        let unit = state.dragonChicken.units.find(u => u.id == action.unitId);
        let newCoords = {...unit.coords};

        switch (action.direction) {
            case DIRECTIONS.UP:
                newCoords.lat += STEP;
                break;
            case DIRECTIONS.DOWN:
                newCoords.lat -= STEP;
                break;
            case DIRECTIONS.RIGHT:
                newCoords.lng += STEP;
                break;
            case DIRECTIONS.LEFT:
                newCoords.lng -= STEP;
                break;
        }

        break;
    default:
        return state;

}

}

const moveUnitByStep = (direction, unitId) => ({type: MOVE_UNIT_BY_STEP, direction, unitId});

const STEP = 0.0001;

const move = (direction, unitId) => (dispatch, getState) => {
    setInterval(() => {
        dispatch(moveUnitByStep(direction, unitId));

    }, 100);
}


export default reducer;