import React from 'react';
import { Link } from 'react-router-dom';
import specificImage from './images/Services.webp';
import specificimage from './images/service.svg';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import Nav from './Nav';

const Services = () => {
    const divStyle = {
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflowX:'hidden'
    };

    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'black',
        fontSize: '2rem',
        padding: '20px',
        position: 'absolute',
        top: '20px',
        left: '20px',
        right: '20px',
        borderRadius: '10px',
        zIndex: 1,
        backgroundColor: 'rgba(0, 150, 255, 0.7)',
    };

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        margin: '0 10px',
        fontSize: '1rem',
    };

    const buttonStyle = {
        backgroundColor: 'blue',
        border: 'none',
        margin: '0 10px',
        padding: '10px 20px',
        color: 'white',
        borderRadius: '10px',
        cursor: 'pointer',
    };

    const contentStyle = {
        marginTop: '100px',
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 1,
        color: 'black',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
    };

    const imgStyle = {
        width: '500px',
        height: 'auto',
        borderRadius: '10px',
        margin: '20px',
        position:'absolute',
        marginTop:'850px',
        marginLeft:'650px'
    };

    const textContainerStyle = {
        maxWidth: '50%',
        textAlign: 'justify',
    };

    const contentStyle1 = {
        position: 'absolute',
        marginTop: '400px',
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 1,
        color: 'black',
        textAlign: 'left',
        display: 'flex',
        
        
    };
    const ulstyle={
        position:'absolute',
        marginTop:'100px',
        alignItems:'justify',
        
        
    }
const ul2={
    display:'flex',
    flexDirection:'column',
    marginTop:'100px',position:'absolute',marginLeft:'300px',width:'300px',height:'260px',
}
const imgstyle1={
    position:'absolute',
    marginTop:'200px',
    marginLeft:'650px',
    
    
}
const lastcontent={
    position:'absolute',
    marginTop:'800px',
}
const templatesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px', // Margin for spacing between h1 and templates
};

const templateStyle = {
    width: '72%', // Adjust width to fit four templates
    height: 'auto', // Adjust height as needed
    backgroundColor: 'rgba(0, 120, 255, 0.2)', // Template background color
    borderRadius: '10px',
    padding: '10px', // Added padding for content spacing
    animation: 'move 3s infinite alternate', // Add animation for moving effect
   margin:'0 auto',
};
    return (
        <div style={divStyle}>
            <style>{`
                @keyframes fadeInMoveUp {
                    0% {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animated-list-item {
                    animation: fadeInMoveUp 1s ease forwards;
                }
            `}</style>
            <Nav />
            <div style={contentStyle}>
                <div style={textContainerStyle}>
                    <h1>Our services</h1>
                    <h2>All-inclusive Care</h2>
                    <p>We are committed to addressing all your healthcare needs, offering services ranging from hospitals and clinics to labs, pharmacies, and insurance. Our goal is to provide a comprehensive and personalised healthcare experience that best serves you.</p>
                </div>
                
            </div>
            <div style={contentStyle1}>
                <h2>Medical Specialities</h2>
                <ul style={ulstyle}>
                    <li className="animated-list-item">Adult Haemato-oncology And Bmt</li>
                    <li className="animated-list-item">Audiology</li>
                    <li className="animated-list-item">General & Gi Surgery</li>
                    <li className="animated-list-item">Gastro Sciences</li>
                    <li className="animated-list-item">Infectious Diseases</li>
                    <li className="animated-list-item">Interventional Radiology</li>
                    <li className="animated-list-item">Radiology</li>
                    <li className="animated-list-item">Urology</li>
                    <li className="animated-list-item">Dermatology</li>
                    <li className="animated-list-item">Thoracic And Vascular Surgery</li>
                </ul>
                <ul style={ul2}>
                    <li>Medical Administration</li>
                    <li>Neck Oncology</li>
                    <li>Diabetology</li>
                    <li>Spine Suregory</li>
                    <li>Endocrinology & Diabetology</li>
                    <li>Cancer Care</li>
                    <li>Cranio-maxillo Facial Surgery</li>
                    <li>Thoracic Surgery</li>
                    <li>Orthopaedics</li>
                    <li>Audiology</li>
                </ul>
                </div>
                <div  style={imgstyle1}>
                    <img src={specificimage} alt="" />
                </div>
                <div style={lastcontent}>
                    <h2>OUR OFFERINGS PATIENT CAREGIVER</h2>
                    <div style={templatesContainerStyle}>
                    <div style={templateStyle}>
                        
                        <p><b>SERVICE OFFERINGS.</b></p>
                        <li> Assist in movement on bed</li>
                         <li>Assistance in activities of daily living</li>
                         <li>Mobility assisstance</li> 
                       <li> Maintain personal hygiene</li>
                       <li>Reminder for Medication</li>
                       <li>Assistance in ambulation</li>
                       <li>Companionship and care</li>
                    </div>
                    </div>
                </div>
                <img src={specificImage} style={imgStyle} />
        </div>
    );
};

export default Services;
