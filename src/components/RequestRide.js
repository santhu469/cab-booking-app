import React, { startTransition, useEffect, useState } from 'react';
import DriverData from '../data/driver.json';
import RidersData from '../data/rider.json';
import { Distance } from './DistanceCal';

const RequestRide = () => {
    const riderData = JSON.parse(localStorage.getItem("loginUser"));
    const [rider, setRider] = useState({});
console.log('RidersData', RidersData)
    const MAX_DISTANCE = 170;

    const [dirvers, setDrivers] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        setRider({ ...riderData });
    }, []);

    useEffect(() => {
        for (let i = 0; i < DriverData.length; i++) {
            let tempDistance = Distance(rider?.location?.x, DriverData[i].location.x, rider?.location?.y, DriverData[i].location.y);
            if (tempDistance < MAX_DISTANCE) setDrivers(prevData => [...prevData, { ...DriverData[i] }]);
        };
    }, [rider])

    const handleSelectRider = (e) => {
        setDrivers([])
        const foundRider = RidersData.find(rider => rider.username === e.nativeEvent.target.value);
        startTransition(() => {
            setRider(foundRider)
        })
    }

    const handleSelectDriver = (driver) => {
        
    }

    return (
        <div>
            <div>
                <h2>Start Ride</h2>
                <p>Rider: {rider?.username || ""} <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setChange(!change)}>change</span></p>
                {change ? <select name='rider-select' onChange={(e) => handleSelectRider(e)}>
                    {RidersData.map(rider => <option key={rider.username} value={rider.username}>{rider.username}</option>)}
                </select> : null}
                <p>Location: {(rider?.location?.x || "") + " && " + (rider?.location?.y || "")}</p>
            </div>

            <hr />

            {dirvers && dirvers.length === 0 ? <p>No Drivers availabe on your location. Regret</p> : 
            <p style={{color: "green"}}>{dirvers.length} Drivers are availabe on your location.</p>}

            {dirvers && dirvers.map((driver) => {
                return (<div key={driver.username}>
                    <p>Driver: {driver.username}</p>
                    <span style={{ color: "blue", cursor: "pointer" }} onClick={() => handleSelectDriver(driver)}>select</span>
                    <p>Location: {driver.location.x + " && " + driver.location.y}</p>
                </div>)
            })}
        </div>
    )
}

export default RequestRide
