import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import specificImage from './images/forhome.jpg'; // Assuming you have imported the specific image
import Specificimage1 from './images/forhomee.png';
import Nav from './Nav';
const Home = () => {
    const divStyle = {
        position: 'relative',
        minHeight: '100vh', // Ensure it covers at least the viewport height
        width: '100%', // Ensure it covers the viewport width
        overflow: 'hidden', // Prevents horizontal scrolling
    };

    

    
    const contentStyle = {
        marginTop: '100px', // Adjust to position below the navbar
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 1,
        color: 'black',
        textAlign: 'left',
        display: 'flex', // Ensure children elements are in a flex container
        alignItems: 'center', // Align items vertically
        justifyContent: 'space-between', // Ensure space between image and text
    };

    const textContainerStyle = {
        maxWidth: '60%', // Adjusted to leave space for the image
        
    };

    const imgStyle = {
        width: '300px', // Adjust size as needed
        height: 'auto', // Adjusted to maintain aspect ratio
        borderRadius: '10px', // Added border radius for rounded corners
        margin: '20px',
    };

    const bottomContentStyle = {
        paddingTop: '50px', // Space above the section
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 1,
        color: 'black',
        textAlign: 'center',
    };

    const templatesContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px', // Margin for spacing between h1 and templates
    };

    const templateStyle = {
        width: '22%', // Adjust width to fit four templates
        height: 'auto', // Adjust height as needed
        background: 'linear-gradient(360deg, #4F1787, #007BFF)', // Gradient with #4F1787 and #007BFF
        color:'white',
        borderRadius: '10px',
        padding: '10px', // Added padding for content spacing
        animation: 'move 3s infinite alternate', // Add animation for moving effect
    };

    const keyframes = `
        @keyframes move {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
        }
    `;

    const overviewStyle = {
        paddingTop: '50px', // Space above the section
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex', // Flex container for side-by-side layout
        justifyContent: 'space-between', // Space between content and image
        alignItems: 'center', // Vertically align items
    };

    const overviewTextStyle = {
        maxWidth: '60%', // Adjust width to leave space for the image
    };
    const imgStyle1={
        width: '300px', // Adjust size as needed
        height: 'auto', // Adjusted to maintain aspect ratio
        borderRadius: '10px', // Added border radius for rounded corners
        margin: '20px',
        backgroundColor:'black'
    }

    return (
        <div style={divStyle}>
            <style>{keyframes}</style> {/* Include keyframes in the style */}
            <Nav  />
            <div style={contentStyle}>
                <div style={textContainerStyle}>
                    <h1>Our Mission</h1>
                    <p><b>To make healthcare accessible to all.</b></p>
                </div>
                <img src={specificImage}  style={imgStyle} />
            </div>
            <div style={bottomContentStyle}>
                <h1>Our Story Grew From Seeds of Compassion</h1>
                <div style={templatesContainerStyle}>
                    <div style={templateStyle}>
                        <b>2015</b>
                        <p><b>SPMA HealthCare Starts.</b></p>
                        <p>In 2015 SPMA Started by Founder of DR.P.Manikandan.</p>
                    </div>
                    <div style={templateStyle}>
                        <b>2017</b>
                        <p><b>Launch of the Multi Specality Hospital (MSMC)</b></p>
                        <p>In 2017 Launch our First MSMC in Banglore</p>
                    </div>
                    <div style={templateStyle}>
                        <b>2020</b>
                        <p><b>Padma Bhushan Award</b></p>
                        <p>In 2020 Dr P.Manikandan Receives Padma Bhushan, the third highest Civilian Award.</p>
                    </div>
                    <div style={templateStyle}>
                        <b>2023</b>
                        <p><b>International Hospital</b></p>
                        <p>In 2023 Our First International Hospital - Health City Cityman City operations.</p>
                    </div>
                </div>
            </div>
            <div style={overviewStyle}>
                <div style={overviewTextStyle}>
                <h1>Overview</h1>
                <h4>Our Purpose:Keeping People Healthy</h4>
                <p>Beyond Treating you With Care when you are sick,Our goal is to ensure your long-term well-being.We prioritize your overall health-considering your body,emotions,and mind.</p>
                </div>
                <img src={Specificimage1} style={imgStyle1}/>
            </div>
        </div>
    );
};

export default Home;
