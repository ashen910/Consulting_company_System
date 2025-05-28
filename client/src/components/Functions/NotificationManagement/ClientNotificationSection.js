import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

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

      
      <center>
        <br />


          
      <div className="container">
          <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>

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

            <table hover class="table table-bordered " >
              <thead class="table-warning">
                {/* <tr>
                  <th >#</th>
                  <th >Topic</th>
                  <th >Description</th>
                  <th >Date</th>

                </tr> */}
              </thead>
              <tbody>

                {this.state.notifications.map((notifications, index) => (
                  <tr key={index}>
                    <th class="table-active" scope="row">{index + 1}</th>
                    
                    <td class="table-dark" style={{ textDecoration: 'none' }} >
                      {notifications.topic}
                    </td>

                    <td class="table-active">{notifications.description}</td>
                    <td class="table-active" >{notifications.date}</td>



                  </tr>
                ))}
              </tbody>
            </table>
            </MDBCard>
          </div>

          <br />

        </div>
        <br /> <br /> <br /> <br />
      </center>
    )
  };
};



