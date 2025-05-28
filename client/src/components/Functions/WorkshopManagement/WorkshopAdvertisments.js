import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';



const emailRegex = RegExp(
    /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
);

const phoneRegex = RegExp(
    /^[0-9]{10}$/
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


export default class CreateWorkshop extends Component {

    constructor(props) {
        super(props);
        this.state = {

            name: "",
            email: "",
            contactNo: "",

            formErrors: {
                email: "",
                contactNo: "",
                name: "",
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

            case "contactNo":
                formErrors.contactNo = phoneRegex.test(value) ? ""
                    : "invalid contact number";
                break;
                case "name":
                    formErrors.name = charRegex.test(value) ? ""
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
    
        const { name,email,contactNo } = this.state;
    
        const data = {
    
           
            name:name,
            email:email,
            contactNo:contactNo
    
        }
        console.log(data)
    
        this.setState(
            {
                name:"Charitha Dissanayake",
                email:"charithadissanayake@gmail.com",
                contactNo:"0702354628"
    
            }
        )
    
    }
    

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            const { name, email, contactNo } = this.state;

            const data = {

                name: name,
                email: email,
                contactNo: contactNo
            }

            console.log(data)

            axios.post("/workshop/save", data).then((res) => {
                if (res.data.success) {
                    alert("Successfully Registered to Workshop");
                    this.setState(
                        {
                            name: "",
                            email: "",
                            contactNo: ""

                        }
                    )
                }
            })
        }
        else {
            console.error("Form Invalid");
        }


    }


    render() {
        const { formErrors } = this.state;
        return (


            <div className=" fixed" style={{ zIndex: 8 }}>
                <div>
                        <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>
                <center>
                    <br /> 

                    <img style={{ width: '15rem' }} alt='...' src='https://www.unido.org/sites/default/files/inline-images/register_0.gif' />
                  
                    <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '32rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <br />
                        <div className="col-md-8 mt-4 mx-auto">
                            <form className="needs-validation" noValidate>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Name</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                          {formErrors.name.length != 10 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Email</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Your Email Address"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                    {formErrors.email.length > 0 && (

                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>ContactNo</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="contactNo"
                                        placeholder="Enter Your ContactNo"
                                        value={this.state.contactNo}
                                        onChange={this.handleInputChange} />
                                    {formErrors.contactNo.length != 10 && (
                                        <span className="errorMessage">{formErrors.contactNo}</span>
                                    )}
                                </div>



                                {/* <center><button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp;<b> Register</b>
                                </button>
                                    <br /><br />
                                </center> */}


                            </form>
                            <br/>
                            <div class="buttonsSubmit" class="bodySubmit">
                                            <div class="containerSubmit">

                                                <a onClick={this.onSubmit} class="btnSubmit effect04" data-sm-link-text="Done" target="_blank"><span>Register</span></a>
                                            </div>
                                        </div>
                                        <br/><br/>

							 <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'250px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /><br />
                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
            </div>
            </div>
        )
    }
}


