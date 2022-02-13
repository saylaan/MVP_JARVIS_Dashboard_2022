import React, {useEffect, useRef, useState} from 'react';
import Sidebar from "../components/Sidebar";
import {useLocation} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import { AuthenticationContext } from "../providers/AuthenticationProvider";

const Layout = ({ socket }) => {
    const location = useLocation();
    const authentication = React.useContext(AuthenticationContext);
    const main = useRef(null);
    const [ offset, setOffset ] = useState('250px');

    return ( authentication.isLoggedIn() ? (
            <div className={'w-full h-full flex'}>
                <Sidebar main={main} setOffset={setOffset} />
                <div style={{ marginLeft: offset, transition: 'all 0.5s ease' }} className={'w-full'}>
                    {location.pathname.includes('home') ? (
                        <Home socket={socket}/>
                    ) : location.pathname.includes('profile') ? (
                        <Profile />
                    ) : (
                        <Dashboard />
                    )}
                </div>
            </div>
        ) : (
          <Login />
        )
    );
};

export default Layout;