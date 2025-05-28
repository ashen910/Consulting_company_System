import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class ViewAppointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: []
    };

  }


  componentDidMount() {
    this.retrieveAppointments();
  }

  retrieveAppointments() {
    axios.get("/appointments").then(res => {
      if (res.data.success) {
        this.setState({
          appointments: res.data.existingAppointments
        });

        console.log(this.state.appointments);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/appointment/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveAppointments();
    })
  }

  filterData(appointments, searchKey) {

    const result = appointments.filter((appointment) =>
      appointment.clientname.toLowerCase().includes(searchKey) ||
      appointment.companyname.toLowerCase().includes(searchKey)


    )

    this.setState({ appointments: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/appointments").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingAppointments, searchKey)
      }
    });

  }




  render() {
    return (



      <div className="hc">
        <div className="back fixed" style={{ zIndex: 8 }}>
          <br />
          <div style={{ width: '20%', marginLeft: '80%' }}>
            <form className="d-flex">
              <input className="form-control me-2"
                type="search"
                placeholder="Search By Client/Company Name"
                aria-label="Search" onChange={this.handleSearchArea}>
              </input>
            </form>
          </div>


          <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Appointment Details</h1>

            </center>
          </div>


          <div >
          <br /> <br /> <br /> 

            <h3><span class="badge bg-info text-dark opacity-90 ">Contact Information</span></h3>
            <table class="table table-bordered " >
              <thead class="table-info">
                <tr>
                  <th scope="col">Appoinment No</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Country</th>

                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((appointments, index) => (
                  <tr key={index}>
                    <th class="table-light" scope="row">100{index + 1}</th>
                    <td class="table-light">
                      <a href={`/appointment/${appointments._id}`} style={{ textDecoration: 'none' }}>
                        {appointments.clientname}
                      </a>
                    </td>
                    <td class="table-light">
                      <a href={`/appointment/${appointments._id}`} style={{ textDecoration: 'none' }}>
                        {appointments.companyname}
                      </a>
                    </td>
                    <td class="table-light">{appointments.email}</td>
                    <td class="table-light">{appointments.phonenumber}</td>
                    <td class="table-light">{appointments.country}</td>

                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <h3><span class="badge bg-info text-dark opacity-90 ">Appointment Details</span></h3>
            <table class="table table-bordered " >
              <thead class="table-info">
                <tr>
                  <th scope="col">Appoinment No</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Project Category</th>
                  <th scope="col">Time Period</th>
                  <th scope="col">Discussion Platform</th>
                  <th scope="col">Additional Notes</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((appointments, index) => (
                  <tr key={index}>
                    <th class="table-light" scope="row">100{index + 1}</th>
                    <td class="table-light">
                      <a href={`/appointment/${appointments._id}`} style={{ textDecoration: 'none' }}>
                        {appointments.clientname}

                      </a>
                    </td>
                    <td class="table-light">
                      <a href={`/appointment/${appointments._id}`} style={{ textDecoration: 'none' }}>
                        {appointments.companyname}

                      </a>
                    </td>
                    <td class="table-light">{appointments.projectcategory}</td>
                    <td class="table-light">{appointments.timeperiod}</td>
                    <td class="table-light">{appointments.discussionplatform}</td>
                    <td class="table-light">{appointments.additionalnotes}</td>
                    <td class="table-light">
                      <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Ignore This Appointment ?") && this.onDelete(appointments._id)}>

                        <i className="far fa-trash-alt"></i>&nbsp;Ignore
                      </a>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            <br></br>

            <div>
              <center>
                <a className="btn btn-warning text-dark " href="/meetings" >
                  <MDBIcon fas icon="users" size='2x' />&nbsp;<b>Client Meeting Schedules</b>
                </a>


                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a className="btn btn-warning text-dark " href="/newClientReport" >
                  <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b>
                </a>

              </center>
            </div>
            <br />
            <br /> <br /> <br /> <br /> <br />
          </div>

        </div>
      </div>



    )
  }
}
