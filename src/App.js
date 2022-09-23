import './App.css';
import AuthWrapper from './components/AuthWrapper';
import RequestRide from './components/RequestRide';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
  },
  {
    path: "/ride",
    element: <RequestRide />
  }
]);

function App() {
  return (
    <div className="App">
      <div className='auth-container'>
        <div className='left-container'>
          <h1>Cab Booking App</h1>
        </div>
        <div className='right-container'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
