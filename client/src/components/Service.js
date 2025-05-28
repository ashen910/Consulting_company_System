import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';


export default function App() {
  return (

    
    <><br/><br/> <center><MDBBtn outline className='mx-2' color='primary'>
          <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>
        <h2>Our Services</h2>
      </MDBBtn></center>
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <MDBRow className='row-cols-1 row-cols-md-5 g-5'>
         &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <center><MDBCol>
              <MDBCard className='h-100'>
                  <MDBCardImage
                      src='https://empowerplus.in/wp-content/uploads/2020/07/graphics.png'
                      alt='...'
                      position='top' />
                      
                  <MDBCardBody>
                      <center><MDBCardTitle><b>View PreDesign Projects </b></MDBCardTitle></center>
                      <center><MDBCardText>
                      Dear clients! Visit our site.Have a look at pre-designed project and give yourself your project to us. We'll fulfill your requirements.
                      </MDBCardText></center>
                  </MDBCardBody>
                  
              </MDBCard>
          </MDBCol>
          </center>

          &nbsp;&nbsp;


          <MDBCol>
              <MDBCard className='h-100'>
                  <MDBCardImage
                      src='https://www.nicepng.com/png/full/208-2087825_it-services-products-and-services-icon.png'
                      alt='...'
                      position='top' />
                  <MDBCardBody>
                      <center><MDBCardTitle><b>Workshops</b></MDBCardTitle></center>
                      <center><MDBCardText> We maintain workshops for applicants.They can learn to have a good knowledge as well as experiences.</MDBCardText></center>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol>
              <MDBCard className='h-100'>
                  <MDBCardImage
                      src='https://www.kuzneski.com/hubfs/Icons/Kuzneski%20HR%20colorful%20icon2-01-1.png'
                      alt='...'
                      position='top' />
                  <MDBCardBody>
                      <center><MDBCardTitle><b>Choose your consultant as you wish</b></MDBCardTitle></center>
                      <center><MDBCardText>
                      As our company have well experienced consultants, the client has the ability to choose the consultant they want.
                      </MDBCardText></center>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>

          &nbsp;&nbsp;

          <MDBCol>
              <MDBCard className='h-100'>
                  <MDBCardImage
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx32oNtfUuJnMUCIIsNEiuxq_RIMkoh2-BfQ&usqp=CAU'
                      alt='...'
                      position='top' />
                  <MDBCardBody>
                      <center><MDBCardTitle><b>Redarding Cash or Card Payments</b></MDBCardTitle></center>
                      <center><MDBCardText>
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                      </MDBCardText></center>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>

      &nbsp;&nbsp;

      <center><MDBCol  className='row-cols-1 row-cols-md-5 g-3'>
          <MDBCard className='h-50'>
              <MDBCardImage
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhh0sRf_M3AgUZ-16QTQJ1xH8NFpCGgtNERPb1JmjsFOR3K8l1Jx8ndgk0DCem3W95ga0&usqp=CAU'
                  alt='...'
                  position='top' />
              <MDBCardBody>
                  <center><MDBCardTitle><b>Contact Us</b></MDBCardTitle></center>
                  <center><MDBCardText>
                  To get our service and to get further information about our website call us:
                  </MDBCardText></center>
              </MDBCardBody>
          </MDBCard>
      </MDBCol>
      </center>
       </>


  );
}
