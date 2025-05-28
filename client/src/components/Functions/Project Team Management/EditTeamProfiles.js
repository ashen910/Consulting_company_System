import React, { Component } from 'react'
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';


const noRegex = RegExp(
  /^[2-4]{1}$/
);

const lengthRegex = RegExp(
  /^[0-9+a-z+A-Z]{4,100000}$/
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


export default class EditTeamProfiles extends Component {

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

      formErrors: {
        name:"",
        noMembers: "",
        member01: "",
        member02: "",
        member03: "",
        member04: "",

      }

    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    let formErrors = this.state.formErrors;

    switch (name) {
      case "noMembers":
        formErrors.noMembers = noRegex.test(value) ? ""
          : "invalid Number Of Members!";
        break;
      case "member01":
        formErrors.member01 = lengthRegex.test(value) ? ""
          : "too short details!";
        break;
      case "member02":
        formErrors.member02 = lengthRegex.test(value) ? ""
          : "too short details!";
        break;
      case "member03":
        formErrors.member03 = lengthRegex.test(value) ? ""
          : "too short details!";
        break;
      case "member04":
        formErrors.member04 = lengthRegex.test(value) ? ""
          : "too short details!";
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

  onSubmit = (e) => {

    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      const id = this.props.match.params.id;
      const { _id, name, category, type, date, noMembers, member01, member02, member03, member04 } = this.state;

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

      }

      console.log(data)

      axios.put(`/team/update/${id}`, data).then((res) => {
        let path = "/projectTeams";
        if (res.data.success) {
          alert("Project Team Profile Updated Successfully");
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

            }
          )
        }
      })
    }

    else {
      console.error("Form Invalid");
    }

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
        <center><h1><span class="badge bg-info text-dark opacity-90 fs-1">Edit Project Team Profile</span></h1></center>

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
                  <select name="type" value={this.state.type} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                    <option defaultValue>--Select Team Type--</option>
                    <option value="Office Work">Office Work</option>
                    <option value="Field Work">Field Work</option>
                  </select>
                </div><br />

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Client/Company Name</b></label>
                  <input type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name with Initials"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                    {formErrors.name.length > 0 && (
                                                <span className="errorMessage">{formErrors.name}</span>
                                         )}
                </div><br />

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Project Category</b></label>
                  <select name="category" value={this.state.category} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                    <option defaultValue>--Select Project Category--</option>
                    <option value="Hydro Power Project">Hydro Power Project</option>
                    <option value="Reforestation Project">Reforestation Project</option>
                    <option value="Solar Power Project">Solar Power Project</option>
                    <option value="Carbon Project">Carbon Project</option>
                  </select>
                </div><br />

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Due Date</b></label>
                  <input type="date"
                    className="form-control"
                    name="date"
                    placeholder=""
                    value={this.state.date}
                    onChange={this.handleInputChange} />
                </div><br /><br />


                <h4 style={{ color: '#0000FF' }}>Member Details</h4><br />

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>No Of Members (2 - 4)</b></label>
                  <input type="text"
                    className="form-control"
                    name="noMembers"
                    placeholder=""
                    value={this.state.noMembers}
                    onChange={this.handleInputChange} />
                  {formErrors.noMembers.length > 0 && (
                    <span className="errorMessage">{formErrors.noMembers}</span>
                  )}
                </div><br />

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Member 01</b></label>
                  <textarea mdbInput class="form-control" id="textAreaExample" rows="3"

                    name="member01"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member01}
                    onChange={this.handleInputChange} />
                  {formErrors.member01.length > 0 && (
                    <span className="errorMessage">{formErrors.member01}</span>
                  )}
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Member 02</b></label>
                  <textarea mdbInput class="form-control" id="textAreaExample" rows="3"

                    name="member02"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member02}
                    onChange={this.handleInputChange} />
                  {formErrors.member02.length > 0 && (
                    <span className="errorMessage">{formErrors.member02}</span>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Member 03</b></label>
                  <textarea mdbInput class="form-control" id="textAreaExample" rows="3"

                    name="member03"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member03}
                    onChange={this.handleInputChange} />
                  {formErrors.member03.length > 0 && (
                    <span className="errorMessage">{formErrors.member03}</span>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}><b>Member 04</b></label>
                  <textarea mdbInput class="form-control" id="textAreaExample" rows="3"

                    name="member04"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member04}
                    onChange={this.handleInputChange} />
                  {formErrors.member04.length > 0 && (
                    <span className="errorMessage">{formErrors.member04}</span>
                  )}
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