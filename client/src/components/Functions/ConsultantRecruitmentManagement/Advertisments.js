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
      ad.date.toLowerCase().includes(searchKey)
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


      <div className="back fixed" style={{ zIndex: 8 }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mt-2 mb-2">
            <br /> <br />
            <center><h2 style={{ color: '#01579B' }}><b><span class="badge bg-info text-dark opacity-90 fs-1">2021 Job Advertisements</span></b></h2> <br /></center>

           <center>
            <button className="btn btn-success"><a href="/createAdvertisments" style={{ textDecoration: 'none', color: 'white' }}> <MDBIcon fas icon="plus-circle" size='2x' /> &nbsp;&nbsp;Create New Ad</a></button>
            </center>
          </div>
          <div className="col-lg-2 mt-2 mb-2" >

            <input
              className="form-control"
              type="searh"
              placeholder="Search By Date"
              name="searchQuery"
              onChange={this.handleSearchArea}>

            </input> &nbsp;&nbsp;&nbsp;

          </div>
        </div>

        <br /><br />

        <MDBCol>
          <center>
            <MDBCard style={{ width: '35rem' }} >
              {this.state.ads.map((ads, index) => (
                <b key={index}>
                  <h8 className='text-white mb-3' scope="row">{index + 1}</h8>
                  <center>




                    <MDBCardImage style={{ width: '24rem' }} position='top' alt='...' src={`${ads.img}`} />
                  </center>
                  <MDBCardBody>
                    <center>
                      <MDBCardText>
                        <h4 style={{ color: `${ads.color}` }}> <i>We are hiring Junior Consultants </i> </h4><br />
                        <a href={`/ad/${ads._id}`} style={{ textDecoration: 'none' }}>
                          {ads.notice}
                        </a>
                      </MDBCardText>
                    </center>
                  </MDBCardBody>
                  <MDBListGroup flush>

                    <center>
                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Project Category :-</b> <i style={{ color: `${ads.color}` }}> {ads.category}</i></MDBListGroupItem>
                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Looking for:- </b> <i style={{ color: `${ads.color}` }}> {ads.type}</i></MDBListGroupItem>

                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Qualifications :-</b> <i style={{ color: `${ads.color}` }}> {ads.qualification}</i></MDBListGroupItem>
                      <MDBListGroupItem><b style={{ color: `${ads.color}` }}>Years of Experience :- </b> <i style={{ color: `${ads.color}` }}> {ads.experience}</i></MDBListGroupItem>
                      <MDBListGroupItem><b className='text-warning'><u>Closing Date :- {ads.date}</u></b></MDBListGroupItem>


                    </center>


                  </MDBListGroup>

                  <center>
                    <MDBCardText className='text-dark'>
                      <h6><i style={{ color: `${ads.color}` }}>Fill the application & Email your CV</i></h6>

                    </MDBCardText>
                    <b style={{ color: `${ads.color}` }}>Contact for more details: {ads.contact} </b>
                    <MDBCardBody>

                      <MDBBtn color='secondary' href='#'>Apply Now</MDBBtn> <br />





                    </MDBCardBody>
                  </center>
                  <hr />
                  <div className="row">
                    <div className="col-sm-4">


                      <a href={`/editAdvertisments/${ads._id}`}>
                        <center>   <MDBIcon fas icon="edit" size='2x' /> &nbsp; </center>
                      </a>
                    </div>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <div className="col-sm-4">
                      <a href="#" onClick={() => window.confirm("Are you sure you wish to delete this advertisement ?") && this.onDelete(ads._id)}>
                        <MDBIcon color='danger' far icon="trash-alt" size='2x' />
                        &nbsp;
                      </a>


                    </div>
                  </div>
                  <br />
                  <hr /><h1> ------------------------------------------</h1><h1> ------------------------------------------</h1><hr />
                </b>


              ))}


            </MDBCard>
          </center>
        </MDBCol>


        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br /><br /> <br />


      </div>
      </div>


    )
  }
}
