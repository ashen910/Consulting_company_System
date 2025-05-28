import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default class ViewProjectCashFlow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/cashflow/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);

            }

        });

    }

    render() {

        const { _id, projectCategory, name, companyName, email, fieldCost, metirialCost, commission, total, advance, payble } = this.state.post;

        return (



            <div style={{ marginTop: '20px' }}>
                 <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <br /> <br /> <br /> <br />
                <center>
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '40rem',  backgroundColor: 'white'  }}>
                    <MDBIcon fas icon="file-invoice-dollar" size='10x' />

                     <MDBCardBody>
                            <MDBCardTitle><b>Project Cash-Flow</b></MDBCardTitle><br/>
                            <h4>{_id}</h4>
                            <hr />

                            <dl className="row">
                                <dt className="col-sm-3">Project Category</dt>
                                <dd className="col-sm-9">{projectCategory}</dd>

                                <dt className="col-sm-3">Client Name</dt>
                                <dd className="col-sm-9">{name}</dd>

                                <dt className="col-sm-3">Company Name</dt>
                                <dd className="col-sm-9">{companyName}</dd>

                                <dt className="col-sm-3">Client/Company Email</dt>
                                <dd className="col-sm-9">{email}</dd><br /><br /><br /><br />


                                <h5>Project Budget Details</h5><br /><br /><br />

                                <dt className="col-sm-3">Field Survey Cost</dt>
                                <dd className="col-sm-9">{fieldCost}</dd>

                                <dt className="col-sm-3">Project Metirial Cost</dt>
                                <dd className="col-sm-9">{metirialCost}</dd>

                                <dt className="col-sm-3">Project Commision</dt>
                                <dd className="col-sm-9">{commission}</dd>

                                <dt className="col-sm-3">Total Project Budget</dt>
                                <dd className="col-sm-9">{total}</dd><br /><br /><br /><br />


                                <h5>Project Payment Details</h5><br /><br /><br />

                                <dt className="col-sm-3">Advance Payment</dt>
                                <dd className="col-sm-9">{advance}</dd>

                                <dt className="col-sm-3">Total Payble</dt>
                                <dd className="col-sm-9">{payble}</dd>




                            </dl>




                        </MDBCardBody>
                    </MDBCard>
                    <br />
                    <h8>If you want inquiry contact this number -  94776226485</h8>
                </center>
                <br /> <br /> <br /> <br />
            </div>
        )
    }
}


