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

    const onKeyDown = (e) => {
       console.log(e.key);

        switch (e.key) {
            case "w":
                move(DIRECTIONS.UP, 1);
                break;
            case "s":
                move(DIRECTIONS.DOWN, 1);
                break;
            case "d":
                move(DIRECTIONS.RIGHT, 1);
                break;
            case "a":
                move(DIRECTIONS.LEFT, 1);
                break;
        }
        switch (e.key) {
            case "i":
                move(DIRECTIONS.UP, 2);
                break;
            case "j":
                move(DIRECTIONS.DOWN, 2);
                break;
            case "l":
                move(DIRECTIONS.RIGHT, 2);
                break;
            case "k":
                move(DIRECTIONS.LEFT, 2);
                break;
        }
    }
    const onKeyUp = (e) => {
        switch (e.key) {
            case "w":
                stop(DIRECTIONS.UP, 1);
                break;
            case "s":
                stop(DIRECTIONS.DOWN, 1);
                break;
            case "d":
                stop(DIRECTIONS.RIGHT, 1);
                break;
            case "a":
                stop(DIRECTIONS.LEFT, 1);
                break;
        }
        switch (e.key) {
            case "i":
                stop(DIRECTIONS.UP, 2);
                break;
            case "j":
                stop(DIRECTIONS.DOWN, 2);
                break;
            case "l":
                stop(DIRECTIONS.RIGHT, 2);
                break;
            case "k":
                stop(DIRECTIONS.LEFT, 2);
                break;
        }
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