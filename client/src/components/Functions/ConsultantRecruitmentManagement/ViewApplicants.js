import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBTable } from 'mdb-react-ui-kit';

export default class ViewApplicants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants: []
    };

  }


  componentDidMount() {
    this.retrieveApplicants();
  }

  retrieveApplicants() {
    axios.get("/applicants").then(res => {
      if (res.data.success) {
        this.setState({
          applicants: res.data.existingApplicants
        });

        console.log(this.state.applicants);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/applicant/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveApplicants();
    })
  }


  filterData(applicants, searchKey) {

    const result = applicants.filter((applicant) =>
      applicant.name.toLowerCase().includes(searchKey) ||
      applicant.email.toLowerCase().includes(searchKey) ||
      applicant.url.toLowerCase().includes(searchKey)
    )

    this.setState({ applicants: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/applicants").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingApplicants, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <div style={{ width: '20%', marginLeft: '80%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search by name"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Applicant Details</h1>

            </center>
          </div><br /> <br /><br /> <br /><br />
        <div >
          <br />
          <table class="table table-bordered " >


            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">NIC</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
                <th scope="col">LinkedIn Url</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.applicants.map((applicants, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">10{index + 1}</th>
                  <td class="table-light">
                    <a href={`/applicant/${applicants._id}`} style={{ textDecoration: 'none' }}>
                      {applicants.name}
                    </a>
                  </td>
                  <td class="table-light" >{applicants.gender}</td>
                  <td class="table-light" >{applicants.nic}</td>
                  <td class="table-light" >{applicants.address}</td>
                  <td class="table-light">{applicants.contact}</td>
                  <td class="table-light" >{applicants.email}</td>
                  <td class="table-light">{applicants.url}</td>
                  <td class="table-light" >

                    <a href="#" onClick={() => window.confirm("Are you sure you wish to delete this applicant ?") && this.onDelete(applicants._id)}>

                      <MDBIcon color='danger' far icon="trash-alt" size='2x' />
                    </a>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <center>
          <a className="btn btn-warning text-dark " href="/newJcReport" >
            <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b></a></center>


        <br></br>
        <br></br>
        <br></br>

      </div>

    )
  };
};
