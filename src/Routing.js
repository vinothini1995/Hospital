import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Doctor from './Doctor'
import Doctordetails from './Doctordetails'
import Staffs from './Staffs'
import Staffsdetails from './Staffsdetails'
import Patient from './Patient'
import Patientdetails from './Patientdetails'
import AddDoctor from './AddDoctor'
import Signup from './Signup'
import LoginDoctor from './LoginDoctor'
import AddStaffs from './AddStaffs'
import LoginStaff from './LoginStaff'
import AddPatients from './AddPatients'
import Loginpatient from './Loginpatient'
import PatientList from './PatientList'
import Home from './Home'
// import Appointments from './Appointments'
import Services from './Services'
import Contact from './Contact'
import StaffList from './StaffList'
import DoctorList from './DoctorList'
import Nav from './Nav'

const Routing = () => {
  return (
    <div>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Login/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Doctor" element={<Doctor />} />
                <Route path="/Doctordetails" element={<Doctordetails />} />
                <Route path="/Staffs" element={<Staffs />} />
                <Route path="/Staffsdetails" element={<Staffsdetails />} />
                <Route path="/Patient" element={<Patient />} />
                <Route path="/Patientdetails" element={<Patientdetails />} /> 
                <Route path="/AddDoctor" element={<AddDoctor />} />
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/LoginDoctor" element={<LoginDoctor />} />
                <Route path="/AddStaffs" element={<AddStaffs />}/>
                <Route path="/LoginStaff"  element={<LoginStaff />}/>
                <Route path="/AddPatients" element={<AddPatients/>}/>
                <Route path="/LoginPatient" element={<Loginpatient />}/>
                <Route path="/PatientList" element={<PatientList />}/>
                {/* <Route path="/Appointments" element={<Appointments />} /> */}
                <Route path="/Services" element={<Services />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/StaffsList" element={<StaffList />} />
                <Route path="/DoctorList" element={<DoctorList />} />
                <Route path="/Nav" element={<Nav />} />
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Routing