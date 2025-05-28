import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard } from 'mdb-react-ui-kit';

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


export default class AddWorkshopRecords extends Component {

    constructor(props) {
        super(props);
        this.state = {

            date: "",
            time: "",
            topic: "",
            platform: "",
            intellectual: "",
            published: "",

            formErrors: {
              topic : ""
                
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
            default:
                break;
        }

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();
    
        const { date, time, topic, platform, intellectual, published} = this.state;
    
        const data = {
    
           
            date: date,
            time: time,
            topic: topic,
            platform: platform,
            intellectual: intellectual,
            published: published
    
    
        }
        console.log(data)
    
        this.setState(
            {
                date: "2021-10-22",
                time: "08:00",
                topic: "Consultancy Industry",
                platform: "Online",
                intellectual: "Mr.Jananayake",
                published: "Published"
    
            }
        )
    
    }
    

    onSubmit = (e) => {

        e.preventDefault();

        if (formValid(this.state.formErrors)) {
        const { date, time, topic, platform, intellectual, published } = this.state;

        const data = {

            date: date,
            time: time,
            topic: topic,
            platform: platform,
            intellectual: intellectual,
            published: published
        }

        console.log(data)

        axios.post("/timetable/save", data).then((res) => {
            let path = "/workshopTimetable";
            if (res.data.success) {
                alert("Create a Timetable Successfully");
                this.props.history.push(path);
                this.setState(
                    {
                        date: "",
                        time: "",
                        topic: "",
                        platform: "",
                        intellectual: "",
                        published: ""

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
                    <br /> <br />
                    <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Create New Workshop Timetable</b></h1></center>
                    <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '35rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
                        <br />
                        <div className="col-md-8 mt-4 mx-auto">

                            <form className="needs-validation" noValidate>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} ><b>Date</b></label>
                                    <input type="date"
                                        className="form-control"
                                        name="date"
                                        placeholder="Enter Date"
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Time</b></label>
                                    <input type="time"
                                        className="form-control"
                                        name="time"
                                        placeholder="Enter Time"
                                        value={this.state.time}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Topic</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="topic"
                                        placeholder="Enter Topic"
                                        value={this.state.topic}
                                        onChange={this.handleInputChange} />
                                          {formErrors.topic.length > 0 && (
                                        <span className="errorMessage">{formErrors.topic}</span>
                                    )}
                                </div>



                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Platform</b></label>
                                    <select name="platform" value={this.state.platform} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Platform</option>
                                        <option value="Online">Online</option>
                                        <option value="Physical">Physical</option>

                                    </select>
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Intellectual</b></label>
                                    <input type="text"
                                        className="form-control"
                                        name="intellectual"
                                        placeholder="Enter Intellectual"
                                        value={this.state.intellectual}
                                        onChange={this.handleInputChange} />
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}><b>Status</b></label>
                                    <select name="published" value={this.state.published} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                        <option defaultValue>--Select Status</option>
                                        <option value="Published">Published</option>
                                        <option value="Not Published">Not Published</option>

                                    </select>
                                </div>




                                <center><button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp;<b> Add New Workshop</b>
                                </button>
                                    <br /><br />
                                </center>

                            </form>
                            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'250px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                                </button> <br /><br />
                        </div>
                    </MDBCard>
                    <br /> <br /> <br /> <br />
                </center>
            </div>
        )
    }
}
