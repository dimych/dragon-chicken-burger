import React from "react";
import GoogleMapReact from 'google-map-react';
import {connect, Provider} from "react-redux";
import store from "../redux/store";
import {DIRECTIONS, move, stop} from "../redux/reducer";

const Unit = (props) => <div>
    <img style={{width: "20px", height: "20px"}}
         src={props.src}/>
</div>;

let DragonChickenBurgerView = ({
                                   center = {
                                       lat: 59.95,
                                       lng: 30.33
                                   }, zoom = 11, units = [],
                                   move, stop
                               }) => {

    const unitsDirections = [{
        id: 1,
        directions: [
            { direction: DIRECTIONS.UP, buttons: ["w","f"] },
            { direction: DIRECTIONS.DOWN, buttons: ["s","v"] },
            { direction: DIRECTIONS.RIGHT, buttons: ["d","c"] },
            { direction: DIRECTIONS.LEFT, buttons: ["a","b"] },
        ]
    },
        {
            id: 2,
            directions: [
                { direction: DIRECTIONS.UP, buttons: ["i"] },
                { direction: DIRECTIONS.DOWN, buttons: ["j"] },
                { direction: DIRECTIONS.RIGHT, buttons: ["l"] },
                { direction: DIRECTIONS.LEFT, buttons: ["k"] },
            ]
        }];

    const makeAction = (e, action) => {
        unitsDirections.forEach(u => {
            u.directions.forEach(d => {
                d.buttons.forEach(b => {
                    if (b == e.key)  action(d.direction, u.id);
                })
            })
        })
    }

    const onKeyDown = (e) => {
        makeAction(e, move);
    }
    const onKeyUp = (e) => {
        makeAction(e, stop);
    }

    return (
        <div style={{height: '100vh', width: '100%'}}
             onKeyDown={onKeyDown}
             onKeyUp={onKeyUp}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyCRoKzLJBv0fq1Hqdmd-n-nZ4xOvURM8us"}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {units.map(u => <Unit
                    lat={u.coords.lat}
                    lng={u.coords.lng}
                    src={u.src}
                />)}


            </GoogleMapReact>
        </div>

    )
}

let mstp = (state) => ({
    units: state.dragonChicken.units
})
DragonChickenBurgerView = connect(mstp, {move, stop})(DragonChickenBurgerView);


let DragonChickenBurger = (props) => <Provider store={store}>
    <DragonChickenBurgerView {...props}/>
</Provider>


export default DragonChickenBurger;