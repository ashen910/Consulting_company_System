import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';

export default class AllCashFlows extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cashflows: []
    };

  }


  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/cashflows").then(res => {
      if (res.data.success) {
        this.setState({
          cashflows: res.data.existingPosts
        });

        console.log(this.state.cashflows);
      }


    });
  }

  filterData(cashflows, searchKey) {

    const result = cashflows.filter((post) =>
      post._id.toLowerCase().includes(searchKey) ||
      post.companyName.toLowerCase().includes(searchKey) ||
      post.name.toLowerCase().includes(searchKey)

    )

    this.setState({ cashflows: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/cashflows").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }



  render() {
    return (


      <div className="search fixed" style={{ zIndex: 8 }}>
        <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
        <br /> <br />
        <center>
        <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'white' }}  >
          <br /> <br />
        <center>  
        <div style={{ width: '60%', marginLeft: '1%' }}>
          <form className="d-flex">

            <input className="form-control me-8"
              type="search"
              placeholder="Search By  Cash-Flow ID  or Client/Company Name"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        </center>
        
        
        <br /><br />

        <center>  <h2>Projects Cash-Flows </h2><br /><br /></center>


        <table className="table">



          {this.state.cashflows.map((cashflows, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>

              <a href={`/viewProjectCashFlow/${cashflows._id}`} style={{ textDecoration: 'none' }}>
              ({cashflows.projectCategory})  {cashflows.name}
                {cashflows.companyName}
              </a>

              









            </tr>

          ))}



        </table>





        <br /><br /><br /><br />


</MDBCard>
</center> <br /><br /><br /><br />
      </div>

    )
  }
}

