import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class projectCashFlows extends Component {
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


    onDelete = (id) => {

        axios.delete(`/cashflow/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrievePosts();
        })
    }


    filterData(cashflows, searchKey) {

        const result = cashflows.filter((post) =>
            post.projectCategory.toLowerCase().includes(searchKey) ||
            post._id.toLowerCase().includes(searchKey)

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

            <div className="back fixed" style={{ zIndex: 8 }}>
            <div className="hc">
                <br />
                <div style={{ width: '20%', marginLeft: '80%' }}>
                    <form className="d-flex">

                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search By Cash-Flow ID/Category"
                            aria-label="Search" onChange={this.handleSearchArea}>
                        </input>
                    </form>
                </div>
                <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Project Cash-Flows</h1>

            </center>
          </div>

                <div>
                    <br />
                    <h3><span class="badge bg-info text-dark opacity-90 ">Client Contact Information</span></h3>
                    <table class="table table-bordered " >
                        <thead class="table-info">
                            <tr>
                               
                                <th scope="col">Cash-Flow ID</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Client/Company Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Project Category</th>
                                <th scope="col">Date of publication</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cashflows.map((cashflows) => (
                                <tr>
                                   
                                    <td class="table-light">
                                        <a href={`/viewProjectCashFlow/${cashflows._id}`} style={{ textDecoration: 'none' }}>
                                            {cashflows._id}
                                        </a>
                                    </td>
                                    <td class="table-light">{cashflows.name}</td>
                                    <td class="table-light">{cashflows.companyName}</td>
                                    <td class="table-light">{cashflows.email}</td>
                                    <td class="table-light">{cashflows.contactNumber}</td>
                                    <td class="table-light">{cashflows.projectCategory}</td>
                                    <td class="table-light">{cashflows.date}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                    <br />
                    <h3><span class="badge bg-info text-dark opacity-90 ">Project Cash-Flow (Rupees)</span></h3>

                    <table class="table table-bordered " >
                        <thead class="table-info">
                            <tr>
                                
                                <th scope="col">Cash-Flow ID</th>
                                <th scope="col">Field Survey Cost</th>
                                <th scope="col">Project Metirial Cost</th>
                                <th scope="col">Project commission</th>
                                <th scope="col">Total Project Budget</th>
                                <th scope="col">Advance Payment</th>
                                <th scope="col">Total Payble</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cashflows.map((cashflows) => 
                                <tr>
                                    
                                    <td class="table-light">
                                        <a href={`/viewProjectCashFlow/${cashflows._id}`} style={{ textDecoration: 'none' }}>
                                            {cashflows._id}
                                        </a>
                                    </td>
                                    <td class="table-light">{cashflows.fieldCost}</td>
                                    <td class="table-light">{cashflows.metirialCost}</td>
                                    <td class="table-light">{cashflows.commission}</td>
                                    <td class="table-light">{cashflows.total}</td>
                                    <td class="table-light">{cashflows.advance}</td>
                                    <td class="table-light">{cashflows.payble}</td>
                                   
                                

                                    <td class="table-light">
                                        <a className="btn btn-warning" href={`/editCashFlows/${cashflows._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This Cash_FLow Statement ?") && this.onDelete(cashflows._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                       
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                    <br></br>
                    <br></br>

                    <center>
                        <a className="btn btn-warning text-dark " href="/createCashFlows" >
                            <MDBIcon far icon="file-alt" size='2x' />&nbsp;<b>Create A New Project CashFlow Statment</b>
                        </a>

                        &nbsp; &nbsp; &nbsp; &nbsp;

                        <a className="btn btn-warning text-dark " href="/monthlyFinancialReport" >
                            <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b>
                        </a>

                    </center>


                </div>
                <br></br>
                <br></br>
                <br></br>

            </div>
            </div>



        )
    };
};





