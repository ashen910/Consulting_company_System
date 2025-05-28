import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

const emailRegex = RegExp(
    /^[a-z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
  );

const phoneRegex = RegExp(
    /^[0-9]{10,15}$/
  );
 
const charRegex = RegExp(
    /^[a-zA-Z\s]{1,50}$/
  );
 
 
 const formValid = formErrors =>{
     let valid = true;
 
     Object.values(formErrors).forEach(val => {
         val.length > 0 && (valid = false)
     });
     return valid;
 };

export default class EditProjectDetailsProfiles extends Component {


    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            projectCategory: "",
            name: "",
            companyName: "",
            email: "",
            date: "",
            task_01: "",
            rate_01: "",
            task_02: "",
            rate_02: "",
            task_03: "",
            rate_03: "",
            progress: "",

            formErrors: {
                name: "",
                email:"",
                contactNumber: ""
            }


        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch(name){
            case "email":
                formErrors.email = emailRegex.test(value) ? ""
                : "invalid email address";
                break;
            case "contactNumber":
                formErrors.contactNumber = phoneRegex.test(value) ? ""
                : "invalid contact number";
                break;
            case "name":
                formErrors.name = charRegex.test(value) ? ""
                : "invalid name!";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]:value}, ()=>console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })

    }


    calTotal = (e) => {
        e.preventDefault();

        const { _id, projectCategory, name, companyName, email, contactNumber, date, task_01, rate_01, task_02, rate_02, task_03, rate_03, progress } = this.state;
        this.setState({ progress:((parseInt(this.state.rate_01) + parseInt(this.state.rate_02) + parseInt(this.state.rate_03)) * 100) / 300 +"%"})
    }

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)){
        const id = this.props.match.params.id;
        const { _id, projectCategory, name, companyName, email, contactNumber, date, task_01, rate_01, task_02, rate_02, task_03, rate_03, progress } = this.state;

        const data = {

            _id: _id,
            projectCategory: projectCategory,
            name: name,
            companyName: companyName,
            email: email,
            contactNumber: contactNumber,
            date: date,
            task_01: task_01,
            rate_01: rate_01,
            task_02: task_02,
            rate_02: rate_02,
            task_03: task_03,
            rate_03: rate_03,
            progress: progress
        }


        console.log(data)

        axios.put(`/projectDetailsProfile/update/${id}`, data).then((res) => {
            let path = "/projectDetailsProfiles";
            if (res.data.success) {
                alert("Project Details Profile Updated Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        _id: "",
                        projectCategory: "",
                        name: "",
                        companyName: "",
                        email: "",
                        contactNumber: "",
                        date: "",
                        task_01: "",
                        rate_01: "",
                        task_02: "",
                        rate_02: "",
                        task_03: "",
                        rate_03: "",
                        progress: ""

                    }
                )
            }
        })

    }
    else{
        console.error("Form Invalid");
    }


    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/projectDetailsProfile/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    _id: res.data.post._id,
                    projectCategory: res.data.post.projectCategory,
                    name: res.data.post.name,
                    companyName: res.data.post.companyName,
                    email: res.data.post.email,
                    contactNumber: res.data.post.contactNumber,
                    date: res.data.post.date,
                    task_01: res.data.post.task_01,
                    rate_01: res.data.post.rate_01,
                    task_02: res.data.post.task_02,
                    rate_02: res.data.post.rate_02,
                    task_03: res.data.post.task_03,
                    rate_03: res.data.post.rate_03,
                    progress: res.data.post.progress

                });

                console.log(this.state.post);

            }

        });

    }
    render() {
        const { formErrors } = this.state;
        return (
            <div className="back fixed" style={{ zIndex: 8 }}>
            <div className="com-md-8 mt-4 mx-auto">
                <br /> <br />
                <center><h1><span class="badge bg-info text-dark opacity-90 fs-1">Edit Project Details Profile</span></h1></center>
                <center>
                    <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <div className="col-md-8 mt-4 mx-auto">
                            <br />
                            <form className="needs-validation" noValidate>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Project ID</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="_id"
                                        placeholder="Enter Project ID"
                                        readOnly
                                        value={this.state._id}
                                        onChange={this.handleInputChange} />
                                </div><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Client Name</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name with Initials"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                          {formErrors.name.length != 10 && (
                                        <span className="errorMessage">{formErrors.name}</span>
                                        )}
                                </div>

                                <center>OR</center>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Company Name</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="companyName"
                                        placeholder="Enter Company Name"
                                        value={this.state.companyName}
                                        onChange={this.handleInputChange} />
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Client/Company Email</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter valid Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                        {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                        )}
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Client/Company Contact Number</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="contactNumber"
                                        placeholder="Enter Valid Contact Number (EX:94xxxxxxxxx)"
                                        value={this.state.contactNumber}
                                        onChange={this.handleInputChange} />
                                     {formErrors.contactNumber.length >0 && (
                                            <span className="errorMessage">{formErrors.contactNumber}</span>
                                        )} 
                                </div><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Project Category</b></label>
                                    <select name="projectCategory"   value={this.state.projectCategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Project Category--</option>
                                        <option value="Hydro Power Project">Hydro Power Project</option>
                                        <option value="Reforestation Project">Reforestation Project</option>
                                        <option value="Solar Power Project">Solar Power Project</option>
                                        <option value="Carbon Project">Carbon Project</option>
                                    </select>
                                </div><br /><br />

                                <h3 style={{ color: '#0000FF' }}><i>Project Progress</i></h3><br />

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Task 01</b></label>
                                            <textarea type="text"
                                                className="form-control"
                                                name="task_01"
                                                placeholder="Enter Task"
                                                value={this.state.task_01}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Task 01 Completed Rate</b> </label>
                                            <select name="rate_01"  value={this.state.rate_01} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select Rate--</option>
                                                <option value="0%">0%</option>
                                                <option value="25%">25%</option>
                                                <option value="50%">50%</option>
                                                <option value="75%">75%</option>
                                                <option value="100%">100%</option>
                                            </select>
                                        </div>
                                    </div>
                                </div><br />


                                <div className="row">
                                    <div className="col">

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Task 02</b></label>
                                            <textarea type="text"
                                                className="form-control"
                                                name="task_02"
                                                placeholder="Enter Task"
                                                value={this.state.task_02}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Task 02 Completed Rate</b></label>
                                            <select name="rate_02"  value={this.state.rate_02} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select Rate--</option>
                                                <option value="0%">0%</option>
                                                <option value="25%">25%</option>
                                                <option value="50%">50%</option>
                                                <option value="75%">75%</option>
                                                <option value="100%">100%</option>
                                            </select>
                                        </div>
                                    </div>
                                </div><br />



                                <div className="row">
                                    <div className="col">

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Task 03</b></label>
                                            <textarea type="text"
                                                className="form-control"
                                                name="task_03"
                                                placeholder="Enter Task"
                                                value={this.state.task_03}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Task 03 Completed Rate</b></label>
                                            <select name="rate_03"  value={this.state.rate_03} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select Rate--</option>
                                                <option value="0%">0%</option>
                                                <option value="25%">25%</option>
                                                <option value="50%">50%</option>
                                                <option value="75%">75%</option>
                                                <option value="100%">100%</option>
                                            </select>
                                        </div>
                                    </div>
                                </div><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                   
                                      
                                            <label style={{ marginBottom: '5px' }}><b>Total Completed Rate (%)</b></label>
                                            <input type="text"
                                                className="form-control"
                                                name="progress"
                                                placeholder="%"
                                                value={this.state.progress}
                                                onChange={this.handleInputChange} />
                                        
                                            <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.calTotal}>
                                                <i className="far far-check-square"></i>
                                                &nbsp; Calculate Total Completed Rate
                                            </button> 
                                  
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Due Date</b></label>
                                    <input type="date"
                                        className="form-control"
                                        name="date"
                                        placeholder=""
                                        readOnly
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </div>


                                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Save Changes
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
