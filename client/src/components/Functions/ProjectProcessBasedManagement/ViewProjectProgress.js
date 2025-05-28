import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default class ViewProjectProgress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/projectDetailsProfile/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);

            }

        });

    }

    render() {

        const { _id, projectCategory, name, companyName, email, contactNumber, date, task_01, rate_01, task_02, rate_02, task_03, rate_03, progress } = this.state.post;

        return (



            <div style={{ marginTop: '20px' }}>
                 <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <br /> <br /> <br /> <br />
                <center>
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'white'  }}>

                        <MDBIcon fas icon="tasks" size='10x' />
                        <MDBCardBody>
                            <MDBCardTitle><b>Project Progress</b></MDBCardTitle><br/>
                            <h4>{_id}</h4>
                            <hr />

                            <dl className="row">
                                <dt className="col-sm-3">Project Category</dt>
                                <dd className="col-sm-9">{projectCategory}</dd><br />

                                <dt className="col-sm-3">Client/Company Name</dt>
                                <dd className="col-sm-9">{name}{companyName}</dd><br />

                                <dt className="col-sm-3">Email</dt>
                                <dd className="col-sm-9">{email}</dd><br />

                                <dt className="col-sm-3">Contact Number</dt>
                                <dd className="col-sm-9">{contactNumber}</dd><br />

                                <dt className="col-sm-3">Due Date</dt>
                                <dd className="col-sm-9">{date}</dd><br /><br /><br />

                                <h5>Project Progress</h5><br /><br /><br />

                                <dt className="col-sm-3">Task 1</dt>
                                <dd className="col-sm-9">{task_01}</dd>

                                <dt className="col-sm-3">Complete Rate</dt>
                                <dd className="col-sm-9">{rate_01}</dd><br /><br /><br />

                                <dt className="col-sm-3">Task 2</dt>
                                <dd className="col-sm-9">{task_02}</dd>

                                <dt className="col-sm-3">Complete Rate</dt>
                                <dd className="col-sm-9">{rate_02}</dd><br /><br /><br />

                                <dt className="col-sm-3">Task 3</dt>
                                <dd className="col-sm-9">{task_03}</dd>

                                <dt className="col-sm-3">Complete Rate</dt>
                                <dd className="col-sm-9">{rate_03}</dd><br /><br /><br />

                                <dt className="col-sm-3">Total Progress (%)</dt>
                                <dd className="col-sm-9">{progress}%</dd>


                            </dl>




                        </MDBCardBody>
                    </MDBCard>
                    <br />
                    <h8>For more details contact this number -  94776226485</h8>
                </center>
                <br /> <br /> <br /> <br />
            </div>
        )
    }
}