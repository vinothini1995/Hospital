import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
    const doctorstyle = {
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
      navigate('/Doctordetails');
  };
    return (
        <div
            style={{ ...doctorstyle, ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <i style={{ fontSize: "250px" }} className="fas fa-user-md"></i>
            <p style={{ fontSize: "25px" }}><b>Doctors</b></p>
        </div>
    );
}

export default Doctor;
