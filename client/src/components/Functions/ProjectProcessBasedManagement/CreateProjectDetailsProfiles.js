import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCheckbox } from 'mdb-react-ui-kit';

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

export default class CreateProjectDetailsProfiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

        this.setState({ progress: ((parseInt(this.state.rate_01) + parseInt(this.state.rate_02) + parseInt(this.state.rate_03)) * 100) / 300 +"%" })
    }

    generateKey = (e) => {
        e.preventDefault();

        const { _id, projectCategory, name, companyName, email, contactNumber, date, task_01, rate_01, task_02, rate_02, task_03, rate_03, progress } = this.state;
        this.setState({ _id: "pid" + parseInt(this.state.contactNumber) })
    }

    //demo button
    btnDemo = (e) => {
        e.preventDefault();

        const { _id, projectCategory, name, companyName, email, contactNumber, date, task_01, rate_01, task_02, rate_02, task_03, rate_03, progress } = this.state;

        const data = {

            _id: _id,
            projectCategory: projectCategory,
            name: name,
            companyName: companyName,
            email: email,
            date: date,
            contactNumber: contactNumber,
            task_01: task_01,
            rate_01: rate_01,
            task_02: task_02,
            rate_02: rate_02,
            task_03: task_03,
            rate_03: rate_03,
            progress: progress


        }
        console.log(data)

        this.setState(
            {
                _id: "",
                projectCategory: "Solar Power Project",
                name: "",
                companyName: "Bandisbul Company Limited",
                email: "bandisbul2021@gmail.com",
                contactNumber: "855102777392",
                date: "2022-01-12",
                task_01: "Feasibility Study",
                rate_01: "0%",
                task_02: "Field Visit",
                rate_02: "0%",
                task_03: "Design Report",
                rate_03: "0%",
                progress: ""

            }
        )
   
    }
    
    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)){
        const { _id, projectCategory, name, companyName, email, contactNumber, date, task_01, rate_01, task_02, rate_02, task_03, rate_03, progress } = this.state;


        const data = {

            _id: _id,
            projectCategory: projectCategory,
            name: name,
            companyName: companyName,
            email: email,
            date: date,
            contactNumber: contactNumber,
            task_01: task_01,
            rate_01: rate_01,
            task_02: task_02,
            rate_02: rate_02,
            task_03: task_03,
            rate_03: rate_03,
            progress: progress

        }

        console.log(data)

        axios.post("/projectDetailsProfile/save", data).then((res) => {
            let path = "/projectDetailsProfiles";
            if (res.data.success) {
                alert("Add a Project Details Profile Successfully");
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




    render() {
        const { formErrors } = this.state;
        return (
            <div className="back fixed" style={{ zIndex: 8 }}>
            <div className="com-md-8 mt-4 mx-auto">
                <br /> <br />
                <center><h1><span class="badge bg-info text-dark opacity-90 fs-1">Create A New Project Details Profile</span></h1></center>
                <center>
                    <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <div className="col-md-8 mt-4 mx-auto">
                            <br />
                            <form className="needs-validation" noValidate>

                            <h3 style={{ color: '#0000FF' }}>Client Contact Information</h3><br />


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

                                <h3 style={{ color: '#0000FF' }}>Generate Project ID</h3><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Assign a Project ID</b></label><br />
                                    <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.generateKey}>
                                        <i className="far far-check-square"></i>
                                        &nbsp; Generate PID
                                    </button><br /><br />
                                    <input type="text"
                                        className="form-control"
                                        name="_id"
                                        placeholder="Enter Project ID"
                                        value={this.state._id}
                                        onChange={this.handleInputChange} />
                                        
                                </div><br /><br />



                                <h3 style={{ color: '#0000FF' }}>Project Progress</h3><br />

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
                                            <select name="rate_01" value={this.state.rate_01} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
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
                                            <select name="rate_02" value={this.state.rate_02}  onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
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
                                            <select name="rate_03" value={this.state.rate_03} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
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
                                   
                                      
                                            <label style={{ marginBottom: '5px' }}><b>Total Completed Rate (%)</b></label><br />
                                            <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.calTotal}>
                                                <i className="far far-check-square"></i>
                                                &nbsp; Calculate Total Completed Rate
                                            </button><br /><br /> 
                                            <input type="text"
                                                className="form-control"
                                                name="progress"
                                                placeholder="%"
                                                value={this.state.progress}
                                                onChange={this.handleInputChange} />
                                  
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Due Date</b></label>
                                    <input type="date"
                                        className="form-control"
                                        name="date"
                                        placeholder=""
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </div>


                                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Creat
                                </button>
                                <br /> <br /> <br />
                            </form>

                          
                            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px' , marginLeft:'350px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button>
                                <br /> <br /> <br />

                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
                


            </div>
            </div>

        )
    }

}
