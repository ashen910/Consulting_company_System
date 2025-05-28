import React, { Component } from 'react'
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';


export default class MarkInvolvement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            category: "",
            type: "",
            date: "",
            noMembers: "",
            member01: "",
            member02: "",
            member03: "",
            member04: "",
            in1: "",
            in2: "",
            in3: "",
            in4: "",
            mark:""



        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;


        this.setState({
            ...this.state,
            [name]: value
        })

    }

    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;
        const { _id, name, category, type, date, noMembers, member01, member02, member03, member04,in1,in2,in3,in4,mark } = this.state;

        const data = {
            _id: _id,
            name: name,
            category: category,
            type: type,
            date: date,
            noMembers: noMembers,
            member01: member01,
            member02: member02,
            member03: member03,
            member04: member04,
            in1:in1,
            in2:in2,
            in3:in3,
            in4:in4,
            mark:mark
        }

        console.log(data)

        axios.put(`/team/update/${id}`, data).then((res) => {
            let path = "/jcProjectTeams";
            if (res.data.success) {
                alert("Marked Team Involvement Successfully");
                this.props.history.push(path);
                this.setState(
                    {
                        _id: "",
                        name: "",
                        category: "",
                        type: "",
                        date: "",
                        noMembers: "",
                        member01: "",
                        member02: "",
                        member03: "",
                        member04: "",
                        in1: "",
                        in2: "",
                        in3: "",
                        in4: "",
                        mark:""
            

                    }
                )
            }
        })
    }


    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/team/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    _id: res.data.team._id,
                    name: res.data.team.name,
                    category: res.data.team.category,
                    type: res.data.team.type,
                    date: res.data.team.date,
                    noMembers: res.data.team.noMembers,
                    member01: res.data.team.member01,
                    member02: res.data.team.member02,
                    member03: res.data.team.member03,
                    member04: res.data.team.member04,
                    in1: res.data.team.in1,
                    in2: res.data.team.in2,
                    in3: res.data.team.in3,
                    in4: res.data.team.in4,
                    mark: res.data.team.mark
                });

                console.log(this.state.team);

            }

        });

    }


    render() {
        const { formErrors } = this.state;
        return (
            <div className="back fixed" style={{ zIndex: 8 }}>
            <div className="col-md-8 mt-4 mx-auto">
                <br /> <br />
                <center><h1><span class="badge bg-info text-dark opacity-90 fs-1">Mark Member Involvement</span></h1></center>

                <center>
                    <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <div className="col-md-8 mt-4 mx-auto">
                            <br />
                            <form className="needs-validation" noValidate>

                                <h3 style={{ color: '#0000FF' }}>Team Details</h3><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Team ID</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="_id"
                                        readOnly
                                        placeholder="EX:Team_NPM_Solar Power Project"
                                        value={this.state._id}
                                        onChange={this.handleInputChange} />
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Team Type</b></label>
                                    <select readOnly name="type" value={this.state.type} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Team Type--</option>
                                        <option value="Office Work">Office Work</option>
                                        <option value="Field Work">Field Work</option>
                                    </select>
                                </div><br />


                                <h4 style={{ color: '#0000FF' }}>Member Details</h4><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>No Of Members</b></label>
                                    <input type="text"
                                        className="form-control"
                                        readOnly
                                        name="noMembers"
                                        placeholder=""
                                        value={this.state.noMembers}
                                        onChange={this.handleInputChange} />
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <div className="row">
                                    <div className="col">
                                    <label style={{ marginBottom: '5px' }}><b>Member 01</b></label>
                                    <textarea mdbInput class="form-control" id="textAreaExample" rows="3"
                                        readOnly
                                        name="member01"
                                        placeholder="User ID   |   Consultant's Name   |"
                                        value={this.state.member01}
                                        onChange={this.handleInputChange} /></div>
                                    <div className="col">
                                    <label style={{ marginBottom: '5px' }}><b>Member Involvement</b></label>
                                    <select  name="in1" value={this.state.in1} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select A Performance--</option>
                                        <option value="Bad">Bad</option>
                                        <option value="Fair">Fair</option>
                                        <option value="Good">Good</option>
                                        <option value="Excellent">Excellent</option>
                                    </select>
                                        </div>


                                </div>
                                </div><br />

                                
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                <div className="row">
                                    <div className="col">
                                    <label style={{ marginBottom: '5px' }}><b>Member 02</b></label>
                                    <textarea mdbInput class="form-control" id="textAreaExample" rows="3"
                                        readOnly
                                        name="member02"
                                        placeholder="User ID   |   Consultant's Name   |"
                                        value={this.state.member02}
                                        onChange={this.handleInputChange} /></div>
                                    <div className="col">
                                    <label style={{ marginBottom: '5px' }}><b>Member Involvement</b></label>
                                    <select  name="in2" value={this.state.in2} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select A Performance--</option>
                                        <option value="Bad">Bad</option>
                                        <option value="Fair">Fair</option>
                                        <option value="Good">Good</option>
                                        <option value="Excellent">Excellent</option>
                                    </select>
                                </div>
                                </div>
                                </div><br />



                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                <div className="row">
                                    <div className="col">
                                    <label style={{ marginBottom: '5px' }}><b>Member 03</b></label>
                                    <textarea mdbInput class="form-control" id="textAreaExample" rows="3"
                                        readOnly
                                        name="member03"
                                        placeholder="User ID   |   Consultant's Name   |"
                                        value={this.state.member03}
                                        onChange={this.handleInputChange} /></div>

                                        <div className="col">
                                        <label style={{ marginBottom: '5px' }}><b>Member Involvement</b></label>
                                        <select  name="in3" value={this.state.in3} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                            <option defaultValue>--Select A Performance--</option>
                                            <option value="Bad">Bad</option>
                                            <option value="Fair">Fair</option>
                                            <option value="Good">Good</option>
                                            <option value="Excellent">Excellent</option>
                                        </select>
                                    </div>
                                    </div>
                                     </div><br />



                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                <div className="row">
                                    <div className="col">
                                    <label style={{ marginBottom: '5px' }}><b>Member 04</b></label>
                                    <textarea mdbInput class="form-control" id="textAreaExample" rows="3"
                                        readOnly
                                        name="member04"
                                        placeholder="User ID   |   Consultant's Name   |"
                                        value={this.state.member04}
                                        onChange={this.handleInputChange} /></div>

                                        <div className="col">
                                        <label style={{ marginBottom: '5px' }}><b>Member Involvement</b></label>
                                        <select  name="in4" value={this.state.in4} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select A Performance--</option>
                                            <option value="Bad">Bad</option>
                                            <option value="Fair">Fair</option>
                                            <option value="Good">Good</option>
                                            <option value="Excellent">Excellent</option>
                                        </select>
                                    </div>
                                    </div>
                                     </div><br />

                                     <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Involvement</b></label>
                                    <select name="mark" value={this.state.mark} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select--</option>
                                        <option value="Marked   ✓">Marked</option>
                                        <option value="Not yet  ✘">Not Yet</option>
                                    </select>
                                </div><br />




                                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Submit
                                </button>
                                <br /> <br /> <br />
                            </form>
                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
            </div>
            </div>



        )
    }
}