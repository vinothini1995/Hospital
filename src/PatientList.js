import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientList = ({  }) => {
 
  const [patients, setPatients] = useState([]);
  const doctorId= localStorage.getItem('doctor_id');
console.log('doctor', doctorId)
const fetchPatients = async () => {
  console.log("fun");
  try {
    console.log("try");
    const response = await axios.get(`http://localhost:7000/api/patient/by-doctor/${doctorId}`);
    console.log('Fetched patients:', response.data);
    setPatients(response.data);
  } catch (error) {
    console.log('Error fetching patients', error);
  }
};
  useEffect(() => {
    if (doctorId) {
      fetchPatients();
    }
  }, [doctorId]);

 

  return (
    <div>
      <h2 style={{color:'black'}}>{localStorage.getItem("name")}Your Patient List </h2>
      {patients.length > 0 ? (

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>S.NO</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Disease</th>
            <th style={thStyle}>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient,index) => (
            <tr key={patient._id,index}>
              <td style={tdStyle}>{index+1}</td>
              <td style={tdStyle}>{patient.name}</td>
              <td style={tdStyle}>{patient.gender}</td>
              <td style={tdStyle}>{patient.age}</td>
              <td style={tdStyle}>{patient.phone}</td>
              <td style={tdStyle}>{patient.email}</td>
              <td style={tdStyle}>{patient.disease}</td>
              <td style={tdStyle}>{new Date(patient.Adate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ): (
        <p style={{ color: 'black'}}><b>No patients are found in your list.</b></p>
      )}
    </div>
  );
};

const thStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
  color:'black'
};

const tdStyle = {
  border: '1px solid black',
  padding: '8px',
  color:'black'
};

export default PatientList;
