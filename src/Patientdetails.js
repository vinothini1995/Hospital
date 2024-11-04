import React, { useEffect, useState } from 'react';
import patientBG from './images/forpatient4.webp';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Patientdetails = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editingPatientId, setEditingPatientId] = useState(null);
  const [editedPatient, setEditedPatient] = useState({});

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    setFilteredPatients(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, patients]);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/patient');
      setPatients(response.data);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  const handleChange = (e) => {
    setEditedPatient({
      ...editedPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (index, patient) => {
    setEditRowIndex(index);
    setEditingPatientId(patient._id);
    setEditedPatient({
      ...patient
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:7000/api/patient/${editingPatientId}`, editedPatient);
      fetchPatients();
      setEditRowIndex(null);
      setEditingPatientId(null);
      setEditedPatient({});
    } catch (error) {
      console.log('Error updating patient', error);
    }
  };

  const handleCancel = () => {
    setEditRowIndex(null);
    setEditingPatientId(null);
    setEditedPatient({});
  };

  const handleDelete = async (email) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if(confirm('Sure to Delete?')){
      const response = await axios.delete('http://localhost:7000/api/patient/delete_patient', {
        data: { email }
      });
      console.log(response.data.message);
      fetchPatients();
    } }catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const divstyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
  };
  const bgstyle = {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${patientBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px)',
    zIndex: -1,
  };
  const thStyle = {
    border: '2px solid black',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '12px',
    margin:'20px',
    
    fontSize: '20px',
   
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    borderColor: 'red',
    
  };

  return (
    <div style={divstyle}>
      <div style={bgstyle}></div>
      <h1>Patient Details</h1>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      {/* <button style={{ margin: '10px', padding: '10px' }} >Search</button><br></br> */}
      <Link to="/AddPatients">
        <button style={{ margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white' }}>ADD PATIENT</button>
      </Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Disease</th>
            <th style={thStyle}>AppointmentDate</th>
            <th style={thStyle}>Reference Doctor</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={patient._id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editedPatient.name || ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.name
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="gender"
                    value={editedPatient.gender || ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.gender
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="number"
                    name="age"
                    value={editedPatient.age || ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.age
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="phone"
                    value={editedPatient.phone || ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.phone
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="email"
                    value={editedPatient.email || ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.email
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="disease"
                    value={editedPatient.disease || ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.disease
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="date"
                    name="Adate"
                    value={editedPatient.Adate || ''}
                    onChange={handleChange}
                  />
                ) : (
                  new Date(patient.Adate).toLocaleDateString()
                )}
              </td>
              <td style={tdStyle}>
                {editRowIndex === index ? (
                  <input
                    type="text"
                    name="doctor"
                    value={editedPatient.doctor.name|| ''}
                    onChange={handleChange}
                  />
                ) : (
                  patient.doctor.name
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
                    <button onClick={() => handleEdit(index, patient)}>Edit</button>
                    <button onClick={() => handleDelete(patient.email)}>Delete</button>
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

export default Patientdetails;
