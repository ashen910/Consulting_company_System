import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';



export default function App() {
  return (

    <div className="admDash fixed" style={{ zIndex: 8 }}>
      <div class="d-grid gap-2 col-6 mx-auto"  >

        <br />
        <h1>Administrator Dashboard <MDBIcon fas icon="angle-double-right" /></h1>


        <MDBBtn color='info' href="/userProfiles"><h6 className='text-dark'><b>User Management</b></h6>  <MDBIcon className='text-dark' fas icon="users" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/adminNotificationSection"><h6 className='text-dark'><b>Notification & News</b></h6>  <MDBIcon className='text-dark' fas icon="newspaper" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/workshopTimetable"><h6 className='text-dark'><b>Workshop</b></h6>  <MDBIcon className='text-dark' fas icon="people-carry" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/advertisments"><h6 className='text-dark'><b>Advertisement</b></h6>  <MDBIcon className='text-dark' fas icon="newspaper" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/feedback"><h6 className='text-dark'><b>Feedback</b></h6>  <MDBIcon className='text-dark' fas icon="comments" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/salesRecords"><h6 className='text-dark'><b>Pre Design Projects</b></h6><MDBIcon className='text-dark' fas icon="file-pdf" size='2x' /></MDBBtn><br /><br /><br />


        <div>
          <MDBBtn className='mx-2' color='primary' href="/">
            <MDBIcon fas icon="angle-double-left" size='1x' /><b>Log Out</b>
          </MDBBtn>
        </div>



      </div>
    </div>
  );
}






