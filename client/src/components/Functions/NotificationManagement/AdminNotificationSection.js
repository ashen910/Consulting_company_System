import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

export default class AdminNotificationSection extends Component {


  constructor(props) {
    super(props);

    this.state = {
      notifications: []
    };

  }


  componentDidMount() {
    this.retrieveNotifications();
  }

  retrieveNotifications() {
    axios.get("/notifications").then(res => {
      if (res.data.success) {
        this.setState({
          notifications: res.data.existingNotifications
        });

        console.log(this.state.notifications);
      }


    });
  }

  onDelete = (id) => {

    axios.delete(`/notification/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveNotifications();
    })
  }



  filterData(notifications, searchKey) {

    const result = notifications.filter((notification) =>
      notification.topic.toLowerCase().includes(searchKey) ||
      notification.description.toLowerCase().includes(searchKey) ||
      notification.date.toLowerCase().includes(searchKey)
    )

    this.setState({ notifications: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/notifications").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingNotifications, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
      <center>
        <br />

        
          <br />
          <div style={{ width: '20%', marginLeft: '80%' }}>
            <form className="d-flex">
              <input className="form-control me-2"
                type="search"
                placeholder="Search by topic"
                aria-label="Search" onChange={this.handleSearchArea}>
              </input>
            </form>
          </div>
          
          <center>
          <h1 className="gifJoin"><span class="badge bg-info text-dark opacity-90 fs-1"> News & Notification</span></h1>
          </center>
          <div>
            <br /><br />
            <MDBCard className='text-black mb-3' style={{ maxWidth: '85rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
            <table class="table table-bordered " >
              <thead class="table-info">
                <tr>

                  <th scope="col"> #</th>
                  <th scope="col"> Topic</th>
                  <th scope="col" >Description</th>
                  <th scope="col" >Date</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {this.state.notifications.map((notifications, index) => (
                  <tr key={index}>
                    <th class="table-light" scope="row">N00{index + 1}</th>
                    <td class="thead-light"><a  style={{ textDecoration: 'bold' }} text-color='red'>
                      {notifications.topic}
                    </a></td>

                    <td class="table-light">{notifications.description}</td>
                    <td class="table-light" >{notifications.date}</td>

                    <td class="table-light">
<center>
                      <a className="btn btn-warning" href={`/editNotificationSection/${notifications._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                     
                      <br/><br/>

                      <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This Notification ?") && this.onDelete(notifications._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                      </center>
                    </td> 

                  </tr>
                ))}
              </tbody>
            </table>
            </MDBCard>

            
            <br></br>
            <br></br>
          </div>












          <br />
          <center>
            <a className="btn btn-warning text-dark " href="/createNotice" >
              <i className="fas fa-plus"></i>&nbsp;Add New Notices
            </a>
          </center>
        

        <br /> <br /> <br /> <br />
      </center>
      </div>

    )
  };
};

