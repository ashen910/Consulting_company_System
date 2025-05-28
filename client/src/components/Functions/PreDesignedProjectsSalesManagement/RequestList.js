import React, { Component } from 'react';
import axios from 'axios';

export default class RequestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyers: []
    };

  }


  componentDidMount() {
    this.retrieveBuyers();
  }

  retrieveBuyers() {
    axios.get("/buyers").then(res => {
      if (res.data.success) {
        this.setState({
          buyers: res.data.existingBuyers
        });

        console.log(this.state.buyers);
      }


    });
  }



  filterData(buyers, searchKey) {

    const result = buyers.filter((buyer) =>
      buyer.pdpId.toLowerCase().includes(searchKey) ||
      buyer.name.toLowerCase().includes(searchKey) ||
      buyer.email.toLowerCase().includes(searchKey) ||
      buyer.contact.toLowerCase().includes(searchKey)

    )

    this.setState({ buyers: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/buyers").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingBuyers, searchKey)
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
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>

        <center>
          <h1><span class="badge bg-info text-dark opacity-90 fs-1">All Requested Buyers</span></h1>
        </center>

        <div style={{ width: '70%', marginLeft: '15%' }}>

        <div >
          <br />


          <table class="table table-bordered " >
            <thead class="table-info">


              <tr>
                <th scope="col">#</th>
                <th scope="col">PDP ID</th>
                <th scope="col">Client/Company Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>

              </tr>
            </thead>
            <tbody>
              {this.state.buyers.map((buyers, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/buyer/${buyers._id}`} style={{ textDecoration: 'none' }}>
                      {buyers.pdpId}
                    </a>
                  </td>
                  <td class="table-light">{buyers.name}</td>
                  <td class="table-light" >{buyers.email}</td>
                  <td class="table-light" >{buyers.contact}</td>



                </tr>

              ))}



            </tbody>

          </table>


          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
</div>
    )
  };
}