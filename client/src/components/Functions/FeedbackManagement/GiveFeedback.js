import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const emailRegex = RegExp(
    /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/
);
const lengthRegex = RegExp(
    /^[0-9+a-z+A-Z]{4,100000}$/
);
const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
};

export default class GiveFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Date: "",
            Rate: "",
            Email: "",
            Feedback: "",

            formErrors: {
                Email: "",
                Feedback: ""
            }

        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "Email":
                formErrors.Email = emailRegex.test(value) ? ""
                    : "invalid email address";
                break;
            case "Feedback":
                formErrors.Feedback = lengthRegex.test(value) ? ""
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

        const { Date, Rate, Email, Feedback } = this.state;

        const data = {


            Date: Date,
            Rate: Rate,
            Email: Email,
            Feedback: Feedback,

        }
        console.log(data)

        this.setState(
            {
                Date: "2021-10-12",
                Rate: "4",
                Email: "gangaminiathmaja21@gmail.com",
                Feedback: "Thanks for you the cooparation, Great Work!!!",

            }
        )

    }


    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            const { Date, Rate, Email, Feedback } = this.state;

            const data = {
                Date: Date,
                Rate: Rate,
                Email: Email,
                Feedback: Feedback,
            }

            console.log(data)

            axios.post("/post/save", data).then((res) => {
                if (res.data.success) {
                    alert("Feedback Send Successfully");
                    this.setState(
                        {
                            Date: "",
                            Rate: "",
                            Email: "",
                            Feedback: ""

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
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>


                <br /> <br /> <br />

                <div id="wrapper">
                    <div id="containerJoin">
<center>
                        <h1 className="gifJoin">..Give Us Your Feedback..</h1>
</center>
                    </div>
                </div> <br /> <br /> <br />
                <center>
                    <br /> <br /> <br /> <br />

                    <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '35rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <div className="col-md-8 mt-4 mx-auto">


                            <form className="needs-validation" noValidate>



                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b> Date</b></label>
                                    <input type="Date"
                                        className="form-control"
                                        name="Date"
                                        placeholder=""
                                        value={this.state.Date}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div class="form-group">
                                    <label style={{ marginBottom: '5px' }}><b>Rate Us</b></label>
                                    <div className="star-widget">
                                        <input
                                            type="radio"
                                            className="form-control"
                                            name="Rate"
                                            id="rate-5"
                                            onChange={this.handleInputChange}
                                            value="5" />
                                        <label for="rate-5" class="fas fa-star"></label>

                                        <input
                                            type="radio"
                                            className="form-control"
                                            name="Rate"
                                            id="rate-4"
                                            onChange={this.handleInputChange}
                                            value="4" />
                                        <label for="rate-4" class="fas fa-star"></label>

                                        <input
                                            type="radio"
                                            className="form-control"
                                            name="Rate"
                                            id="rate-3"
                                            onChange={this.handleInputChange}
                                            value="3" />
                                        <label for="rate-3" class="fas fa-star"></label>

                                        <input
                                            type="radio"
                                            className="form-control"
                                            class="form-floating"
                                            name="Rate"
                                            id="rate-2"
                                            onChange={this.handleInputChange}
                                            value="2" />
                                        <label for="rate-2" class="fas fa-star"></label>

                                        <input
                                            type="radio"
                                            className="form-control"
                                            name="Rate"
                                            id="rate-1"
                                            onChange={this.handleInputChange}
                                            value="1" />
                                        <label for="rate-1" class="fas fa-star"></label>

                                    </div>
                                </div>

                                <br /><br />
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Email</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="Email"
                                        placeholder="Enter Valid Email Address"
                                        value={this.state.Email}
                                        onChange={this.handleInputChange} />
                                    {formErrors.Email.length > 0 && (
                                        <span className="errorMessage">{formErrors.Email}</span>
                                    )}
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Feedback</b></label>
                                    <textarea mdbInput class="form-control" id="textAreaExample" rows="4"

                                        name="Feedback"
                                        placeholder="Type here..."
                                        value={this.state.Feedback}
                                        onChange={this.handleInputChange}
                                    />
                                    {formErrors.Feedback.length > 0 && (
                                        <span className="errorMessage">{formErrors.Feedback}</span>
                                    )}
                                </div>





                                <div class="buttonsSubmit" class="bodySubmit">
                                    <div class="containerSubmit">

                                        <a onClick={this.onSubmit} class="btnSubmit effect04" data-sm-link-text="Done" target="_blank"><span>Send</span></a>
                                    </div>
                                </div>


                                <br /><br />

                            </form>
                            <center>
                                <a className="btn btn-info  " href="/ClientReviews" >
                                    <MDBIcon fas icon="arrow" size='2x' />&nbsp;<b>See All Reviews</b>
                                </a>


                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <button className="btn btn-warning" type="submit" onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button>

                                <br /><br />
                            </center>

                        </div>
                    </MDBCard>

                    <br /> <br /> <br /> <br />

                </center>

            </div>
        )
    }
}
