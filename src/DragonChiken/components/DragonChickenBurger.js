import React from "react";
import GoogleMapReact from 'google-map-react';
import {connect, Provider} from "react-redux";
import store from "../redux/store";
import {DIRECTIONS, move} from "../redux/reducer";

const Unit = (props) => <div>
    <img style={{width: "20px", height: "20px"}}
         src={props.src}/>
</div>;

let DragonChickenBurgerView = ({
                                   center = {
                                       lat: 59.95,
                                       lng: 30.33
                                   }, zoom = 11, units = [], move
                               }) => {

    const onKeyDown = (e) => {
       console.log("sdsdsd");

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
    }
    const onKeyUp = (e) => {


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
DragonChickenBurgerView = connect(mstp, {move})(DragonChickenBurgerView);


let DragonChickenBurger = (props) => <Provider store={store}>
    <DragonChickenBurgerView {...props}/>
</Provider>


export default DragonChickenBurger;