import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-left' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol className='col-md-3 mt-md-0 mt-3'>
            <h5 className="text-uppercase"><b>CAREERS </b></h5>

            <MDBBtn outline className='mx-3' color='light' >
              <MDBIcon fas icon="search" size='2x' />
              Job opertunities
            </MDBBtn>

          </MDBCol>

          <MDBCol className="col-md-5 mb-md-0 mb-3">
            <h5><b>Connect</b></h5>
            <ul className="list-unstyled">
              <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
            </ul>
          </MDBCol>

          <MDBCol className=" col-md-4 mb-md-0 mb-3">
            <ul className="list-unstyled">
              <form>
                <input class="form-control me-2" type="search" placeholder="Email Address" aria-label="Search" />
                <p className='text-dark-80' ><b>Please enter a valid email address</b></p>
                <MDBBtn className='mx-2' color='danger'>
                  Subscribe !
                </MDBBtn>
              </form>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        &copy; {new Date().getFullYear()}{' '}
        <a className='text-dark' href='#'>
          <b>Copyrights @ RAVANA Engineering Consultants (Pvt) Ltd</b>
        </a>
      </div>
    </MDBFooter>
  );
}