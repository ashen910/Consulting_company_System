import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default class Reforestation extends Component {
        render(){
       return (

    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://media.istockphoto.com/photos/young-plant-growing-in-garden-with-sunlight-picture-id1085122412?k=20&m=1085122412&s=170667a&w=0&h=encjMIuQ2asy-rM4xOVEdYdaPA9DWJkeHxCNGDhGrbI=' height='600' alt='...' />
          <MDBCarouselCaption>
            <h2>Reforestation</h2>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-157558622-1560288135.jpg' height='600' alt='...' />
          <MDBCarouselCaption><b>
            <h5 className='text-dark mb-3'>Reforestation</h5>
            <p className='text-dark mb-3'>What is the reforestation?
Reforestation is the process of planting trees in a forest where the number of trees has been decreasing. Afforestation is when new trees are planted or seeds are sown in an area where there were no trees before, creating a new forest.
</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://i.pinimg.com/originals/88/52/36/885236b102876b0b7d16d081a7d0657c.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5>Reforestation</h5>
            <p>Importance of Reforestation:
It is of massive importance to recover the damage caused to nature to protect our balanced life cycle. The destruction of forests could be the fault of human beings or nature may also pose a threat to these forests. We can only control what happens due to human negligence. Natural disasters can’t be controlled or denied. Whatever the reason may be, there is always a need to make the necessary arrangements to recover from the damage. When it’s about forests, we should place it as our foremost priority to recover destroyed forests through the reforestation process. Importance of reforestation is undeniable because it maintains the balance in our environment.
</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src='https://i.pinimg.com/originals/88/52/36/885236b102876b0b7d16d081a7d0657c.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5>Reforestation</h5>
            <p>	Reforestation after disturbances improves forest health. By planting the right species, reforestation helps makes our forests more resilient to future challenges like climate change and wildfire.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    
    
  );
}
}
