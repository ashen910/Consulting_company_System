import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

const priceRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
 );
 
 const formValid = formErrors =>{
     let valid = true;
 
     Object.values(formErrors).forEach(val => {
         val.length > 0 && (valid = false)
     });
     return valid;
 };
 

export default class editSalesRecords extends Component {


    constructor(props) {
        super(props);
        this.state = {

            pdpid: "",
            projectcategory: "",
            summary: "",
            price: "",

            formErrors: {
                price: "",
                pdpid: ""
            }


        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch(name){
            case "price":
                formErrors.price = priceRegex.test(value) ? ""
                :"price must be a decimal value";
                break;

                
            case "pdpid":
                formErrors.pdpid = value.length != 7 ? "7 characters required!" : "";
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

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)){
        const id = this.props.match.params.id;
        const { pdpid, projectcategory, summary, price } = this.state;

        const data = {

            pdpid: pdpid,
            projectcategory: projectcategory,
            summary: summary,
            price: price

        }

        console.log(data)

        axios.put(`/pdpRecord/update/${id}`, data).then((res) => {
            let path = "/salesRecords";
            if (res.data.success) {
                alert("pdpRecord Updated Successfully")
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
        else{
            console.error("Form Invalid");
        }


    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/pdpRecord/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    pdpid: res.data.pdpRecord.pdpid,
                    projectcategory: res.data.pdpRecord.projectcategory,
                    summary: res.data.pdpRecord.summary,
                    price: res.data.pdpRecord.price

                });

                console.log(this.state.pdpRecord);

            }

        });
       

    }

    render() {
        const { formErrors } = this.state;
        return (
            <div className="back fixed" style={{ zIndex: 8 }}><br />
                <center>
                    <br /> <br />
                    <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Edit Records</b></h1></center>
                        <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '35rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >


                        <div className="col-md-8 mt-4 mx-auto">
                            <form className="needs-validation" noValidate>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} >PDP ID</label>
                                    <input type="text"
                                        readOnly
                                        className="form-control"
                                        name="pdpid"
                                        placeholder="Enter PDP ID"
                                        value={this.state.pdpid}
                                        onChange={this.handleInputChange} />
                                          {formErrors.pdpid.length > 0 && (
                                        <span className="errorMessage">{formErrors.pdpid}</span>
                                    )}
                                </div>





                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Project Category</b></label>
                                    <select name="projectcategory" value={this.state.projectcategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >

                                        <option value="Hydro Power">Hydro Power</option>
                                        <option value="Reforestation">Reforestation</option>
                                        <option value="Solar Power">Solar Power</option>
                                        <option value="Carbon Projects">Carbon Projects</option>
                                    </select>
                                </div>







                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Summary</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="summary"
                                        placeholder="Summary"
                                        value={this.state.summary}
                                        onChange={this.handleInputChange} />
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Price</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="price"
                                        placeholder="Enter the Price"
                                        value={this.state.price}
                                        onChange={this.handleInputChange} />
                                          {formErrors.price.length > 0 && (
                                            <span className="errorMessage">{formErrors.price}</span>
                                        )}

                                </div>


                                <center> <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Save Changes</b>
                                </button>
                                    <br /><br />
                                </center>



                            </form>
                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
            </div>
        )
    }
}