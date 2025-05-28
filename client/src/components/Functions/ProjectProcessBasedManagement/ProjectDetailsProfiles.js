import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class projectDetailsProfiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectDetailsProfiles: []
    };

  }


  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/projectDetailsProfiles").then(res => {
      if (res.data.success) {
        this.setState({
          projectDetailsProfiles: res.data.existingPosts
        });

        console.log(this.state.projectDetailsProfiles);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/projectDetailsProfile/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }


  filterData(projectDetailsProfiles, searchKey) {

    const result = projectDetailsProfiles.filter((post) =>
      post.projectCategory.toLowerCase().includes(searchKey) ||
      post._id.toLowerCase().includes(searchKey)

    )

    this.setState({ projectDetailsProfiles: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/projectDetailsProfiles").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
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
              placeholder="Search By Project ID/Category "
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Project Details Profiles</h1>

            </center>
          </div>
      

        <div>
          <br />
          <h3><span class="badge bg-info text-dark opacity-90 ">Client Contact Information</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Project ID</th>
                <th scope="col">Client Name</th>
                <th scope="col">Company Name</th>
                <th scope="col">Client/Company Email</th>
                <th scope="col">Client/Company Contact Number</th>
                <th scope="col">Project Category</th>
                <th scope="col">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projectDetailsProfiles.map((projectDetailsProfiles) => (
                <tr>
                  <td class="table-light">
                    <a href={`/viewProjectProgress/${projectDetailsProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {projectDetailsProfiles._id}
                    </a>
                  </td>
                  <td class="table-light">{projectDetailsProfiles.name}</td>
                  <td class="table-light">{projectDetailsProfiles.companyName}</td>
                  <td class="table-light">{projectDetailsProfiles.email}</td>
                  <td class="table-light">{projectDetailsProfiles.contactNumber}</td>
                  <td class="table-light">{projectDetailsProfiles.projectCategory}</td>
                  <td class="table-light">{projectDetailsProfiles.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

          <br />
          <h3><span class="badge bg-info text-dark opacity-90 ">Project Progress</span></h3>

          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                
                <th scope="col">Project ID</th>
                <th scope="col">Task 01</th>
                <th scope="col">Complete Rate </th>
                <th scope="col">Task 02</th>
                <th scope="col">Complete Rate </th>
                <th scope="col">Task 03</th>
                <th scope="col">Complete Rate  </th>
                <th scope="col">Total Completed Rate (%)</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projectDetailsProfiles.map((projectDetailsProfiles) => (
                <tr>
                  <td class="table-light">
                    <a href={`/viewProjectProgress/${projectDetailsProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {projectDetailsProfiles._id}
                    </a>
                  </td>
                  <td class="table-light">{projectDetailsProfiles.task_01}</td>
                  <td class="table-light">{projectDetailsProfiles.rate_01}</td>
                  <td class="table-light">{projectDetailsProfiles.task_02}</td>
                  <td class="table-light">{projectDetailsProfiles.rate_02}</td>
                  <td class="table-light">{projectDetailsProfiles.task_03}</td>
                  <td class="table-light">{projectDetailsProfiles.rate_03}</td>
                  <td class="table-light">{projectDetailsProfiles.progress}</td>


                  <td class="table-light">
                    <a className="btn btn-warning" href={`/editProjectDetailsProfiles/${projectDetailsProfiles._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This Project Details Profile ?") && this.onDelete(projectDetailsProfiles._id)}>
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
            <a className="btn btn-warning text-dark " href="/createProjectDetailsProfiles" >
              <MDBIcon fas icon="folder-plus" size='2x' />&nbsp;<b>Add New Project Details Profile</b>
            </a>

            &nbsp; &nbsp; &nbsp; &nbsp;

            <a className="btn btn-warning text-dark " href="/monthlyProgressReport" >
              <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b>
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
