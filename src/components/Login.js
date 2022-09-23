import React, { useState } from 'react'
import RiderData from '../data/rider.json';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    type: "rider"
  });

  const { username, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.toLowerCase()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const found =  RiderData.find(user => user.username === username && user.password === password);
    if(found) {
      localStorage.setItem("loginUser", JSON.stringify(found));
      navigate('/ride')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>SignIn</h2>
      <div>
        <select defaultValue="rider" name='type' onChange={handleChange}>
          <option value="rider">Rider</option>
          <option value="driver">Driver</option>
        </select>
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login
