import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffList = () => {
  const [staffs, setStaffs] = useState([]);
  const doctorId = localStorage.getItem('doctor_id');

  const fetchStaffs = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/staff/by-doctor/${doctorId}`);
      setStaffs(response.data);
    } catch (error) {
      console.error('Error fetching staffs:', error);
    }
  };

  useEffect(() => {
    if (doctorId) {
      fetchStaffs();
    }
  }, [doctorId]);

  const thStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    color: 'black'
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
    color: 'black'
  };

  return (
    <div>
      <h2 style={{ color: 'black', }}>{localStorage.getItem("name")}Staff List</h2>
      {staffs.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>S.NO</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff, index) => (
              <tr key={staff._id}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{staff.name}</td>
                <td style={tdStyle}>{staff.category}</td>
                <td style={tdStyle}>{staff.phone}</td>
                <td style={tdStyle}>{staff.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: 'black'}}><b>No staffs are found in your list.</b></p>
      )}
    </div>
  );
};

export default StaffList;
