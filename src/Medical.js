import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Medical = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row' // default value, can be omitted
    }
    const medicalstyle = {
        backgroundColor: 'grey',
        display: 'flex', // Apply display: flex to make its children (icon and text) align horizontally
        flexDirection: 'column', // Set flex direction to column to align its children vertically
        alignItems: 'center', // Align children elements in the center horizontally
        padding: '20px',
        borderRadius: '5px',
        margin: '10px'
    };

  return (
    <div  style={containerStyle}><div className='doctor' style={medicalstyle}>
       <i style={{ fontSize : "250px"}} className="fa-solid fa-suitcase-medical"></i>
       <p style={{fontSize : "25px"}}><b>Medical</b></p>
    </div>
    </div>
  )
}
export default Medical