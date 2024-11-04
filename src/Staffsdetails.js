import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import staffBG from './images/staffimg1.jpg';

const Staffsdetails = () => {
  const [staffs, setStaffs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStaffs, setFilteredStaffs] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editingStaffId, setEditingStaffId] = useState(null);
  const [editedStaff, setEditedStaff] = useState({});

  useEffect(() => {
    fetchStaffs();
  }, []);

  useEffect(() => {
    setFilteredStaffs(
      staffs.filter((staff) =>
        staff.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, staffs]);

  const fetchStaffs = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/staff');
      setStaffs(response.data);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  const handleChange = (e) => {
    setEditedStaff({
      ...editedStaff,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (index, staff) => {
    setEditRowIndex(index);
    setEditingStaffId(staff._id);
    setEditedStaff({
      name: staff.name,
      category: staff.category,
      DOJ: new Date(staff.DOJ).toISOString().split('T')[0],
      phone: staff.phone,
      email: staff.email,
      doctor: staff.doctor ? staff.doctor.name : '', // Ensure doctor name is set correctly
    });
  };

  const handleSave = async () => {
    try {
      console.log('Saving edited staff:', editedStaff);
      await axios.put(`http://localhost:7000/api/staff/${editingStaffId}`, editedStaff);
      fetchStaffs();
      setEditRowIndex(null);
      setEditingStaffId(null);
      setEditedStaff({});
    } catch (error) {
      console.log('Error updating staff', error);
    }
  };

  const handleCancel = () => {
    setEditRowIndex(null);
    setEditingStaffId(null);
    setEditedStaff({});
  };

  const handleDelete = async (email) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Sure to Delete?')) {
        await axios.delete('http://localhost:7000/api/staff/delete_staff', {
          data: { email },
        });
        fetchStaffs();
      }
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };
  

  const thStyle = {
    border: '3px solid black',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
    color: 'black',
    fontSize: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const divStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
  };

  const bgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${staffBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px)',
    zIndex: -1,
  };

  return (
    <div style={divStyle}>
      <div style={bgStyle}></div>
      <h1>Staff Details</h1>
      <input
        type="text"
        placeholder="Search by Name "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      {/* <button style={{ margin: '10px', padding: '10px' }}>Search</button> */}
      {/* <br /> */}
      <Link to="/AddStaffs">
        <button style={{ margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white' }}>ADD STAFF</button>
      </Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>DOJ</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Assigned For</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaffs.map((staff, index) => (
            <tr key={staff._id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editedStaff.name || ''}
                    onChange={handleChange}
                  />
                ) : (
                  staff.name
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="category"
                    value={editedStaff.category || ''}
                    onChange={handleChange}
                  />
                ) : (
                  staff.category
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="date"
                    name="DOJ"
                    value={editedStaff.DOJ || ''}
                    onChange={handleChange}
                  />
                ) : (
                  new Date(staff.DOJ).toLocaleDateString()
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="phone"
                    value={editedStaff.phone || ''}
                    onChange={handleChange}
                  />
                ) : (
                  staff.phone
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="email"
                    value={editedStaff.email || ''}
                    onChange={handleChange}
                  />
                ) : (
                  staff.email
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="doctor"
                    value={editedStaff.doctor || ''}
                    onChange={handleChange}
                  />
                ) : (
                  staff.doctor && staff.doctor.name ? staff.doctor.name : 'N/A' // Check if doctor exists and render name or 'N/A'
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index, staff)}>Edit</button>
                    <button onClick={() => handleDelete(staff.email)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staffsdetails;
