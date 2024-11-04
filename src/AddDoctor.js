import React, { useState } from 'react';
import axios from 'axios';
import doctorBG from './images/doctorBG.jpeg';

const AddDoctor = () => {
    const[errors,seterrors]=useState({});
    const [formData, setFormData] = useState({
        name: '',
        specialization: '',
        phone: '',
        email: '',
        available: '',
        password: '',
    });
    const validate=()=>{
        let errors={};

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
        errors.name = "Name should contain only letters and spaces.";
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.specialization)) {
        errors.specialization = "Specialization should contain only letters and spaces.";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone number should be 10 digits long.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        errors.email = "Invalid email address.";
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.available)) {
        errors.available = "Name should contain only letters and spaces.";
    }
    seterrors(errors);
    return Object.keys(errors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validate()) {
            alert("Please fix the errors in the form.");
            return;
        }
    
        try {
            const response = await axios.post('/api/doctors', formData);
            console.log('Doctor added:', response);
            alert('Doctor added successfully');
            setFormData({
                name: '',
                specialization: '',
                phone: '',
                email: '',
                available: '',
                password: '',
            });
            seterrors({});
        } catch (error) {
            console.error('Error adding doctor:', error);
            alert('Error Adding Doctor: ' + error.message);
        }
    };
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        marginBottom: '15px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        marginBottom: '6px',
        fontWeight: 'bold',
        display: 'block',
        textAlign: 'left',
    };

    const buttonStyle = {
        width: '100%',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '12px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${doctorBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={backgroundImageStyle}>
            <div style={formContainerStyle}>
                <h1 style={{ color: 'black', marginBottom: '20px', textAlign: 'center' }}>ADD DOCTOR</h1>
                <form onSubmit={handleSubmit}>
                    <label style={labelStyle}>Name</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

                    <label style={labelStyle}>Specialization</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                    />
    {errors.specialization && <div style={{ color: 'red' }}>{errors.specialization}</div>}

                    <label style={labelStyle}>Phone</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
    {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}

                    <label style={labelStyle}>Email</label>
                    <input
                        style={inputStyle}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

                    <label style={labelStyle}>Available</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="available"
                        value={formData.available}
                        onChange={handleChange}
                        required
                    />
    {errors.available && <div style={{ color: 'red' }}>{errors.available}</div>}

                    <label style={labelStyle}>Password</label>
                    <input
                        style={inputStyle}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" style={buttonStyle}>
                        Add Doctor
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
