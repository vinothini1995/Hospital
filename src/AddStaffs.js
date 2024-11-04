import React, { useState,useEffect } from 'react';
import staffBG from './images/staffimg1.jpg';
import axios from 'axios';

const AddStaffs = () => {
    const[errors,seterrors]=useState({});
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        DOJ: '',
        phone: '',
        email: '',
        doctor:'',
        password: '',
    });
    const validate=()=>{
        let errors={};
        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            errors.name = "Name should contain only letters and spaces.";
        }
        if (!/^[a-zA-Z\s]+$/.test(formData.category)) {
            errors.category = "category should contain only letters and spaces.";
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone number should be 10 digits long.";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            errors.email = "Invalid email address.";
        }

        const selectedDate = new Date(formData.DOJ);
        const today = new Date();
        if (selectedDate > today) {
            errors.DOJ = "Date of Joining cannot be in the future.";
        }
        seterrors(errors);
        return Object.keys(errors).length === 0;
    };
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
            const response = await axios.post('http://localhost:7000/api/staff/addstaff', formData);
            console.log('Staff added', response);
            alert("Staff Successfully Added");
            setFormData({
                name: '',
                category: '',
                DOJ: '',
                phone: '',
                email: '',
                doctor:'',
                password: '',
            });
        } catch (error) {
            console.error('Error adding staff:', error);
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
        backgroundImage: `url(${staffBG})`,
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
                <h1 style={{ marginBottom: '20px' }}>ADD STAFF</h1>

                <label htmlFor="name" style={labelStyle}>Name</label>
                <input type="text" style={inputStyle} name='name' value={formData.name} onChange={handleChange} required />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

                <label htmlFor="category" style={labelStyle}>Category</label>
                <input type="text" style={inputStyle} name='category' value={formData.category} onChange={handleChange} required />
                {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}

                
                <label htmlFor="DOJ" style={labelStyle}>DOJ</label>
                <input type="date" style={inputStyle} name='DOJ' value={formData.DOJ} onChange={handleChange} required />
                {errors.DOJ && <div style={{ color: 'red' }}>{errors.DOJ}</div>}

                
                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <input type="text" style={inputStyle} name='phone' value={formData.phone} onChange={handleChange} required />
                {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}

                
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input type="email" style={inputStyle} name='email' value={formData.email} onChange={handleChange} required />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

                
                <label htmlFor="doctor" style={labelStyle}>Worked For</label>
                <select name='doctor' style={inputStyle} value={formData.doctor} onChange={handleChange} required>
                    <option value="" disabled>Select A Doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                    ))}
                </select>
                <label htmlFor="password" style={labelStyle}>Password</label>
                <input type="password" style={inputStyle} name='password' value={formData.password} onChange={handleChange} required />
               
                <button type='submit' style={buttonStyle}>ADD STAFF</button>
            </form>
        </div>
    );
};

export default AddStaffs;
