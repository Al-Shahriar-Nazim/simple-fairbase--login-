// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
{/* <h2>This header file</h2> */}
<Link to="/">Home</Link>
<Link to='/about'>About</Link>
<Link to="/login">Login</Link>
        </div>
    );
};

export default Header;