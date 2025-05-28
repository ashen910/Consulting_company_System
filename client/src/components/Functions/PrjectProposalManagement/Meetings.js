import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class Meetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetings: []
    };

  }


  componentDidMount() {
    this.retrieveMeetings();
  }

  retrieveMeetings() {
    axios.get("/meetings").then(res => {
      if (res.data.success) {
        this.setState({
          meetings: res.data.existingMeetings
        });

        console.log(this.state.meetings);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/meeting/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveMeetings();
    })
  }

  filterData(meetings, searchKey) {

    const result = meetings.filter((meeting) =>
      meeting.name.toLowerCase().includes(searchKey) ||
      meeting.companyname.toLowerCase().includes(searchKey)

    )

    this.setState({ meetings: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/meetings").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingMeetings, searchKey)
      }
    });

  }



  render() {
    return (
      <div className="Khome">
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
              <h1 className="gifJoin">All Client Meeting Shedules</h1>
            </center>
          </div>
      


        <div >
          <br /> <br /> <br /><br /> <br />


          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Meeting No</th>
                <th scope="col">Clinet Name</th>
                <th scope="col">Company Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Platform</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.meetings.map((meetings, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">M100{index + 1}</th>
                  <td class="table-light">
                    <a href={`/meeting/${meetings._id}`} style={{ textDecoration: 'none' }}>
                      {meetings.name}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/meeting/${meetings._id}`} style={{ textDecoration: 'none' }}>
                      {meetings.companyname}
                    </a>
                  </td>
                  <td class="table-light">{meetings.email}</td>
                  <td class="table-light">{meetings.date}</td>
                  <td class="table-light">{meetings.time}</td>
                  <td class="table-light">{meetings.platform}</td>
                  <td class="table-light">{meetings.description}</td>
                  <td class="table-light">
                    <a className="btn btn-warning" href={`/editMeetings/${meetings._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This Record ?") && this.onDelete(meetings._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Remove
                    </a>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <br></br>
          <br></br>

          <center>
            <a className="btn btn-warning text-dark " href="/createMeetings" >
              <MDBIcon fas icon="plus" size='2x' />&nbsp;<b>Add New Shedules</b>
            </a>

          </center>

        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
      </div>
    )
  };
};
