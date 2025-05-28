import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default class SearchYourProject extends Component {
    render() {
        return (

            <div>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <center>
                    <br /> <br /> <br />

                    <img style={{ width: '15rem' }} alt='...' src='https://i1.wp.com/onlineretailhub.in/wp-content/uploads/2021/03/finding-signatures.gif' />
                      <h1><b>SEE YOUR  <MDBIcon fas icon="angle-double-down" size='1x' /></b></h1><br /> <br /> 

                    <div className="row">
                        <div className="col">
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <MDBCard style={{ maxWidth: '22rem' }}>
                                    <MDBIcon fas icon="tasks" size='10x' />

                                    <MDBCardBody>
                                        <MDBCardTitle><b>Project Progress</b></MDBCardTitle>

                                        <MDBBtn href='/allProgress' color='info'>Click Here</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </div>



                        <div className="col">
                            <div className="form-group" style={{ marginBottom: '15px' }}>


                                <MDBCard style={{ maxWidth: '22rem' }}>

                                    <MDBIcon fas icon="file-invoice-dollar" size='10x' />
                                    <MDBCardBody>
                                        <MDBCardTitle><b>Project Cash-Flow</b></MDBCardTitle>
                                        <MDBBtn href='/allCashFlows' color='info'>Click Here</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </div>
                    </div>
                    <div><br /> <br />
                        <MDBBtn className='mx-7' color='primary' href="/">
                            <MDBIcon fas icon="angle-double-left" size='1x' /><b>Log Out</b>
                        </MDBBtn>
                    </div>


                </center>
                <br /> <br /> <br /> <br /> <br />
            </div>


        )
    }
}
