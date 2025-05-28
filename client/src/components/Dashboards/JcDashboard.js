import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


export default function App() {
    return (
        <div className="back fixed" style={{ zIndex: 8 }}>
            <div class="d-grid gap-2 col-6 mx-auto">
                <br />

                <center>
                    <h1><b>Junior Consultant Dashboard <MDBIcon fas icon="angle-double-right" /></b></h1><br /> <br />

                    <div className="row">
                        <div className="col">
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <MDBCard style={{ maxWidth: '50rem', height: '20rem' }}><br /> <br /><br />
                                    <MDBIcon className='text-dark' fas icon="user-friends" size='2x' /><br />

                                    <MDBCardBody>
                                        <MDBCardTitle><b>Project Team Profile</b></MDBCardTitle>

                                        <MDBBtn href='/jcProjectTeams' color='info'><b>Click Here</b></MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </div>



                        <div className="col">
                            <div className="form-group" style={{ marginBottom: '15px' }}>


                                <MDBCard style={{ maxWidth: '50rem', height: '20rem' }}><br /> <br /><br />

                                    <MDBIcon className='text-dark' fas icon="newspaper" size='2x' /><br />
                                    <MDBCardBody>
                                        <MDBCardTitle><b>Project Details Profile</b></MDBCardTitle>
                                        <MDBBtn href='/projectDetailsProfiles' color='info'>Click Here</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </div>
                    </div><br /><br />

                    <div>
                        <MDBBtn className='mx-2' color='primary' href="/">
                            <MDBIcon fas icon="angle-double-left" size='1x' /><b>Log Out</b>
                        </MDBBtn>
                    </div>


                </center>




            </div><br /><br /><br /><br />
        </div>
    );
}