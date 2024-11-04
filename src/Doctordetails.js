import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import doctorBG from './images/doctorBG.jpeg';

const Doctordetails = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingDoctorId, setEditingDoctorId] = useState(null);
    const [editedDoctor, setEditedDoctor] = useState({});
    const [filteredDoctors, setFilteredDoctors] = useState([]);


    useEffect(() => {
        fetchDoctors();
    }, []);

    useEffect(() => {
        setFilteredDoctors(
          doctors.filter((doctor) =>
            doctor.name?.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, [searchQuery, doctors]);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('/api/doctors');
            console.log('Fetched doctors:', response.data); // Log the fetched data
    
            if (Array.isArray(response.data)) {
                setDoctors(response.data); // Assuming response is an array of doctors
            } else {
                console.log('Unexpected response structure:', response.data);
                setDoctors([]); // Handle unexpected structure
            }
        } catch (error) {
            console.error('Error fetching doctors:', error);
            setDoctors([]); // Fallback to empty array on error
        }
    };
    

    const handleSearch = async () => {
        fetchDoctors(searchQuery);
    };

    const handleEdit = (doctor) => {
        setEditingDoctorId(doctor._id);
        setEditedDoctor(doctor);
    };

    const handleChange = (e) => {
        setEditedDoctor({
            ...editedDoctor,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        console.log('Editing Doctor ID:', editingDoctorId);
        console.log('Edited Doctor Data:', editedDoctor);
        try {
            const response = await axios.put(`/api/doctors/${editingDoctorId}`, editedDoctor);
            console.log('Doctor updated:', response.data);
            setEditingDoctorId(null);
            fetchDoctors(); // Refresh the doctor list
        } catch (error) {
            console.error('Error updating doctor:', error);
        }
    };

    const handleCancel = () => {
        setEditingDoctorId(null);
        setEditedDoctor({});
    };

    const handleDelete = async (email) => {
        console.log("Attempting to delete doctor with email:", email);
        try {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Sure to Delete?')) {
                await axios.delete('/api/doctors/delete_doctor', { data: { email } });
                fetchDoctors(); // Refresh the doctor list
            }
        } catch (error) {
            console.error('Error deleting doctor:', error);
        }
    };
    

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        borderColor: 'red',
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

    const inputStyle = {
        padding: '5px',
        margin: '0 5px',
    };

    const addDoctorButton = {
        color: 'white',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '0 auto',
    };

    const searchStyle = {
        margin: '10px',
        padding: '10px',
        color: 'black',
        // fontSize: '20px',
        // width: '300px',
    };

    const searchButton = {
        color: 'grey',
        margin: '10px',
        padding: '10px',
        fontSize: '20px',
        width: '150px',
    };

    const divStyle = {
        backgroundImage: `url(${doctorBG})`,
        height: '100%',
        width: '100%',
        backgroundSize: 'fit',
        backgroundPosition: 'center',
    };

    return (
        <div style={divStyle}>
            <h1 style={{ color: 'black' }}>Doctor Details</h1>
            <input 
                type="text" 
                placeholder="Search by name " 
                value={searchQuery} 
                style={searchStyle}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <button onClick={handleSearch} style={searchButton}>Search</button> */}
            {/* <div style={{ padding: '20px', width: '100px', marginRight: '10px' }} > */}
                <Link to="/AddDoctor" >
                <button style={{ margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white' }}>ADD DOCTOR</button>

                    {/* <button style={addDoctorButton}>Add Doctor</button> */}
                </Link>
            {/* </div> */}
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>S.No</th>   
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Specialization</th>
                        <th style={thStyle}>Phone</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Available</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                            <tr key={doctor._id}>
                                <td style={tdStyle}>{index + 1}</td>
                                <td style={tdStyle}>
                                    {editingDoctorId === doctor._id ? (
                                        <input
                                            style={inputStyle}
                                            type="text"
                                            name="name"
                                            value={editedDoctor.name}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        doctor.name
                                    )}
                                </td>
                                <td style={tdStyle}>
                                    {editingDoctorId === doctor._id ? (
                                        <input
                                            style={inputStyle}
                                            type="text"
                                            name="specialization"
                                            value={editedDoctor.specialization}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        doctor.specialization
                                    )}
                                </td>
                                <td style={tdStyle}>
                                    {editingDoctorId === doctor._id ? (
                                        <input
                                            style={inputStyle}
                                            type="text"
                                            name="phone"
                                            value={editedDoctor.phone}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        doctor.phone
                                    )}
                                </td>
                                <td style={tdStyle}>
                                    {editingDoctorId === doctor._id ? (
                                        <input
                                            style={inputStyle}
                                            type="email"
                                            name="email"
                                            value={editedDoctor.email}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        doctor.email
                                    )}
                                </td>
                                <td style={tdStyle}>
                                    {editingDoctorId === doctor._id ? (
                                        <input
                                            style={inputStyle}
                                            type="text"
                                            name="available"
                                            value={editedDoctor.available}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        doctor.available
                                    )}
                                </td>
                                <td style={tdStyle}>
                                    {editingDoctorId === doctor._id ? (
                                        <>
                                            <button onClick={handleSave}>Save</button>
                                            <button onClick={handleCancel}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEdit(doctor)} style={{ fontSize: '20px', cursor: 'pointer' }}>Edit</button>
                                            <button onClick={() => handleDelete(doctor.email)} style={{ fontSize: '20px', margin: '3px', cursor: 'pointer' }}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={tdStyle}>No doctors found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Doctordetails;
