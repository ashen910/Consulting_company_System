import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class userProfiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userProfiles: []
    };

  }


  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/userProfiles").then(res => {
      if (res.data.success) {
        this.setState({
          userProfiles: res.data.existingPosts
        });

        console.log(this.state.userProfiles);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/userProfile/delete/${id}`).then((res) => {
      alert("User Profile Deleted Successfully");
      this.retrievePosts();
    })
  }


  filterData(userProfiles, searchKey) {

    const result = userProfiles.filter((post) =>
      post.userCategory.toLowerCase().includes(searchKey) ||
      post._id.toLowerCase().includes(searchKey)

    )

    this.setState({ userProfiles: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/userProfiles").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
      <div className="hc">
        <br />
        <div style={{ width: '20%', marginLeft: '80%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search By UserID/User Category"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All User Profiles</h1>

            </center>
          </div>
          
        <div >
          <br />

          <h3><span class="badge bg-info text-dark opacity-90 ">User Personal Information</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Reg_No</th>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Company Name</th>
                <th scope="col">NIC</th>
                <th scope="col">Gender</th>
                <th scope="col">Country</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email</th>
                

              </tr>
            </thead>
            <tbody>
              {this.state.userProfiles.map((userProfiles, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">100{index + 1}</th>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles._id}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles.name}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles.surname}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles.companyName}
                    </a>
                  </td>


                  <td class="table-light">{userProfiles.nic}</td>
                  <td class="table-light">{userProfiles.gender}</td>
                  <td class="table-light">{userProfiles.country}</td>
                  <td class="table-light">{userProfiles.contactNumber}</td>
                  <td class="table-light">{userProfiles.email}</td>
                  
                  


                </tr>

              ))}

            </tbody>

          </table>
          <br></br>

          <h3><span class="badge bg-info text-dark opacity-90 ">User System Information</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Reg_No</th>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Company Name</th>
                
                <th scope="col">User Category</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userProfiles.map((userProfiles, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">100{index + 1}</th>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles._id}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles.name}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles.surname}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/userProfile/${userProfiles._id}`} style={{ textDecoration: 'none' }}>
                      {userProfiles.companyName}
                    </a>
                  </td>


                  
                  <td class="table-light">{userProfiles.userCategory}</td>
                  <td class="table-light">{userProfiles.password}</td>

                  <td class="table-light">
                    <a className="btn btn-warning" href={`/editUserProfile/${userProfiles._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                   
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This User Profile ?") && this.onDelete(userProfiles._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>


                </tr>

              ))}

            </tbody>
          </table>
          <br />

          <br />


          <div>
            <center>
              <a className="btn btn-warning text-dark " href="/createUserProfile" >
                <MDBIcon fas icon="user-plus" size='2x' />&nbsp;<b>Create a New User Profile</b>
              </a>
            </center>
          </div>

        </div>
        <br /><br />
        <br /><br />
      </div>
      </div>
    )
  };
};






