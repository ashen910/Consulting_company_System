import React, {Component} from 'react';
import { MDBCard, MDBIcon, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem , MDBBtn} from 'mdb-react-ui-kit';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { MDBFooter, MDBContainer, MDBCardOverlay, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';


export default class Contact  extends Component {
    render() {
        return (
            
            <div>


<MDBCard background='dark' className='text-black'>
      <MDBCardImage overlay src='https://wallpaperaccess.com/full/2655944.jpg' alt='...' />
      <MDBCardOverlay>
    
        <MDBCarouselCaption className='text-black'>
            <center><h5><b>RAVANA Engineering Consultants (Pvt) Ltd</b></h5></center>
            <p>We look forward to collaborating with you on your project. Please contact us at:</p>
          </MDBCarouselCaption>
      </MDBCardOverlay>
    </MDBCard>




<MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
              pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </MDBCol>
         

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact Details</h5>

            <ul className='list-unstyled mb-0'>
            <li>
                <a href='#!' className='text-dark'>
                  	
               Facebook:	/PMAlliance
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Twitter:	/pmalliance
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                LinkedIn:	/company/pmallianceink 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'> <br/></h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  	
               Facebook:	/PMAlliance
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Twitter:	/pmalliance
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                LinkedIn:	/company/pmallianceink 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <br/><br/>
        <MDBRow>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
        
        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
           <centere>
           <MDBCard style={{ maxWidth: '25rem' }} >
         <MDBCardImage src='https://www.google.com/maps/d/thumbnail?mid=125AXCUMg-tCJCWYzU4lIJrqKIn0&hl=en'  alt='...' />
         
       </MDBCard>
           </centere>     
             </MDBCol>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
             
   
             <br/><br/>
           <MDBRow>
       
           <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
               
               <h5 className='text-uppercase'>Corporate Headquarters</h5>
   
               <ul className='list-unstyled mb-0'>
                 <li>
                   <a href='#!' className='text-dark'>
                   3355 Lenox Road<br/>
                   Suite 750<br/>
                   Atlanta, GA 30326<br/>
                   </a>
                 </li>
                
                  
               </ul>
             </MDBCol>
             </MDBRow>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <MDBCol lg='3' md='8' className='mb-4 mb-md-0'>
               <h5 className='text-uppercase'>Billing</h5>
   
               <ul className='list-unstyled mb-0'>
                 <li>
                   <a href='#!' className='text-dark'>
                   PMAlliance, Inc.<br/>
                   P.O. Box 621<br/>
                   Tucker, GA 30085
                   </a>
                 </li>
                
                  
               </ul>
             </MDBCol>
             </MDBRow>
   
   
         </MDBContainer>
       </MDBFooter>
       </div>
       )
       }
       }
