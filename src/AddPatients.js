import React, { useState, useEffect } from 'react';
import axios from 'axios';
import patientBG from './images/patient.jpg';

const AddPatients = () => {
    const[errors,seterrors]=useState({});
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        phone: '',
        email: '',
        disease: '',
        age: '',
        doctor: '',
        Adate: '',
    });
    const validate=()=>{
        let errors={};
        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            errors.name = "Name should contain only letters and spaces.";
        }
        if (!/^[a-zA-Z\s]+$/.test(formData.gender)) {
            errors.gender = "please select gender";
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone number should be 10 digits long.";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            errors.email = "Invalid email address.";
        }
        if (!/^[a-zA-Z\s,]+$/.test(formData.disease)) {
            errors.disease = "Disease should contain only letters and spaces.";
        }

        const today = new Date();
        const appointmentDate = new Date(formData.Adate);
    
        // Set time to 00:00:00 for accurate comparison
        today.setHours(0, 0, 0, 0);
        appointmentDate.setHours(0, 0, 0, 0);
    
        const isToday = appointmentDate.getTime() === today.getTime();
        const isTomorrow = appointmentDate.getTime() === today.getTime() + 24 * 60 * 60 * 1000;
    
        if (!isToday && !isTomorrow) {
            errors.Adate = "Appointment date must be today or tomorrow.";
        }
        seterrors(errors);
        return Object.keys(errors).length === 0;
    }
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:7000/api/doctors');
            setDoctors(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching doctors:', error);
            setDoctors([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            alert("Please fix the errors in the form.");
            return;
        }
        try {
            console.log('Submitting form data:', formData); // Log form data
            const response = await axios.post('http://localhost:7000/api/patient/addpatient', formData);
            console.log('Patient added', response);
            alert("Patient Successfully Added");
            setFormData({
                name: '',
                gender: '',
                age: '',
                phone: '',
                email: '',
                disease: '',
                Adate: '',
                doctor: '',
            });
        } catch (error) {
            console.error('Error adding patient:', error);
            alert('Error Adding Data', error.message);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const divStyle = {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const bgStyle = {
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

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    };

    const labelStyle = {
        width: '100%',
        marginBottom: '5px',
        fontWeight: 'bold',
        fontSize: '14px',
        textAlign: 'left',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        margin: '20px 0',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return (
        <div style={divStyle}>
            <div style={bgStyle}></div>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h1 style={{ marginBottom: '20px' }}>ADD PATIENT</h1>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input type="text" style={inputStyle} name='name' value={formData.name} onChange={handleChange} required />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

                <label htmlFor="gender" style={labelStyle}>Gender</label>
                <select name="gender" style={inputStyle} value={formData.gender} onChange={handleChange} required >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                 
                <label htmlFor="age" style={labelStyle}>Age</label>
                <input type="text" style={inputStyle} name='age' value={formData.age} onChange={handleChange} required />
                {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}

                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <input type="text" style={inputStyle} name='phone' value={formData.phone} onChange={handleChange} required />
                {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}

                <label htmlFor="email" style={labelStyle}>Email</label>
                <input type="email" style={inputStyle} name='email' value={formData.email} onChange={handleChange} required />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

                <label htmlFor="disease" style={labelStyle}>Disease</label>
                <input type="text" style={inputStyle} name='disease' value={formData.disease} onChange={handleChange} required />
                {errors.disease && <div style={{ color: 'red' }}>{errors.disease}</div>}

                <label htmlFor="Adate" style={labelStyle}>Appointment Date</label>
                <input type="date" style={inputStyle} name='Adate' value={formData.Adate} onChange={handleChange} required />
                {errors.Adate && <div style={{ color: 'red' }}>{errors.Adate}</div>}

                <label htmlFor="doctor" style={labelStyle}>Choose A Doctor</label>
                
                <select name='doctor' style={inputStyle} value={formData.doctor} onChange={handleChange} required>
                    <option value="" disabled>Select A Doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                    ))}
                </select>
                
                <button type='submit' style={buttonStyle}>ADD PATIENT</button>
            </form>
        </div>
    );
};

export default AddPatients;
