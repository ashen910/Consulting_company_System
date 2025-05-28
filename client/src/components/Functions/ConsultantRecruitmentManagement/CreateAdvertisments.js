import React, { Component } from 'react'
import axios from 'axios';
import { MDBCard, MDBInput } from 'mdb-react-ui-kit';

const phoneRegex = RegExp(
  /^[0-9]{10}$/
);

const numRegex = RegExp(
  /^[0-9\b]$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;
};

export default class CreateAd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      qualification: "",
      experience: "",
      notice: "",
      date: "",
      contact: "",
      img: "",
      color: "",
      category: "",
      type: "",

      formErrors: {
        experience: "",
        contact: "",

      }
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    let formErrors = this.state.formErrors;

    switch (name) {

      case "contact":
        formErrors.contact = phoneRegex.test(value) ? ""
          : "invalid contact number";
        break;


      case "experience":
        formErrors.experience = numRegex.test(value) ? ""
          : "invalid number";
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

    const { qualification, experience, notice, date, contact, color, img, category, type } = this.state;

    const data = {

       
      qualification: qualification,
      experience: experience,
      notice: notice,
      date: date,
      contact: contact,
      color: color,
      img: img,
      category: category,
      type: type


    }
    console.log(data)

    this.setState(
        {
          qualification: "Post Graduate",
          experience: "2",
          notice: "",
          date: "2021-10-12",
          contact: "0777977566",
          color: "#00008B",
          img: "https://africalaunchpad.com/wp-content/uploads/2020/02/SMALL-BUSINESS-MARKETING-CONSULTANT-DO-YOU-NEED-TO-HIRE-THEM-cover.jpg",
          category: "Solar Power Project",
          type: "Field Work"

        }
    )

}

  onSubmit = (e) => {

    e.preventDefault();

    if (formValid(this.state.formErrors)) {

      const { qualification, experience, notice, date, contact, color, img, category, type } = this.state;

      const data = {
        qualification: qualification,
        experience: experience,
        notice: notice,
        date: date,
        contact: contact,
        color: color,
        img: img,
        category: category,
        type: type

      }

      console.log(data)

      axios.post("/ad/save", data).then((res) => {
        if (res.data.success) {
          let path = "/advertisments";
          alert("Create an Advertisment Successfully");
          this.props.history.push(path);
          this.setState(
            {
              qualification: "",
              experience: "",
              notice: "",
              date: "",
              contact: "",
              color: "",
              img: "",
              category: "",
              type: ""
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
      <div className="back fixed" style={{ zIndex: 8 }}>


        <center>
          <br /><br />
          <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Create a New Advertisement</b></h1></center>
          <br />
          <MDBCard className='text-black mb-3' style={{ maxWidth: '45rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
            <div className="col-md-8 mt-4 mx-auto">

            
              <form className="needs-validation" noValidate>


                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Select image</b></label>
                  <input type="url"
                    className="form-control"
                    name="img"
                    placeholder="paste image url"
                    value={this.state.img}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Select color</b></label>
                  <input type="color"
                    className="form-control"
                    name="color"
                    placeholder=""
                    value={this.state.color}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Project Category</b></label>
                  <select name="category" value={this.state.category} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                    <option defaultValue>--Select project category--</option>
                    <option value="Hydro Power Project">Hydro Power Project</option>
                    <option value="Reforestation Project">Reforestation Project</option>
                    <option value="Solar Power Project">Solar Power Project</option>
                    <option value="Carbon Project">Carbon Project</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Looking for</b></label>
                  <select name="type" value={this.state.type} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                    <option defaultValue>--Select Worker Type--</option>
                    <option value="Office Work">Office Workers</option>
                    <option value="Field Work">Field Workers</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} ><b>Required Qualification</b></label>
                  <select name="qualification" value={this.state.qualification} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                    <option defaultValue>--Select Qualfied Level--</option>
                    <option value="After Advanced Level">After Advanced Level</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>


                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Required Experience</b></label>
                  <input type="text"
                    className="form-control"
                    name="experience"
                    placeholder="Years of Experience (Ex:-4)"
                    value={this.state.experience}
                    onChange={this.handleInputChange} />
                  {formErrors.experience.length > 0 && (
                    <span className="errorMessage">{formErrors.experience}</span>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Additional Notices (Optional)</b></label>
                  <textarea mdbInput class="form-control" id="textAreaExample" rows="4"

                    name="notice"
                    placeholder="Notices"
                    value={this.state.notice}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Closing Date</b></label>
                  <input type="date"
                    className="form-control"
                    name="date"
                    placeholder=""
                    value={this.state.date}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Contact For More Details</b></label>
                  <input type="url"
                    className="form-control"
                    name="contact"
                    placeholder="Contact Number"
                    value={this.state.contact}
                    onChange={this.handleInputChange} />
                  {formErrors.contact.length != 10 && (
                    <span className="errorMessage">{formErrors.contact}</span>
                  )}
                </div>


                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far far-check-square"></i>
                  &nbsp; Publish
                </button>

                <br /><br />
              </form>
              <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'350px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /><br />

            </div>
          </MDBCard>
        </center><br /> <br /><br /> <br />
      </div>
    )
  }
}
