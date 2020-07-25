import React from 'react';
import './Address.css'
import stations from "../data/Stations.json"

const Outbound = () => {
    var stationsArr: any = [];
    // loops trough json data for stations and pushes to stationsArr
    Object.keys(stations).forEach(function (key: any) {
        stationsArr.push(stations[key]);
    });
    return (
        <div>
            <p>Outbound</p>
        </div>
    )
};

export default Outbound;