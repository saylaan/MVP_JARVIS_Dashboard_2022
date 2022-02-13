import React, { useRef } from 'react';

import '../../styles/sidebar.css';

const Sidebar = props => {
  const { main, setOffset } = props;
  const toggle = useRef(null);

  const changeToggleButton = () => {
    if(main.current.classList.contains("open")){
      toggle.current.classList.replace("bx-menu", "bx-menu-alt-right");
    }else {
      toggle.current.classList.replace("bx-menu-alt-right","bx-menu");
    }
  };

  const toggleSidebar = () => {
    main.current.classList.toggle("open");
    setOffset(main.current.classList.contains("open") ? '250px' : '78px');
    changeToggleButton();
  };

  return (
    <div className="sidebar open" ref={main}>
      <div className="logo-details">
        <i className='bx bx-bot icon' />
        <div className="logo_name">Jarvis</div>
        <i className='bx bx-menu' id="btn" ref={toggle} onClick={() => toggleSidebar()}/>
      </div>
      <ul className="nav-list">
        <li>
          <a href="/">
            <i className='bx bx-grid-alt' />
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="/home">
            <i className='bx bx-home' />
            <span className="links_name">My Home</span>
          </a>
          <span className="tooltip">My Home</span>
        </li>
        <li>
          <a href="/profile">
            <i className='bx bx-user' />
            <span className="links_name">Profile</span>
          </a>
          <span className="tooltip">Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;