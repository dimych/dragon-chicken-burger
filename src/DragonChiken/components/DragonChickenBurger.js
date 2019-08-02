import React from "react";
import GoogleMapReact from 'google-map-react';
import {Provider} from "react-redux";
import store from "../redux/store";

const Unit = (props) => <div>
    <img style={{ width: "20px", height: "20px"}}
         src={props.src}/>
</div>;

let DragonChickenBurgerView = ({center = {
    lat: 59.95,
    lng: 30.33
}, zoom = 11}) => {
    return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCRoKzLJBv0fq1Hqdmd-n-nZ4xOvURM8us" }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >

                    <Unit
                        lat={59.905415}
                        lng={30.337844}
                        text="hey"
                        src={"https://www.pinclipart.com/picdir/middle/59-598395_chicken-clipart-png-download.png"}
                    />
                    <Unit
                        lat={59.965415}
                        lng={30.337844}
                        text="hey"
                        src={"https://art.pixilart.com/b163c360b05cfd8.gif"}
                    />
                </GoogleMapReact>
            </div>

    )
}

let DragonChickenBurger = (props) => <Provider store={store}>
    <DragonChickenBurgerView {...props}/>
</Provider>


export default DragonChickenBurger;