// Frontend

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import loginImage from './images/login.jpg'; // Adjust the path according to your structure

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:7000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.role === 'admin') {
                    navigate('/Dashboard');
                }
                else if(data.role==='staff'){
                    localStorage.setItem("staff_id", data.staff_id)
                    localStorage.setItem("staffname", data.staffname)
                    localStorage.setItem("assigndoctor", data.assigndoctor)
                    navigate('/LoginStaff')
                }
                else if (data.role === 'doctor') {
                    localStorage.setItem("doctor_id", data.doctor_id)
                    localStorage.setItem("doctorname", data.name)
                    navigate('/LoginDoctor');
                }
                
            } else {
                const errorText = await response.text();
                setError(errorText);
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    const formstyle = {
        fontSize: '50px',
        display: 'block',
    };
    const divstyle = {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundImage: `url(${loginImage})`,
        height: '100vh',
        backgroundSize: 'cover', // or 'contain' depending on your preference
        backgroundPosition: 'center',
        width: '100%',
    };
    const labelstyle = {
        padding: '73px',
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bold',
        
    };
    const labelstyle1 = {
        padding: '35px',
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bold',
    };
    const inputstyle = {
        margin: '10px',
        padding: '10px',
        borderRadius:'10px',

    };
    const inputstyle1={
        
    }
    const buttonstyle = {
        fontSize: '30px',
        marginLeft: '160px',
        borderRadius:'10px',
        padding:'5px',
    };

    return (
        <div style={divstyle}>
            <form onSubmit={handlesubmit} style={formstyle}>
                <h1 style={{marginLeft:'120px'}}>Login</h1>
                <label htmlFor="email" style={labelstyle}>EMAIL</label>
                <input type="text" name='email' id='email' placeholder='Enter Your  Email' style={inputstyle} onChange={(event) => setEmail(event.target.value)} /><br />
                <label htmlFor="password" style={labelstyle1}>PASSWORD</label>
                <input type="password" name='password' id='password' placeholder='Enter Your Password' style={inputstyle} onChange={(event) => setPassword(event.target.value)} /><br />
                <button type="submit" style={buttonstyle}>Login</button>
                {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}
                {/* <Link to="/Signup" style={{ color: 'black', }}>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', alignItems: 'center', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>New User? Sign Up Here</p>
                </Link> */}
            </form>
        </div>
    );
};

export default Login;
