import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit';

//advertisments
export default class Advertisements extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ads: []
    };

  }


  componentDidMount() {
    this.retrieveAds();
  }

  retrieveAds() {
    axios.get("/ads").then(res => {
      if (res.data.success) {
        this.setState({
          ads: res.data.existingAds
        });

        console.log(this.state.ads);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/ad/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveAds();
    })
  }


  filterData(ads, searchKey) {

    const result = ads.filter((ad) =>
      ad.category.toLowerCase().includes(searchKey)
    )

    this.setState({ ads: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/ads").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingAds, searchKey)
      }
    });

  }


  render() {
    return (


      <div className="container">
          <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

          </div>
          <div className="col-lg-3 mt-2 mb-2" >

            <input
              className="form-control"
              type="searh"
              placeholder="Search By Project Category"
              name="searchQuery"
              onChange={this.handleSearchArea}>

            </input> &nbsp;&nbsp;&nbsp;

          </div>
        </div>
     
        <div id="wrapper">
    <div id="containerJoin">
<center>
        <h1 className="gifJoin">We are hiring!</h1>
      </center>
    </div>
</div>
        <br />

        <MDBCol>
          <center>
            <MDBCard style={{ width: '40rem', }} >
              {this.state.ads.map((ads, index) => (
                <b key={index}>
                  <h8 className='text-white mb-3' scope="row">{index + 1}</h8>
                  <center>




                    <MDBCardImage style={{ width: '24rem' }} position='top' alt='...' src={`${ads.img}`} />
                  </center>
                  <MDBCardBody>
                    <center>
                      <MDBCardText>
                        <h4 style={{ color: "#003399" }}> <b>We are hiring Junior Consultants</b> </h4><br />
                        <a href={`/ad/${ads._id}`} style={{ textDecoration: 'none' }}>
                          {ads.notice}
                        </a>
                      </MDBCardText>
                    </center>
                  </MDBCardBody>
                  <MDBListGroup flush>

                    <center>
                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Project Category :-</b> <b style={{ color: `${ads.color}` }}> {ads.category}</b></MDBListGroupItem>
                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Looking for:- </b> <b style={{ color: `${ads.color}` }}> {ads.type}</b></MDBListGroupItem>

                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Qualifications :-</b> <b style={{ color: `${ads.color}` }}> {ads.qualification}</b></MDBListGroupItem>
                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Years of Experience :- </b> <b style={{ color: `${ads.color}` }}> {ads.experience}</b></MDBListGroupItem>
                      <MDBListGroupItem><b className='text-warning'><u>Closing Date :- {ads.date}</u></b></MDBListGroupItem>


                    </center>


                  </MDBListGroup>

                  <center>
                    <MDBCardText className='text-dark'>
                      <h6><i style={{ color: `${ads.color}` }}>Fill the application & Email your CV</i></h6>

                    </MDBCardText>
                    <b style={{ color: `${ads.color}` }}>Contact for more details: {ads.contact} </b>
                    <MDBCardBody>

                      <MDBBtn color='secondary' href='/jobApplicatonForm'>Apply Now</MDBBtn> <br /> 
                      




                    </MDBCardBody>
                  </center>
                  <hr /><h1> ------------------------------------------------</h1><h1> ------------------------------------------------</h1><hr />

                  <br />

                </b>


              ))}


            </MDBCard>
          </center>
        </MDBCol>


        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br /><br /> <br />


      </div>


    )
  }
}
