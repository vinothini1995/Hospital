import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white', // White text color
    fontSize: '2rem',
    padding: '20px',
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    borderRadius: '10px',
    zIndex: 1,
    background: 'linear-gradient(90deg, #4F1787, #007BFF)', // Gradient with #4F1787 and #007BFF
};

const linkStyle = {
    color: 'white', // White text color
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '1rem',
};

const hoverLinkStyle = {
    color: '#EB3678', // Color on hover
};
const hoverbuttonstyle={
  color:'#EB3678',
}
const buttonStyle = {
    backgroundColor: 'white', 
    border: 'none',
    margin: '0 10px',
    padding: '10px 20px',
    color: 'black',
    borderRadius: '25px',
    cursor: 'pointer',
};

const Nav = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const[hoverbutton,sethoverbutton]=useState(null);

    return (
        <div>
            <nav style={navStyle}>
                <div><b>SPMA HealthCare</b></div>
                <div>
                    <Link
                        to="/"
                        style={hoveredLink === 'about' ? { ...linkStyle, ...hoverLinkStyle } : linkStyle}
                        onMouseEnter={() => setHoveredLink('about')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <b>About</b>
                    </Link>
                    <Link
                        to="/services"
                        style={hoveredLink === 'services' ? { ...linkStyle, ...hoverLinkStyle } : linkStyle}
                        onMouseEnter={() => setHoveredLink('services')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                       <b> Services</b>
                    </Link>
                    <Link
                        to="/contact"
                        style={hoveredLink === 'contact' ? { ...linkStyle, ...hoverLinkStyle } : linkStyle}
                        onMouseEnter={() => setHoveredLink('contact')}
                        onMouseLeave={() => setHoveredLink()}
                    >
                       <b> Contact</b>
                    </Link>
                    <Link to="/AddPatients"
                    onMouseEnter={()=>sethoverbutton}
                    onMouseLeave={()=>sethoverbutton()}>
                        <button style={buttonStyle}><b>BOOK APPOINTMENT</b></button>
                    </Link>
                    <Link to="/Login">
                        <button style={buttonStyle}><b>LOGIN</b></button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
