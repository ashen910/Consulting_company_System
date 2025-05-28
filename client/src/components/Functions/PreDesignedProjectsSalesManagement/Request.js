import React, { Component } from 'react'
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

const emailRegex = RegExp(
  /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
);

const phoneRegex = RegExp(
  /^[0-9]{10}$/
);


const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;
};

export default class Request extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pdpId: "",
      name: "",
      email: "",
      contact: "",

      formErrors: {
        email: "",
        contact: "",
        pdpId: ""
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

      case "pdpId":
        formErrors.pdpId = value.length <5 ? "minimum 5 characters required!" : "";
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

    const { pdpId, name, email, contact } = this.state;

    const data = {

      pdpId: pdpId,
      name: name,
      email: email,
      contact: contact


    }
    console.log(data)

    this.setState(
        {
          pdpId: "pdp145",
          name: "Nilantha Jayasooriya",
          email: "nilanthajayasooriya@gmail.com",
          contact: "0705234781"
        }
    )

}



  onSubmit = (e) => {

    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      const { pdpId, name, email, contact } = this.state;

      const data = {
        pdpId: pdpId,
        name: name,
        email: email,
        contact: contact

      }

      console.log(data)

      axios.post("/buyer/save", data).then((res) => {
        if (res.data.success) {
          alert("Your request has been sent Successfully");
          this.setState(
            {
              pdpId: "",
              name: "",
              email: "",
              contact: ""

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

      <div className="b" style={{ zIndex: 8 }}>
          <div class="bg"></div>
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>
        <center>
          <br />

          <br /> <br /> <br />
          <div id="containerJoin">
<center>
        <h1 className="gifJoin">Request Your Project</h1>
     </center>
  
</div>
          <center><h1 className="h3 mb-3 font-weight-normal"><b>.</b></h1></center>

          <MDBCard className='text-black mb-3' style={{ maxWidth: '40rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
            <br />
            <div className="col-md-8 mt-4 mx-auto">

              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} ><b>PDP ID</b></label>
                  <input type="text"
                    className="form-control"
                    name="pdpId"
                    placeholder="Pre Designed Project ID"
                    value={this.state.pdpId}
                    onChange={this.handleInputChange} />
                  {formErrors.pdpId.length > 0 && (
                    <span className="errorMessage">{formErrors.pdpId}</span>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Client or Company Name</b></label>
                  <input type="text"
                    className="form-control"
                    name="name"
                    placeholder="Client / Company name"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Email</b></label>
                  <input type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>



                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Contact Number</b></label>
                  <input type="text"
                    className="form-control"
                    name="contact"
                    placeholder="Contact Number"
                    value={this.state.contact}
                    onChange={this.handleInputChange} />
                  {formErrors.contact.length != 10 && (
                    <span className="errorMessage">{formErrors.contact}</span>
                  )}
                </div>
<br/>
                <div class="buttonsSubmit" class="bodySubmit">
                                            <div class="containerSubmit">

                                                <a onClick={this.onSubmit} class="btnSubmit effect04" data-sm-link-text="Done" target="_blank"><span>Request</span></a>
                                            </div>
                                        </div>

                {/* <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far far-check-square"></i>
                  &nbsp; Request
                </button><br /><br /> */}

              </form>
              <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'300px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /><br />

              <br />
            </div>
          </MDBCard>
          <br></br>
          <br></br>
        </center>
      </div>



    )
  }
}