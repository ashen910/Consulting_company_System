import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default class Solar extends Component {
        render(){
       return (

    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://www.hinicio.com/file/2016/06/bigstock-worldwide-sustainable-energy-web.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h2 className='text-dark mb-3'>Solar Power</h2>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://uploads-ssl.webflow.com/5eb6c518ccd7e71d49519db8/5f35ac0e1aa0d2054bfd6157_renewable_energy_sources-e1551858601606.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5 >What is the solar power?</h5>
            <b><p className='text-dark mb-3'>•	Solar power is energy from the sun that is converted into thermal or electrical energy. Solar energy is the cleanest and most abundant renewable energy source available, and the U.S. has some of the richest solar resources in the world.</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://img.favpng.com/4/14/25/renewable-energy-solar-energy-solar-power-photovoltaic-system-energy-conservation-png-favpng-9KSLPaC8CAf4PQ3gEqKGM2wVY.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5 className='text-dark mb-3'>Is solar power as good as electricity?</h5>
           <b> <p className='text-dark mb-3'>•	Clearly, solar power is more cost-effective than “regular” or standard electricity. According to the World Economic Forum (WEF), installing new solar panels is cheaper than a comparable investment in coal, natural gas or other fossil fuel options. ... Harnessing the power of the sun directly cuts out the middleman.</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src='https://iask.hu/wp-content/uploads/2018/12/sustainable-energy-1.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h5 className='text-dark mb-3'>What is solar power usually used for?</h5>
           <b> <p className='text-dark mb-3'>•	People can use this heated liquid directly or as part of a process that requires heat. These collectors are popular for home water heating and space heating. More complex versions of these systems can concentrate enough solar energy to power a small city.</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    
    
  );
}
}



