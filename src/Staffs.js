import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Staffs = () => {
    const Staffsstyle = {
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '5px',
        margin: '10px',
        cursor:'pointer',
        transition: 'transform 0.1s ease-in-out', // Adding transition for smooth effect
    };

    const hoverStyle = {
        transform: 'scale(1.05)', // Scale up the div when hovered
        backgroundColor: 'red'
    };
    
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = React.useState(false);
    const handleClick = () => {
      navigate('/Staffsdetails');
  };
    return (
        <div
            style={{ ...Staffsstyle, ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <i style={{ fontSize: "250px" }} className="fa-solid fa-user-nurse"></i>
            <p style={{ fontSize: "25px" }}><b>Staffs</b></p>
        </div>
    );
}

export default Staffs;
