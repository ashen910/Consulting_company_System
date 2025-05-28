import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class WorkshopsTimetable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timetables: []
    };

  }


  componentDidMount() {
    this.retrieveTimetables();
  }

  retrieveTimetables() {
    axios.get("/timetables").then(res => {
      if (res.data.success) {
        this.setState({
          timetables: res.data.existingTimetables
        });

        console.log(this.state.timetables);
      }


    });
  }
  onDelete = (id) => {

    axios.delete(`/timetable/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveTimetables();
    })
  }

  filterData(timetables, searchKey) {

    const result = timetables.filter((timetable) =>
      timetable.topic.toLowerCase().includes(searchKey)

    )

    this.setState({ timetables: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/timetables").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingTimetables, searchKey)
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
              placeholder="Search By Workshop Topic"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Workshop Records</h1>

            </center>
          </div><br /><br /><br /><br /><br />
   

        <div >
          <br />

          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Topic</th>
                <th scope="col">Platform</th>
                <th scope="col">Intellectual</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.timetables.map((timetables, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">M100{index + 1}</th>
                  <td class="table-light">
                    <a href={`/timetable/${timetables._id}`} style={{ textDecoration: 'none' }}>
                      {timetables.date}
                    </a>
                  </td>


                  <td class="table-light">{timetables.time}</td>
                  <td class="table-light">{timetables.topic}</td>
                  <td class="table-light">{timetables.platform}</td>
                  <td class="table-light">{timetables.intellectual}</td>
                  <td class="table-light">{timetables.published}</td>
                  <td class="table-light">
                    <a className="btn btn-warning" href={`/editWorkshopRecords/${timetables._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>

                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are you sure you wish to delete this timetable ?") && this.onDelete(timetables._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>

              ))}


            </tbody>

          </table>
          <br></br>
          <br></br>
          <center>
            <a className="btn btn-warning text-dark" href="/addWorkshopRecords">
              <MDBIcon fas icon="plus" size='2x' />&nbsp;<b>Add New Workshop</b>
            </a>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a className="btn btn-warning text-dark " href="/registeredList" >
              <MDBIcon fas icon="users" size='2x' />&nbsp;<b>Registerd list</b>
            </a>




            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a className="btn btn-warning text-dark " href="/monthlyWorkshopReport" >
              <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b>
            </a>





            <br></br>
            <br></br>
            <br></br>

          </center>
        </div>
      </div>


    )
  };
}



