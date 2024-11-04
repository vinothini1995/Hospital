import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BGIMG from './images/loginstaff1.jpg';
import { FaCircleUser } from "react-icons/fa6";
import { RiUser3Fill, RiUserHeartFill, RiLogoutCircleLine } from 'react-icons/ri';
import DoctorList from './DoctorList';
import PatientList from './PatientList';

const LoginStaff = () => {
  const navigate = useNavigate();
  const [showPatient, setShowPatient] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [staffName, setStaffName] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const storedStaffName = localStorage.getItem('staffname');
    console.log('Fetched staff name from localStorage:', storedStaffName);
    setStaffName(storedStaffName);
  }, []);

  const doctorClick = () => {
    setShowDoctor(true);
    setShowPatient(false);
  };

  const patientClick = () => {
    setShowPatient(true);
    setShowDoctor(false);
  };

  const handleLogout = () => {
    console.log('Clearing localStorage and logging out...');
    localStorage.clear();
    console.log('localStorage after clear:', localStorage);
    navigate('/'); // Redirect to home route after logout
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionClick = (option) => {
    setDropdownVisible(false);
    switch (option) {
      case 'profile':
        // Navigate to profile update page
        navigate('/profile');
        break;
      case 'password':
        // Navigate to change password page
        navigate('/change-password');
        break;
      case 'account':
        // Navigate to account details page
        navigate('/account-details');
        break;
      default:
        break;
    }
  };

  const BGStyle = {
    backgroundImage: `url(${BGIMG})`,
    filter: 'blur(2px)',
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
  };

  const divStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
   
     backgroundImage: `url(${BGIMG})`,
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
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    flexGrow: 1,
    color: 'white',
    marginLeft: '220px',
    position: 'relative',
  };

  const buttonStyle1 = {
    marginTop: '5px',
    padding: '20px',
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
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
  };

  const meStyle = {
    position: 'absolute',
    top: '20px',
    right: '190px',
    padding: '10px',
    fontSize: '45px',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '60px',
    right: '190px',
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
      {/* <div style={BGStyle}></div> */}
      <nav style={navStyle}>
        <button style={buttonStyle} onClick={doctorClick}>
          <RiUser3Fill style={iconStyle} /> DOCTOR
        </button>
        <button style={buttonStyle} onClick={patientClick}>
          <RiUserHeartFill style={iconStyle} /> PATIENTS
        </button>
      </nav>
      <button style={buttonStyle1} onClick={handleLogout}>
        <RiLogoutCircleLine style={iconStyle} /> LOGOUT
      </button>
      <div style={meStyle} onClick={toggleDropdown}>
        <FaCircleUser style={{ marginRight: '5px' }} />
      </div>
      {dropdownVisible && (
        <div style={dropdownStyle}>
          <div style={dropdownItemStyle} onClick={() => handleOptionClick('profile')}>Update Profile</div>
          <div style={dropdownItemStyle} onClick={() => handleOptionClick('password')}>Change Password</div>
          <div style={lastDropdownItemStyle} onClick={() => handleOptionClick('account')}>Account Details</div>
        </div>
      )}
      <div style={contentStyle}>
        <h1 style={welcomeStyle}>WELCOME {staffName || 'STAFF'}</h1>
        {showDoctor && <DoctorList />}
        {showPatient && <PatientList />}
      </div>
    </div>
  );
};

export default LoginStaff;
