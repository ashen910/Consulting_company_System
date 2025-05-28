import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';


const priceRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
);
const lengthRegex = RegExp(
    /^[0-9+a-z+A-Z\s]{4,100000}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
};

export default class addSalesRecords extends Component {

    constructor(props) {
        super(props);
        this.state = {

            pdpid: "",
            projectcategory: "",
            summary: "",
            price: "",

            formErrors: {
                price: "",
                pdpid: "",
                summary: ""

            }

        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "price":
                formErrors.price = priceRegex.test(value) ? ""
                    : "price must be a decimal value!";
                break;

            case "pdpid":
                formErrors.pdpid = value.length != 7 ? "7 characters required!" : "";
                break;

                case "summary":
                    formErrors.summary = lengthRegex.test(value) ? ""
                        : "too short!";
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
    
        const { pdpid, projectcategory, summary, price } = this.state;
    
        const data = {
    
            pdpid: pdpid,
            projectcategory: projectcategory,
            summary: summary,
            price: price
    
        }
        console.log(data)
    
        this.setState(
            {
                pdpid: "pdp1008",
                projectcategory: "Reforestation",
                summary: "",
                price: "350000.00"
    
            }
        )
    
    }
    

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            const { pdpid, projectcategory, summary, price } = this.state;

            const data = {

                pdpid: pdpid,
                projectcategory: projectcategory,
                summary: summary,
                price: price

            }

            console.log(data)

            axios.post("/pdpRecord/save", data).then((res) => {
                let path = "/salesRecords";
                if (res.data.success) {
                    alert("pdpRecord added Successfully")
                this.props.history.push(path);
                    this.setState(
                        {
                            pdpid: "",
                            projectcategory: "",
                            summary: "",
                            price: ""

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
            <div className="back fixed" style={{ zIndex: 8 }}><br />
                <center>
                    <br /> <br />
                    <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Add a New Record</b></h1></center>
                    <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '40rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >


                        <br />
                        <div className="col-md-8 mt-4 mx-auto">
                            <form className="needs-validation" noValidate>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>PDP ID (Must be 7 Charaters)</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="pdpid"
                                        placeholder="pdpxxxx"
                                        value={this.state.pdpid}
                                        onChange={this.handleInputChange} />
                                    {formErrors.pdpid.length > 0 && (
                                        <span className="errorMessage">{formErrors.pdpid}</span>
                                    )}
                                </div>



                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Project Category</b></label>
                                    <select name="projectcategory" value={this.state.projectcategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Project Category</option>
                                        <option value="Hydro Power">Hydro Power</option>
                                        <option value="Reforestation">Reforestation</option>
                                        <option value="Solar Power">Solar Power</option>
                                        <option value="Carbon Projects">Carbon Projects</option>
                                    </select>


                                </div>




                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Summary</b></label>
                                    <textarea type="text"
                                        className="form-control"
                                        name="summary"
                                        placeholder="Summary"
                                        value={this.state.summary}
                                        onChange={this.handleInputChange} />
                                          {formErrors.summary.length > 0 && (
                                        <span className="errorMessage">{formErrors.summary}</span>
                                    )}
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Price</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="price"
                                        placeholder="RS XXXX.XX"
                                        value={this.state.price}
                                        onChange={this.handleInputChange} />

                                    {formErrors.price.length > 0 && (
                                        <span className="errorMessage">{formErrors.price}</span>
                                    )}
                                </div>



                                <center><button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp;<b> Proceed</b>
                                </button>
                                    <br /><br />
                                </center>



                            </form>
                            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'300px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /><br />

                            <br />
                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
            </div>
        )
    }
}