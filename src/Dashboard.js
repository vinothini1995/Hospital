import React  from 'react';
import './dashboard.css';
import Doctor from './Doctor.js';
import Staffs from './Staffs.js';
import Patient from './Patient.js';
import Medical from './Medical.js';


const Dashboard = () => {

    return (
        <div>
            <h1>Hospital Management System Dashboard</h1>
            
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Doctor />
            <Staffs />
            <Patient />
            <Medical />
            

            </div>
            </div>
    );
};

export default Dashboard;
