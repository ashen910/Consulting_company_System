import React, { Component } from 'react'
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';


const emailRegex = RegExp(
  /^[a-z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
);

const phoneRegex = RegExp(
  /^[0-9]{10}$/
);

const charRegex = RegExp(
  /^[a-zA-Z]{1,50}$/
);

const nicRegex = RegExp(
  /^[0-9+v]{10,12}$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;
};


<mdb-form-control>
  <input
    mdbInput
    class="form-control"
    id="formControlReadonly"
    type="text"></input>

</mdb-form-control>



export default class JobApplicationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      nic:"",
      address: "",
      contact: "",
      email: "",
      url: "",

      formErrors: {
        name: "",
        email: "",
        contact: "",
        nic:""
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

      case "contact":
        formErrors.contact = phoneRegex.test(value) ? ""
          : "invalid contact number";
          break;
       case "nic":
            formErrors.nic = nicRegex.test(value) ? ""
              : "invalid NIC number";
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

    const { name, gender, nic, address, contact, email, url } = this.state;

    const data = {

       
      name: name,
      gender: gender,
      nic:nic,
      address: address,
      contact: contact,
      email: email,
      url: url



    }
    console.log(data)

    this.setState(
        {

            name: "A.S.P. Rajapaksha",
            gender: "Male",
            nic:"956725864v",
            address: "No.23/100, Colombo road, Chilaw",
            contact: "0769454552",
            email: "ashenofficial45@gmail.com",
            url: "https://ashenofficial.linkedIn.com"

        }
    )

}

  onSubmit = (e) => {

    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      const { name, gender, nic, address, contact, email, url } = this.state;

      const data = {
        name: name,
        gender: gender,
        nic:nic,
        address: address,
        contact: contact,
        email: email,
        url: url

      }

      console.log(data)

      axios.post("/applicant/save", data).then((res) => {
        if (res.data.success) {
          alert("Your submission has been sent Successfully");
          this.setState(
            {

              name: "",
              gender: "",
              nic:"",
              address: "",
              contact: "",
              email: "",
              url: ""
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
      <div className="client fixed" style={{ zIndex: 8 }}>
        
        <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>
                        <center>
          <br />

          
          <img style={{ width: '15rem' }} alt='...' src='https://quickjobtoday.com/images/apply.gif' />
               
          <br /><br />
          <MDBCard className='text-black mb-3' style={{ maxWidth: '40rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >

            <div className="col-md-8 mt-4 mx-auto">
              <br />

              <form className="needs-validation" >
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} ><b>Full Name</b></label>
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


                <div class="form-group">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={this.handleInputChange}
                    value="Male"
                  />
                  <label class="form-check-label" for="flexRadioDefault1"> Male </label>&nbsp;&nbsp;

                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={this.handleInputChange}
                    value="Female"
                  />
                  <label class="form-check-label" for="flexRadioDefault2"> Female </label>&nbsp;&nbsp;


                </div><br />

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>NIC Number</b></label>
                  <input type="text"
                    className="form-control"
                    name="nic"
                    placeholder="Enter Valid NIC Number"
                    value={this.state.nic}
                    onChange={this.handleInputChange} />
                  {formErrors.nic.length != 10 && (
                    <span className="errorMessage">{formErrors.nic}</span>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Address</b></label>
                  <textarea mdbInput class="form-control" id="textAreaExample" rows="4"

                    name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Contact Number</b></label>
                  <input type="text"
                    className="form-control"
                    name="contact"
                    placeholder="Enter Valid Phone Number"
                    value={this.state.contact}
                    onChange={this.handleInputChange} />
                  {formErrors.contact.length != 10 && (
                    <span className="errorMessage">{formErrors.contact}</span>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Email</b></label>
                  <input type="text"
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
                  <label style={{ marginBottom: '5px' }}><b>LinkedIn Url</b></label>
                  <input type="text"
                    className="form-control"
                    name="url"
                    placeholder="Your LinkedIn profile URL"
                    value={this.state.url}
                    onChange={this.handleInputChange} />


                </div>
                
                <br />
                <p><b>* Send your CV to</b></p>
                <p>ravanaengineering@gmail.com</p>
                </form>
                <br/>
                <div class="buttonsSubmit" class="bodySubmit">
                                            <div class="containerSubmit">

                                                <a onClick={this.onSubmit} class="btnSubmit effect04" data-sm-link-text="Done" target="_blank"><span>Submit</span></a>
                                            </div>
                                        </div>
                                    
            
                <br /><br />
              
              <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'300px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /><br />

            </div>



          </MDBCard >
          <br />
        </center>
      </div>
    )
  }
}
