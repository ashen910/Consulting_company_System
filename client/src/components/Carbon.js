import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default class Carbon extends Component {
        render(){
       return (

    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://i.pinimg.com/originals/88/52/36/885236b102876b0b7d16d081a7d0657c.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5>Carbon Projects</h5>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://i.pinimg.com/originals/88/52/36/885236b102876b0b7d16d081a7d0657c.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5>Carbon Projects</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://i.pinimg.com/originals/88/52/36/885236b102876b0b7d16d081a7d0657c.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5>Carbon Projects</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src='https://i.pinimg.com/originals/88/52/36/885236b102876b0b7d16d081a7d0657c.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5>Carbon Projects</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    
    
  );
}
}
