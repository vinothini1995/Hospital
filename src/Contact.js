import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaUser, FaEnvelope, FaRegComment } from 'react-icons/fa';
import imgsource from './images/contact-image.jpg';
import Nav from './Nav';

const Contact = () => {
  const divStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflowX: 'hidden',
    backgroundColor: '#f0f0f0', // Light gray background
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white', // White text color
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
    color: 'white', // White text color
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF', // Blue button background
    border: 'none',
    margin: '0 10px',
    padding: '10px 20px',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 20px 20px 20px',
    textAlign: 'center',
    color: '#333', // Adjust text color for better readability
  };

  const paragraphStyle = {
    maxWidth: '800px', // Adjust maximum width for better readability
    textAlign: 'justify',
    marginBottom: '20px',
    color: '#555', // Darker gray text color
  };

  const imageWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px', // Add margin bottom for spacing
  };

  const imgStyle = {
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '300px', // Limit image height to prevent it from being too large
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Light shadow for image
  };

  const formStyle = {
    maxWidth: '600px', // Limit form width for better alignment
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white', // White background for form
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Light shadow for form
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Light shadow for inputs
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Light shadow for textarea
  };

  const sectionStyle = {
    margin: '20px 0',
    padding: '50px',
    border: '10px',
    borderColor: 'silver',
    borderStyle: 'solid',
    backgroundColor: '#f9f9f9', // Light gray background for sections
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Light shadow for sections
  };

  const sectionWrapperStyle = {
    display: 'flex',
    margin: '20px',
    padding: '20px',
    border: '2px solid grey',
    cursor: 'pointer',
    backgroundColor: '#fff', // White background for wrapper
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Light shadow for wrapper
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#007BFF', // Blue color for icons
  };

  return (
    <div style={divStyle} className="animated-div">
     <Nav />
      <div style={contentStyle}>
        <h1 style={{ color: '#007BFF' }}>Contact Us</h1>
        <p style={paragraphStyle}>
          Our HealthCare is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill out the form below and we will get back to you.
        </p>
        <div style={imageWrapperStyle}>
          <img src={imgsource} alt="Contact Us" style={imgStyle} />
        </div>
        <form style={formStyle} className="animated-div">
          <div style={labelStyle}>
            <FaUser style={iconStyle} />
            <input type="text" name='name' placeholder='Enter your name' style={inputStyle} />
          </div>
          <div style={labelStyle}>
            <FaEnvelope style={iconStyle} />
            <input type="email" name='email' placeholder='Enter your email' style={inputStyle} />
          </div>
          <div style={labelStyle}>
            <FaRegComment style={iconStyle} />
            <textarea name="message" id="message" placeholder='Enter your message' style={textareaStyle}></textarea>
          </div>
          <button style={buttonStyle}>SUBMIT</button>
        </form>
        <div style={sectionWrapperStyle}>
          <div style={sectionStyle} className="animated-section">
            <h2><FaPhoneAlt style={iconStyle} />CALL US</h2>
            <p>123-456-7890</p>
          </div>
          <div style={sectionStyle} className="animated-section">
            <h2><FaMapMarkerAlt style={iconStyle} />LOCATION</h2>
            <p>123 Hospital St, City, Country</p>
          </div>
          <div style={sectionStyle} className="animated-section">
            <h2><FaClock style={iconStyle} />HOURS</h2>
            <p>Monday - Friday: 9am - 5pm</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-div {
          animation: fadeIn 1s ease-out;
        }

        .animated-section {
          animation: fadeIn 1.5s ease-out;
        }

        form input, form textarea, form button {
          transition: all 0.3s ease;
        }

        form input:focus, form textarea:focus, form button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Contact;
