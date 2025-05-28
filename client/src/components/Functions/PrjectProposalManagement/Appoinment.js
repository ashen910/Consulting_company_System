import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

const emailRegex = RegExp(
    /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
);

const phoneRegex = RegExp(
    /^[0-9]{10,15}$/
);
const charRegex = RegExp(
    /^[a-zA-Z]{1,50}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
};

export default class ViewAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientname: "",
            companyname: "",
            email: "",
            phonenumber: "",
            country: "",
            projectcategory: "",
            timeperiod: "",
            discussionplatform: "",
            additionalnotes: "",

            formErrors: {
                email: "",
                clientname: "",
                phonenumber: "",
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value) ? ""
                    : "invalid email address";
                break;
            case "phonenumber":
                formErrors.phonenumber = phoneRegex.test(value) ? ""
                    : "invalid phone number address";
                break;
            case "clientname":
                formErrors.clientname = charRegex.test(value) ? ""
                    : "invalid name!";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();

        const { clientname, companyname, email, phonenumber, country, projectcategory, timeperiod, discussionplatform, additionalnotes } = this.state;

        const data = {

            clientname: clientname,
            companyname: companyname,
            email: email,
            phonenumber: phonenumber,
            country: country,
            projectcategory: projectcategory,
            timeperiod: timeperiod,
            discussionplatform: discussionplatform,
            additionalnotes: additionalnotes


        }
        console.log(data)

        this.setState(
            {
                clientname: "",
                companyname: "Bandisbul Company Limited",
                email: "bandisbul2021@gmail.com",
                phonenumber: "855102777392",
                country: "Cambodia",
                projectcategory: "Solar Power Project",
                timeperiod: "November",
                discussionplatform: "Online",
                additionalnotes: "Our Web: www.bandisbul.com"

            }
        )

    }



    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            const { clientname, companyname, email, phonenumber, country, projectcategory, timeperiod, discussionplatform, additionalnotes } = this.state;

            const data = {
                clientname: clientname,
                companyname: companyname,
                email: email,
                phonenumber: phonenumber,
                country: country,
                projectcategory: projectcategory,
                timeperiod: timeperiod,
                discussionplatform: discussionplatform,
                additionalnotes: additionalnotes
            }

            console.log(data)

            axios.post("/appointment/save", data).then((res) => {
                if (res.data.success) {
                    alert("Appoinment Form Submitted Successfully");
                    this.setState(
                        {
                            clientname: "",
                            companyname: "",
                            email: "",
                            phonenumber: "",
                            country: "",
                            projectcategory: "",
                            timeperiod: "",
                            discussionplatform: "",
                            additionalnotes: ""


                        });
                }
            }
            )
        }
        else {
            console.error("Form Invalid");
        }


    }

    render() {
        const { formErrors } = this.state;
        return (
            <div className=" fixed" style={{ zIndex: 8 }}>
                <div className="bodyAppointment">
                    <div>
                        <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>

                        <center>
                            <br />


                            
                            <img style={{ width: '30rem' }} alt='...' src='https://www.gangahospital.com/public/images/update/book_an_app.gif' />
                            <br /><br />
                            <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >

                                <div className="col-md-8 mt-4 mx-auto">
                                    <br /><h4 style={{ color:'#003399'}}>Contact Information</h4><br />

                                    <form className="needs-validation">
                                        <div className="row">

                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <label style={{ marginBottom: '5px' }} ><b>Client Name</b></label>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="clientname"
                                                        placeholder="Name with Initials"
                                                        value={this.state.clientname}
                                                        onChange={this.handleInputChange} />
                                                         {formErrors.clientname.length > 0 && (
                                                <span className="errorMessage">{formErrors.clientname}</span>
                                            )}

                                                </div>
                                            </div>
                                            <center><h6><b>OR</b></h6></center>


                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <label style={{ marginBottom: '5px' }}><b>Company Name</b></label>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="companyname"
                                                        placeholder="Enter your Company name"
                                                        value={this.state.companyname}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }} ><b>Email</b></label>
                                            <input type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Enter Valid Email Address"
                                                value={this.state.email}
                                                onChange={this.handleInputChange} />
                                            {formErrors.email.length > 0 && (
                                                <span className="errorMessage">{formErrors.email}</span>
                                            )}
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Country</b></label>
                                            <select name="country" value={this.state.country} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select Your Country--</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Canada">Canada</option>
                                                <option value="China">China</option>
                                                <option value="Dubai">Dubai</option>
                                                <option value="India">India</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Korea">Korea</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Sri lanka">Sri lanka</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Other">Other</option>
                                            </select>

                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Phone Number</b></label>
                                            <input type="text"
                                                className="form-control"
                                                name="phonenumber"
                                                placeholder="Enter Valid Phone Number"

                                                value={this.state.phonenumber}
                                                onChange={this.handleInputChange} />

                                            {formErrors.phonenumber.length > 0 && (
                                                <span className="errorMessage">{formErrors.phonenumber}</span>
                                            )}
                                        </div>


                                        <br /><h4 style={{ color:'#003399'}}>Appoinment Details</h4><br />

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Project Category</b></label>
                                            <select name="projectcategory" value={this.state.projectcategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select project category--</option>
                                                <option value="Hydro Power Project">Hydro Power Project</option>
                                                <option value="Reforestation Project">Reforestation Project</option>
                                                <option value="Solar Power Project">Solar Power Project</option>
                                                <option value="Carbon Project">Carbon Project</option>
                                            </select>
                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Time Period</b></label>
                                            <select name="timeperiod" value={this.state.timeperiod} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select A Month--</option>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>

                                            </select>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Discussion Platform</b></label>
                                            <select name="discussionplatform" value={this.state.discussionplatform} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                                <option defaultValue>--Select Platform--</option>
                                                <option value="Online">Online</option>
                                                <option value="Physical">Physical</option>
                                            </select>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}><b>Additional Notes (Optional)</b></label>
                                            <textarea type="text"
                                                className="form-control"
                                                name="additionalnotes"
                                                placeholder="Type Here...."
                                                value={this.state.additionalnotes}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        </form>
                                        <br/>
                                        <div class="buttonsSubmit" class="bodySubmit">
                                            <div class="containerSubmit">

                                                <a onClick={this.onSubmit} class="btnSubmit effect04" data-sm-link-text="Done" target="_blank"><span>Submit</span></a>
                                            </div>
                                        </div>
                                    

                                        <br /><br />


                                  
                                    <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft: '350px' }} onClick={this.btnDemo}>
                                        <i className="far far-check-square"></i>
                                        &nbsp; <b>Demo</b>
                                    </button><br /> <br />
                                </div>
                            </MDBCard>

                            <br /> <br />
                        </center>

                        <br /> <br /> <br /> <br />
                    </div>
                </div>
            </div>
        )
    }
}
