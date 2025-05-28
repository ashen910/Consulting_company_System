import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';
import { Container } from 'reactstrap';


const emailRegex = RegExp(
    /^[a-z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
  );

const phoneRegex = RegExp(
    /^[0-9]{10,15}$/
  );

  const charRegex = RegExp(
    /^[a-zA-Z]{1,50}$/
  );


const priceRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
};

export default class createCashFlows extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            projectCategory: "",
            name: "",
            companyName: "",
            email: "",
            contactNumber: "",
            fieldCost: "",
            metirialCost: "",
            commission: "",
            total: "",
            advance: "",
            payble: "",
            date: "",

            formErrors: {
                name: "",
                email: "",
                fieldCost: "",
                metirialCost: "",
                commission: "",
                advance: "",
                contactNumber: "",
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
            case "fieldCost":
                formErrors.fieldCost = priceRegex.test(value) ? ""
                    : "Must be a decimal value!";
                break;
            case "metirialCost":
                formErrors.metirialCost = priceRegex.test(value) ? ""
                    : "Must be a decimal value!";
                break;
            case "commission":
                formErrors.commission = priceRegex.test(value) ? ""
                    : "Must be a decimal value!";
                break;
            case "advance":
                formErrors.advance = priceRegex.test(value) ? ""
                    : "Must be a decimal value!";
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

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    totBudget = (e) => {
        e.preventDefault();



        const { _id, projectCategory, name, companyName, email, contactNumber, fieldCost, metirialCost, commission, total, advance, payble, date } = this.state;
        this.setState({ total: parseInt(this.state.fieldCost) + parseInt(this.state.metirialCost) + parseInt(this.state.commission) +  ".00"})
    }


    totPayble = (e) => {
        e.preventDefault();

        const { _id, projectCategory, name, companyName, email, contactNumber, fieldCost, metirialCost, commission, total, advance, payble, date } = this.state;
        this.setState({ payble: parseInt(this.state.total) - parseInt(this.state.advance) +  ".00" })
    }

    generateKey = (e) => {
        e.preventDefault();

        const { _id, projectCategory, name, companyName, email, contactNumber, fieldCost, metirialCost, commission, total, advance, payble, date } = this.state;
        this.setState({ _id: "Cash" + parseInt(this.state.contactNumber) })
    }


    
    btnDemo = (e) => {
        e.preventDefault();

      
        const { _id, projectCategory, name, companyName, email, contactNumber, fieldCost, metirialCost, commission, total, advance, payble, date } = this.state;
        const data = {

           
            _id: _id,
            projectCategory: projectCategory,
            name: name,
            companyName: companyName,
            email: email,
            contactNumber: contactNumber,
            fieldCost: fieldCost,
            metirialCost: metirialCost,
            commission: commission,
            total: total,
            advance: advance,
            payble: payble,
            date: date




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
                fieldCost: "300000.00",
                metirialCost: "450000.00",
                commission: "200000.00",
                total: "",
                advance: "300000.00",
                payble: "",
                date: "2021-10-12"

            }
        )
   
    }

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            const { _id, projectCategory, name, companyName, email, contactNumber, fieldCost, metirialCost, commission, total, advance, payble, date } = this.state;

            const data = {

                _id: _id,
                projectCategory: projectCategory,
                name: name,
                companyName: companyName,
                email: email,
                contactNumber: contactNumber,
                fieldCost: fieldCost,
                metirialCost: metirialCost,
                commission: commission,
                total: total,
                advance: advance,
                payble: payble,
                date: date


            }

            console.log(data)

            axios.post("/cashflow/save", data).then((res) => {
                let path = "/projectCashFlows";
                if (res.data.success) {
                    alert("Add a Cash-Flow Statement Successfully");
                    this.props.history.push(path);
                    this.setState(
                        {
                            _id: "",
                            projectCategory: "",
                            name: "",
                            companyName: "",
                            email: "",
                            contactNumber: "",
                            fieldCost: "",
                            metirialCost: "",
                            commission: "",
                            total: "",
                            advance: "",
                            payble: "",
                            date: ""

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
            <div className="com-md-8 mt-4 mx-auto">
                <br /> <br />
                <center><h1><span class="badge bg-info text-dark opacity-90 fs-1">Create A New Project Cash-Flow Statement</span></h1></center>

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
                                    <label style={{ marginBottom: '5px' }}><b>Contact Number</b></label>
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
                                    <select name="projectCategory"  value={this.state.projectCategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Project Category--</option>
                                        <option value="Hydro Power Project">Hydro Power Project</option>
                                        <option value="Reforestation Project">Reforestation Project</option>
                                        <option value="Solar Power Project">Solar Power Project</option>
                                        <option value="Carbon Project">Carbon Project</option>
                                    </select>
                                </div><br /><br />


                                <h3 style={{ color: '#0000FF' }}>Cash Flow Statement</h3><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Assign a Cash-Flow ID</b></label><br />
                                    <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.generateKey}>
                                        <i className="far far-check-square"></i>
                                        &nbsp; Generate Cash-Flow ID
                                    </button><br /><br />
                                    <input type="text"
                                        className="form-control"
                                        name="_id"
                                        placeholder="EX:Cashxxxxxxx"
                                        value={this.state._id}
                                        onChange={this.handleInputChange} />
                                    
                                </div><br /><br />



                                <h5 style={{ color: '#0000FF' }}>Calculate Total Project Budget</h5><br />
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Field Survey Cost (Rupees)</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="fieldCost"
                                        placeholder="RS XXXX.XX"
                                        value={this.state.fieldCost}
                                        onChange={this.handleInputChange} />
                                    {formErrors.fieldCost.length > 0 && (
                                        <span className="errorMessage">{formErrors.fieldCost}</span>
                                    )}
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Project Metirial Cost (Rupees)</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="metirialCost"
                                        placeholder="RS XXXX.XX"
                                        value={this.state.metirialCost}
                                        onChange={this.handleInputChange} />
                                    {formErrors.metirialCost.length > 0 && (
                                        <span className="errorMessage">{formErrors.metirialCost}</span>
                                    )}
                                </div><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Project Commision (Rupees)</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="commission"
                                        placeholder="RS XXXX.XX"
                                        value={this.state.commission}
                                        onChange={this.handleInputChange} />
                                    {formErrors.commission.length > 0 && (
                                        <span className="errorMessage">{formErrors.commission}</span>
                                    )}
                                </div><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>


                                    <label style={{ marginBottom: '5px' }}><b>Total Project Budget (Rupees)</b></label><br />
                                    <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.totBudget}>
                                        <i className="far far-check-square"></i>
                                        &nbsp; Calculate Total Project Budget
                                    </button><br /> <br />
                                    <input type="text"
                                        className="form-control"
                                        name="total"
                                        placeholder="RS XXXX.XX"
                                        value={this.state.total}
                                        onChange={this.handleInputChange} />

                                    
                                </div>


                                <br /><br />


                                <h5 style={{ color: '#0000FF' }}>Calculate Total Payment Amount</h5><br />

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Advance Fee (Rupees)</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="advance"
                                        placeholder="RS XXXX.XX"
                                        value={this.state.advance}
                                        onChange={this.handleInputChange} />
                                    {formErrors.advance.length > 0 && (
                                        <span className="errorMessage">{formErrors.advance}</span>
                                    )}
                                </div><br />


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Total Payment Amount (Ruppes) </b></label><br />
                                    <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.totPayble}>
                                                <i className="far far-check-square"></i>
                                                &nbsp; Calculate Total Payment Amount
                                        </button><br /><br />
                                         <input type="text"
                                            className="form-control"
                                            name="payble"
                                            placeholder="RS XXXX.XX"
                                            value={this.state.payble}
                                            onChange={this.handleInputChange} />
                             
                                </div><br />
                                  

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Date of publication</b></label>
                                    <input type="date"
                                        className="form-control"
                                        name="date"
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </div>


                                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; Submit
                                </button>
                                <br /> <br /> <br />
                            </form>
                            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'350px' }} onClick={this.btnDemo}>
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



