import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const staffId = localStorage.getItem('staff_id');

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/doctors/by-staff/${localStorage.getItem("assigndoctor")}`);
      setDoctors(response.data);
    } catch (error) {
      console.log("Error fetching doctors", error);
    }
  };

  useEffect(() => {
    if (staffId) {
      fetchDoctors();
    }
  }, [staffId]);

  const thStyle = {
    border: '1px solid blue',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    color: 'blue',
  };
  const tdStyle = {
    border: '1px solid blue',
    padding: '8px',
    color: 'blue',
  };

  return (
    <div>
      <h2 style={{ color: 'blue' }}>Your Doctor List</h2>
      {doctors.length > 0 ? (

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>S.NO</th>
              <th style={thStyle}>Doctor Name</th>
              <th style={thStyle}>Specialization</th>
              <th style={thStyle}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{doctor.name}</td>
                <td style={tdStyle}>{doctor.specialization}</td>
                <td style={tdStyle}>{doctor.phone}</td>
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

export default DoctorList;
