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
    /^[a-zA-Z]{1,50}$/
  );

const nicRegex = RegExp(
    /^[0-9+v]{10,12}$/
  );

const formValid = formErrors =>{
     let valid = true;
 
     Object.values(formErrors).forEach(val => {
         val.length > 0 && (valid = false)
     });
     return valid;
 };


export default class CreateUserProfiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            surname: "",
            companyName: "",
            contactNumber: "",
            email: "",
            gender: "",
            country: "", 
            userCategory: "",
            password: "",
            nic: "",

            
            formErrors: {
                name: "",
                surname: "",
                email:"",
                contactNumber:"",
                nic:""
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
            case "nic":
                formErrors.nic = nicRegex.test(value) ? ""
                : "invalid Nic number";
                break;
            case "name":
                formErrors.name = charRegex.test(value) ? ""
                : "invalid name!";
                break;
            case "surname":
                formErrors.surname = charRegex.test(value) ? ""
                : "invalid surname!";
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

    generateKeyC = (e) => {
            e.preventDefault();
    
            const { _id, name, surname, companyName, nic, contactNumber, email, gender, country,userCategory, password } = this.state;
            this.setState({ _id: "C" + parseInt(this.state.contactNumber)})
        }
        
    generateKeyJC = (e) => {
          e.preventDefault();
    
          const { _id, name, surname, companyName, nic, contactNumber, email, gender, country,userCategory, password } = this.state;
            this.setState({ _id: "JC" + parseInt(this.state.nic)})
        }
        
      

        btnDemo = (e) => {
            e.preventDefault();
    
            const { _id, name, surname, companyName, contactNumber, email, gender, country, nic, userCategory, password } = this.state;
    
            const data = {
    
               
                _id: _id,
                name: name,
                surname: surname,
                companyName: companyName,
                contactNumber: contactNumber,
                email: email,
                gender: gender,
                country: country,
                nic:nic,
                userCategory: userCategory,
                password: password
    
    
    
            }
            console.log(data)
    
            this.setState(
                {
                    _id: "",
                    name: "Ashen",
                    surname: "Rajapaksha",
                    companyName: "",
                    contactNumber: "94769454552",
                    email: "ashenofficial45@gmail.com",
                    gender: "Male",
                    country: "Sri Lanka",
                    nic:"200009602428",
                    userCategory: "Junior Consultant",
                    password: "ravana345"
    
                }
            )
       
        }
      
   
        


    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)){
        const { _id, name, surname, companyName, nic, contactNumber, email, gender, country,userCategory, password } = this.state;

        const data = {
            _id: _id,
            name: name,
            surname: surname,
            companyName: companyName,
            nic:nic,
            contactNumber: contactNumber,
            email: email,
            gender: gender,
            country: country,
            userCategory: userCategory,
            password: password


        }

        console.log(data)

        axios.post("/userProfile/save", data).then((res) => {
            let path = "/userProfiles";
            if (res.data.success) {
                alert("Add a User to the Sytem Successfully!"); 
                this.props.history.push(path);
                this.setState(
                    {
                        _id: "",
                        name: "",
                        surname: "",
                        companyName: "",
                        contactNumber: "",
                        email: "",
                        gender: "",
                        country: "",
                        nic: "",
                        userCategory: "",
                        password: "",

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
            <div className="back fixed" style={{ zIndex: 8 }}><br />
            <div className="com-md-8 mt-4 mx-auto">
                <br /> <br />
                <center><h1><span class="badge bg-info text-dark opacity-90 fs-1">Create A New User Profile</span></h1></center>
                <center>
                    <br />


                    <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <div className="col-md-8 mt-4 mx-auto">
                            <br />
                            <form className="needs-validation" noValidate>

                            <h5 style={{ color: '#0000FF' }}>Select A User Category</h5><br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>User Category</b></label>
                                    <select name="userCategory"  value={this.state.userCategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select User Category--</option>
                                        <option value="Client">Client</option>
                                        <option value="Junior Consultant">Junior Consultant</option>
                                    </select>
                                </div><br /><br />
                           

                                <h5 style={{ color: '#0000FF' }}>User Personal Information</h5><br />
                                <div className="row">
                                <div className="col">
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Name</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter Firstname"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                         {formErrors.name.length != 10 && (
                                        <span className="errorMessage">{formErrors.name}</span>
                                        )}
                                </div>
                                </div>

                                <div className="col">
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Surname</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="surname"
                                        placeholder="Enter Surname"
                                        value={this.state.surname}
                                        onChange={this.handleInputChange} />
                                         {formErrors.surname.length != 10 && (
                                        <span className="errorMessage">{formErrors.surname}</span>
                                        )}
                                </div>
                                </div>
                                </div>

                                <center><h6>OR</h6></center>

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
                                    <label style={{ marginBottom: '5px' }}><b>NIC</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="nic"
                                        placeholder="Enter NIC Number"
                                        value={this.state.nic}
                                        onChange={this.handleInputChange} />
                                          {formErrors.nic.length >0 && (
                                            <span className="errorMessage">{formErrors.nic}</span>
                                        )} 
                                </div><br />

                                <div class="form-group">
                                <label style={{ marginBottom: '5px' }}><b>Select A Gender</b></label><br />
                                  <input type="text"
                                        className="form-control"
                                        name="gender"
                                        disabled
                                        value={this.state.gender}
                                        onChange={this.handleInputChange} />
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        onChange={this.handleInputChange}
                                        value="Male"
                                    />
                                    <label class="form-check-label" for="flexRadioDefault1">Male </label>&nbsp;&nbsp;

                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        onChange={this.handleInputChange}
                                        value="Female"
                                    />
                                    <label class="form-check-label" for="flexRadioDefault2"> Female </label>&nbsp;&nbsp;


                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        onChange={this.handleInputChange}  
                                        value="Not Mentioned"
                                    />
                                    <label class="form-check-label" for="flexRadioDefault2"> Not Mentioned </label>
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Country</b></label>
                                    <select name="country"  value={this.state.country} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
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
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Other">Other</option>
                                    </select>
                                  
                                </div><br />



                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Contact Number</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="contactNumber"
                                        placeholder="Enter Valid Contact Number (EX:94xxxxxxxxx)"
                                        value={this.state.contactNumber}
                                        onChange={this.handleInputChange} />
                                        {formErrors.contactNumber.length > 0 && (
                                            <span className="errorMessage">{formErrors.contactNumber}</span>
                                        )} 
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Email</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter valid Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                          {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                        )}
                                </div><br /><br />


                                <h5 style={{ color: '#0000FF' }}>Assign User ID & Password</h5><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>UserID</b></label><br />

                                <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.generateKeyC}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Generate For Clients
                                </button>&nbsp;&nbsp;
                                <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.generateKeyJC}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Generate For Junior Consultants
                                </button> <br /> <br />

            
                                    <input type="text"
                                        className="form-control"
                                        name="_id"
                                        placeholder="EX:Cxxxxxxxx / JCxxxxxx"
                                        value={this.state._id}
                                        onChange={this.handleInputChange} />
                                </div>
                                <br /><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Password</label>
                                    <input type="text"
                                        className="form-control"
                                        name="password"
                                        placeholder="EX:ravana1212"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </div>

                                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Submit
                                </button>
                                
                                <br /> <br /> 
                              
                                <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'300px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /> <br />
                    
                            </form>


                        </div>



                    </MDBCard><br /> <br /> <br /> <br />
                  
                </center>
            </div>
            </div>

        )
    }

}
