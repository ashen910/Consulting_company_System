import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <div className="hcDash fixed" style={{ zIndex: 8 }}>
      <div class="d-grid gap-2 col-6 mx-auto">
        <br />
        <h1>Head Consultant Dashboard <MDBIcon fas icon="angle-double-right" /> </h1>

        <MDBBtn color='info' href="/viewAppoinments"><h6 className='text-dark'><b>Clients</b></h6>  <MDBIcon className='text-dark' fas icon="user-tie" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/viewApplicants"><h6 className='text-dark'><b>Applicants</b></h6>  <MDBIcon className='text-dark' fas icon="newspaper" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/ongoingProjects"><h6 className='text-dark'><b>Ongoing Projects</b></h6>  <MDBIcon className='text-dark' fas icon="chart-pie" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/projectTeams"><h6 className='text-dark'><b>Project Teams</b></h6>  <MDBIcon className='text-dark' fas icon="user-friends" size='2x' /></MDBBtn>
        <MDBBtn color='info' href="/projectCashFlows"><h6 className='text-dark'><b>Project Cash-Flows</b></h6>  <MDBIcon className='text-dark' fas icon="dollar-sign" size='2x' /></MDBBtn>
        <br /><br /><br />

        <div>
          <MDBBtn className='mx-2' color='primary' href="/">
            <MDBIcon fas icon="angle-double-left" size='1x' /><b>Log Out</b>
          </MDBBtn>
        </div>




      </div>
    </div>
  );
}