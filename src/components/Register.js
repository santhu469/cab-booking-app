import React, { useState } from 'react'
import DriverData from '../data/driver.json';
import RiderData from '../data/rider.json';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        type: "rider"
    });

    const { username, password } = user;

    const handleChange = (e) => {
        console.log(e.target.name)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("registerUser", JSON.stringify(user));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <div>
                <select defaultValue="rider" name='type' onChange={handleChange}>
                    <option value="rider">Rider</option>
                    <option value="driver">Driver</option>
                </select>
            </div>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={handleChange} name="username" />
            </div>
            <div>
                <label>New Password</label>
                <input type="password" value={password} onChange={handleChange} name="password" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register
