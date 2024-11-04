import React, { useState, useEffect } from 'react';
import { RiUser3Fill, RiUserHeartFill, RiLogoutCircleLine } from 'react-icons/ri';
import { FaCircleUser } from "react-icons/fa6";
import BGIMG from './images/logindoctor2.jpg';
import PatientList from './PatientList';
import StaffList from './StaffList';
import { Link, useNavigate } from 'react-router-dom';

const LoginDoctor = () => {
  const [showPatients, setShowPatients] = useState(false);
  const [showStaffs, setShowStaffs] = useState(false);
  const [doctorId, setDoctorId] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedDoctorId = localStorage.getItem('doctor_id');
    console.log('Fetched doctor_id from localStorage:', storedDoctorId);
    setDoctorId(storedDoctorId);
  }, []);

  const handlePatientClick = () => {
    setShowPatients(true);
    setShowStaffs(false);
  };

  const handleStaffClick = () => {
    setShowStaffs(true);
    setShowPatients(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionClick = (option) => {
    setDropdownVisible(false);
    switch (option) {
      case 'profile':
        navigate('/profile');
        break;
      case 'password':
        navigate('/change-password');
        break;
      case 'account':
        navigate('/account-details');
        break;
      default:
        break;
    }
  };

  const divStyle = {
    backgroundImage: `url(${BGIMG})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const navStyle = {
    background: 'linear-gradient(45deg, #4F1787, #1E90FF)', // Linear gradient with blue shades

    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100px',
    position: 'fixed',
    left: '0',
    top: '0',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const iconStyle = {
    marginRight: '10px',
    color:'white',
  };

  const contentStyle = {
    flexGrow: 1,
    color: 'white',
    padding: '20px',
    marginLeft: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle1 = {
    margin: '30px',
    padding: '20px',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    right: '20px',
  };

  const welcomeStyle = {
    color: 'blue',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const meStyle = {
    position: 'absolute',
    top: '45px',
    right: '200px',
    // bottom:'0',

    padding: '10px',
    fontSize: '45px',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100px',
    right: '100px',
    backgroundColor: 'white',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    borderRadius: '5px',
    overflow: 'hidden',
  };

  const dropdownItemStyle = {
    padding: '10px',
    cursor: 'pointer',
    color: 'black',
    backgroundColor: 'white',
    borderBottom: '1px solid #ddd',
  };

  const lastDropdownItemStyle = {
    ...dropdownItemStyle,
    borderBottom: 'none',
  };

  return (
    <div style={divStyle}>
      <nav style={navStyle}>
        <button style={buttonStyle} onClick={handleStaffClick}>
          <RiUser3Fill style={iconStyle} /> STAFFS
        </button>
        <button style={buttonStyle} onClick={handlePatientClick}>
          <RiUserHeartFill style={iconStyle} /> PATIENTS
        </button>
      </nav>
      
      <div style={meStyle} onClick={toggleDropdown}>
        <FaCircleUser style={{ marginRight: '5px' }} />
      </div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={buttonStyle1} onClick={handleLogout}>
          <RiLogoutCircleLine style={iconStyle} /> LOGOUT
        </button>
      </Link>

      {dropdownVisible && (
        <div style={dropdownStyle}>
          <div style={dropdownItemStyle} onClick={() => handleOptionClick('profile')}>Update Profile</div>
          <div style={dropdownItemStyle} onClick={() => handleOptionClick('password')}>Change Password</div>
          <div style={lastDropdownItemStyle} onClick={() => handleOptionClick('account')}>Account Details</div>
        </div>
      )}

      <div style={contentStyle}>
        <h1 style={welcomeStyle}>WELCOME {localStorage.getItem("doctorname")}</h1>
        {showPatients && doctorId && <PatientList doctorId={doctorId} />}
        {showStaffs && doctorId && <StaffList doctorId={doctorId} />}
      </div>
    </div>
  );
};

export default LoginDoctor;
