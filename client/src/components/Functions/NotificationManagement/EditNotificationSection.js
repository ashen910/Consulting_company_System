import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

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

export default class EditNotificationSection extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            description: "",
            date: "",

            formErrors: {
                topic: "",
                 description: "",
                 
 
             }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
           
                case "topic":
                    formErrors.topic = lengthRegex.test(value) ? ""
                        : "too short!";
                    break;
                    case "description":
                    formErrors.description = lengthRegex.test(value) ? ""
                        : "too short!";
                    break;

            default:
                break;
        }

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        if (formValid(this.state.formErrors)) {
        const id = this.props.match.params.id;
        const { topic, description, date } = this.state;

        const data = {
            topic: topic,
            description: description,
            date: date
        }

        console.log(data)

        axios.put(`/notification/update/${id}`, data).then((res) => {
            let path = "/adminNotificationSection";
            if (res.data.success) {
                this.props.history.push(path)
                alert("Notice Updated Successfully")
                this.setState(
                    {
                        topic: "",
                        description: "",
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

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/notification/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    topic: res.data.notification.topic,
                    description: res.data.notification.description,
                    date: res.data.notification.date
                });

                console.log(this.state.notification);

            }

        });

    }

    render() {
        const { formErrors } = this.state;
        return (


            <div className="back fixed" style={{ zIndex: 8 }}>
                <center>
                    <br /> <br />
                    <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Edit Notice</b></h1></center>
                    <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '40rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <div className="col-md-8 mt-4 mx-auto">


                            <br /><br />

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}><b>Topic</b></label>
                                <input type="text"
                                    className="form-control"
                                    name="topic"
                                    placeholder="Topic"
                                    
                                    value={this.state.topic}
                                    onChange={this.handleInputChange} />
                                       {formErrors.topic.length > 0 && (
                                        <span className="errorMessage">{formErrors.topic}</span>
                                    )}
                            </div>


                            <br />

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}><b>Description</b></label>
                                <textarea mdbInput class="form-control" id="textAreaExample" rows="6"

                                    name="description"
                                    placeholder="Type here.."
                                    value={this.state.description}
                                    onChange={this.handleInputChange} />
                                       {formErrors.description.length > 0 && (
                                        <span className="errorMessage">{formErrors.description}</span>
                                    )}
                            </div>


                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}><b> Date</b></label>
                                <input type="date"
                                    className="form-control"
                                    name="date"
                                    placeholder=""
                                    value={this.state.date}
                                    onChange={this.handleInputChange} />
                            </div>
                            <br />


                            <button className="btn btn-success" type="submit" href="/AdminNotificationSection" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                <i className="far far-check-square"></i>
                                &nbsp; <b>Save changes</b>
                            </button>


                            <br />


                            <br />







                        </div>



                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>




            </div>
        )
    }
}