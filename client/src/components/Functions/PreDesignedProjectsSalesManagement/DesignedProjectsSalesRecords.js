import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class DesignedProjectSalesRecords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pdpRecords: []
    };

  }


  componentDidMount() {
    this.retrievePdpRecords();
  }

  retrievePdpRecords() {
    axios.get("/pdpRecords").then(res => {
      if (res.data.success) {
        this.setState({
          pdpRecords: res.data.existingPdpRecords
        });

        console.log(this.state.pdpRecords);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/pdpRecord/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePdpRecords();
    })
  }

  filterData(pdpRecords, searchKey) {

    const result = pdpRecords.filter((pdpRecord) =>
      pdpRecord.pdpid.toLowerCase().includes(searchKey) ||
      pdpRecord.projectcategory.toLowerCase().includes(searchKey) ||
      pdpRecord.summary.toLowerCase().includes(searchKey) ||
      pdpRecord.price.toLowerCase().includes(searchKey)


    )

    this.setState({ pdpRecords: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/pdpRecords").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPdpRecords, searchKey)
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
              placeholder="Search By PDP ID/Project Category"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All PdpRecords</h1>

            </center>
          </div> <br /> <br />
          <div style={{ width: '80%', marginLeft: '10%' }}>

        <div >
          <br /><br /> <br />


          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">PDP ID</th>
                <th scope="col">Project Category</th>
                <th scope="col">Summary</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.pdpRecords.map((pdpRecords, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">M100{index + 1}</th>
                  <td class="table-light">
                    <a href={`/pdpRecord/${pdpRecords._id}`} style={{ textDecoration: 'none' }}>
                      {pdpRecords.pdpid}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/pdpRecord/${pdpRecords._id}`} style={{ textDecoration: 'none' }}>
                      {pdpRecords.projectcategory}
                    </a>
                  </td>
                  <td class="table-light"> {pdpRecords.summary}</td>
                  <td class="table-light"> {pdpRecords.price}</td>


                  <td class="table-light">
                    <a className="btn btn-warning" href={`/editSalesRecords/${pdpRecords._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are you sure you wish to delete this record ?") && this.onDelete(pdpRecords._id)}>
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
            <a className="btn btn-warning text-dark" href="/addSalesRecords">
              <MDBIcon fas icon="plus" size='2x' />&nbsp;<b>Add New PdpRecords</b>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a className="btn btn-warning text-dark " href="/requestList" >
              <MDBIcon fas icon="list" size='2x' />&nbsp;<b>Requested List</b>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a className="btn btn-warning text-dark " href="/salesReport" >
              <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b>
            </a>


          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      </div>
    )
  };
}


