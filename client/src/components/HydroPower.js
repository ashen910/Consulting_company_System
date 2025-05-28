import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';



export default class HydroPower extends Component {
        render(){
       return (


    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://www.tricitiesbusinessnews.com/wp-content/uploads/2019/06/ice-harbor-night.jpg' height='600' alt='...' />
          <MDBCarouselCaption>
            <h4>HYDRO PROJECT</h4>
           <b> <p>The main conclusion from the study is to recommend that a firm potential exists for developing a 2500 kW small hydroinstallation on Urubokka ganga  at Keselwatte.1000 kW was  developed initially as phase 1 and is grid connected.  Developers during the first year of operation have found that there is sufficient flow in the river to enhance the plant capacity. All basic details of the project are  shown in 2011 Feasibility Report.</p></b>
            {/* <MDBBtn className='mx-2' color='warning'>
              <b>See More.....</b>
            </MDBBtn> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://img.manufacturing.net/files/base/indm/all/image/2018/09/mnet_196117_hydropower_plant__moreen_mbogo__construction_review_.png?auto=format&fit=max&w=1440'  height='600' alt='...' />
          <MDBCarouselCaption>
            <h3>	What is hydropower?</h3>
           <b> <p>•	Hydropower, or hydroelectric power, is a renewable source of energy that generates power by using a dam or diversion structure to alter the natural flow of a river or other body of water.</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://www.solarreviews.com/content/images/blog/post/focus_images/312_image-Gov28-Hydro-IH-7197-696x392.jpg'   height='600' alt='...' />
          <MDBCarouselCaption>
            <h3>How does hydro power work?</h3>
          <b>  <p>•	Hydropower plants capture the energy of falling water to generate electricity. A turbine converts the kinetic energy of falling water into mechanical energy. Then a generator converts the mechanical energy from the turbine into electrical energy.</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src='https://images.fineartamerica.com/images-medium-large-5/kentucky-dam-at-night-mike-stanfield.jpg'  height='600' alt='...' />
          <MDBCarouselCaption>
            <h3>What are examples of hydropower?</h3>
          <b>  <p>•	The most common type of hydroelectric power plant is an impoundment facility. An impoundment facility, typically a large hydropower system, uses a dam to store river water in a reservoir. Water released from the reservoir flows through a turbine, spinning it, which in turn activates a generator to produce electricity.</p></b>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    
    
  );
}
}
