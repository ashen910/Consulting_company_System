import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

const emailRegex = RegExp(
    /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
);
  
const charRegex = RegExp(
    /^[a-zA-Z]{1,50}$/
);
 
 const formValid = formErrors =>{
     let valid = true;
 
     Object.values(formErrors).forEach(val => {
         val.length > 0 && (valid = false)
     });
     return valid;
 };


export default class CreateMeeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            companyname: "",
            email: "",
            date: "",
            time: "",
            platform: "",
            description: "",

            formErrors: {
                name: "",
                email:""
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

    btnDemo = (e) => {
        e.preventDefault();

        const { name, companyname, email, date, time, platform, description } = this.state;

        const data = {

            name: name,
            companyname: companyname,
            email: email,
            date: date,
            time: time,
            platform: platform,
            description: description



        }
        console.log(data)

        this.setState(
            {
                name: "",
                companyname: "Bandisbul Company Limited",
                email: "bandisbul2021@gmail.com",
                date: "2021-11-14",
                time: "19:00",
                platform: "Online",
                description: "Client Web: www.bandisbul.com"

            }
        )
   
    }

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)){
        const { name, companyname, email, date, time, platform, description } = this.state;

        const data = {

            name: name,
            companyname: companyname,
            email: email,
            date: date,
            time: time,
            platform: platform,
            description: description

           
        }

        console.log(data)

        axios.post("/meeting/save", data).then((res) => {
            let path = "/meetings";
            if (res.data.success) {
                alert("Meeting Schedule Created Successfully"); 
                this.props.history.push(path);
                this.setState(
                    {
                        name: "",
                        companyname: "",
                        email: "",
                        date: "",
                        time: "",
                        platform: "",
                        description: ""
                       
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
                <center>
                    <br /> <br /> 
                   
                    <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Create a Meeting Schedule</b></h1></center>
                    <br /> 
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >

                        <div className="col-md-8 mt-4 mx-auto">
                            <form className="needs-validation" noValidate>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Client Name</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter Client Name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                         {formErrors.name.length > 0 && (
                                                <span className="errorMessage">{formErrors.name}</span>
                                         )}
                                </div>
                                <center><h6>OR</h6></center>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Company name</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="companyname"
                                        placeholder="Enter Company Name"
                                        value={this.state.companyname}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Email</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter valid Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                        {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                        )}
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Date</b></label>
                                    <input type="date"
                                        className="form-control"
                                        name="date"
                                        placeholder="Enter your date"
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Time</b></label>
                                    <input type="time"
                                        className="form-control"
                                        name="time"
                                        placeholder="Enter your own time"
                                        value={this.state.time}
                                        onChange={this.handleInputChange} />
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Platform</b></label>
                                    <select name="platform" value={this.state.platform} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Platform--</option>
                                        <option value="Online">Online</option>
                                        <option value="Physical">Physical</option>
                                    </select>
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Additional Details (Optional)</b></label>
                                    <textarea type="text"
                                        className="form-control"
                                        name="description"
                                        placeholder="Type here..."
                                        value={this.state.description}
                                        onChange={this.handleInputChange} />
                                </div>



                                <center><button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Proceed </b>
                                </button>
                                    <br /><br />
                                </center>



                            </form>
                            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'300px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button><br /><br />
                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
            
                    <br /> <br /> <br /> <br />
            </div>
        )
    }
}