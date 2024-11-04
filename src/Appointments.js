
import React,{useState} from 'react';
import Appointment from './images/Appointment.jpg';
import axios from 'axios';

const Appointments = () => { 
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        phone: '',
        email: '',
        diseasetype: '',
        age: '',
        doctor: '',
        Adate:'',
    });

    const handlesubmit = async (e) => {  
        e.preventDefault();  
        try {  
          const response = await axios.post('http://localhost:7000/api/patient/addpatient', {  
           ...formData,  
            referencedoctor: formData.referencedoctor, // Add referencedoctor field  
          });  
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
            referencedoctor: '',  
            
          });  
        } catch (error) {  
          console.error('Error adding patient:', error);  
          alert('Error Adding Data', error.message);  
        }  
      };  
    const bgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${Appointment})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(1px)',
        zIndex: -1,
        height: '100vh',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column', // Arrange items in a column
        alignItems: 'flex-start', // Align items to the start of the flex container
        gap: '10px', // Space between form elements
        maxWidth: '400px', // Limit the form width
        margin: '0 auto', // Center the form horizontally
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9', // Light background for the form
    };

    const labelStyle = {
        fontWeight: 'bold',
    };

    const inputStyle = {
        width: '100%', // Full width for input fields
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={bgStyle}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={titleStyle}>Book An Appointment</h1>
                <form style={formStyle} onSubmit={handlesubmit}>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" style={inputStyle} />

                    <label htmlFor="gender" style={labelStyle}>Gender</label>
                    <input type="text" name="gender" placeholder="Enter Your Gender" style={inputStyle} />
                    
                    <label htmlFor="age" style={labelStyle}>Age</label>
                    <input type="number" name="age" placeholder="Enter Your Age" style={inputStyle} />

                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input type="text" name="phone" placeholder="Enter Your Phone" style={inputStyle} />

                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" style={inputStyle} />

                    <label htmlFor="disease" style={labelStyle}>Disease</label>
                    <input type="text" name="disease" placeholder="Enter Your Disease" style={inputStyle} />

                    <label htmlFor="Adate" style={labelStyle}>Appointment Date</label>
                    <input type="date" name="Adate" placeholder="Enter Your Age" style={inputStyle} />

                    <label htmlFor="doctor" style={labelStyle}>Choose Doctor</label>
                    <select name="doctor" style={inputStyle}>
                        <option value="" disabled selected>Select a Doctor</option>
                        <option value="drSmith">Dr. Smith</option>
                        <option value="drJones">Dr. Jones</option>
                        <option value="drBrown">Dr. Brown</option>
                    </select>

                    <button type="submit" style={{ ...inputStyle, cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', fontWeight: 'bold' }}>BOOK NOW</button>
                </form>
            </div>
        </div>
    );
}

export default Appointments;
