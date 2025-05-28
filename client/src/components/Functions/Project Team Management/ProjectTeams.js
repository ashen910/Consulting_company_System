import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class JCTeamProfiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };

  }


  componentDidMount() {
    this.retrieveTeams();
  }

  retrieveTeams() {
    axios.get("/teams").then(res => {
      if (res.data.success) {
        this.setState({
          teams: res.data.existingTeams
        });

        console.log(this.state.teams);
      }


    });
  }

  onDelete = (id) => {

    axios.delete(`/team/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveTeams();
    })
  }


  filterData(teams, searchKey) {

    const result = teams.filter((team) =>
      team._id.toLowerCase().includes(searchKey) ||
      team.type.toLowerCase().includes(searchKey) 
    
    )

    this.setState({ teams: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/teams").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingTeams, searchKey)
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
              placeholder="Search By Team ID / Type"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Project Team Profiles</h1>

            </center>
          </div>
      

        <div >
          <br />
          <h3><span class="badge bg-info text-dark opacity-90 ">Team Details</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Team ID</th>
                <th scope="col">Team Type</th>
                <th scope="col">Client/Company Name</th>
                <th scope="col">Project category</th>
                <th scope="col">Due date</th>

              </tr>
            </thead>





            <tbody>
              {this.state.teams.map((teams) => (
                <tr>
                  <td class="table-light">{teams._id}</td>
                  <td class="table-light">{teams.type}</td>
                  <td class="table-light">{teams.name}</td>
                  <td class="table-light">{teams.category}</td>
                  <td class="table-light">{teams.date}</td>
                </tr>

              ))}



            </tbody>

          </table>
          <br/>

          <h3><span class="badge bg-info text-dark opacity-90 ">Team Member Details</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Team ID</th>
                <th scope="col">No Of Members</th>
                <th scope="col">Member O1</th>
                <th scope="col">Member O2</th>
                <th scope="col">Member O3</th>
                <th scope="col">Member O4</th>
                <th scope="col">Action</th>

              </tr>
            </thead>





            <tbody>
              {this.state.teams.map((teams) => (
                <tr>
                  <td class="table-light">{teams._id}</td>
                  <td class="table-light">{teams.noMembers}</td>
                  <td class="table-light">{teams.member01}</td>
                  <td class="table-light">{teams.member02}</td>
                  <td class="table-light">{teams.member03}</td>
                  <td class="table-light">{teams.member04}</td>
                  <td class="table-light">
                    <a className="btn btn-warning" href={`/EditTeamProfiles/${teams._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This Project Team Profile ?") && this.onDelete(teams._id)}>
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
            <a className="btn btn-warning text-dark " href="/createTeamProfiles" >
              <MDBIcon fas icon="user-friends"  size='2x'/>&nbsp;<b>Create a New Team Profile</b>
            </a>

          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  };
};