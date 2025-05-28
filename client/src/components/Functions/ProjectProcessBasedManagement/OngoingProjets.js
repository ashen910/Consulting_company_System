import React, { Component } from 'react';
import axios from 'axios';

export default class OngoingProjects extends Component {
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
        <center>
          <h1><span class="badge bg-info text-dark opacity-90 fs-1">All Ongoing Projects</span></h1>
        </center>

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


                </tr>

              ))}

            </tbody>

          </table>

          <br></br>
          <br></br>


        </div>
        <br></br>
        <br></br>
        <br></br>

      </div>



    )
  };
};
