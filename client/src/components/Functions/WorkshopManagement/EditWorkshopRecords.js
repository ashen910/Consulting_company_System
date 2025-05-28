import React, {Component} from 'react';
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

export default class EditWorkshopRecords extends Component {

    constructor(props){
        super(props);
        this.state={
            date:"",
            time:"",
            topic:"",
            platform:"",
            intellectual:"",
            published:"",

            formErrors: {
                topic : ""
                  
              }
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

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
           [name]:value 
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        if (formValid(this.state.formErrors)) {
        const id = this.props.match.params.id;
        const{date,time,topic,platform,intellectual,published} = this.state;

        const data ={
            date:date,
            time:time,
            topic:topic,
            platform:platform,
            intellectual:intellectual,
            published:published
        }

        console.log(data)

        axios.put(`/timetable/update/${id}`,data).then((res) =>{
            let path = "/workshopTimetable";
            if(res.data.success){
                alert("Timetable Updated Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        date:"",
                        time:"",
                        topic:"",
                        platform:"",
                        intellectual:"",
                        published:""

                    }
                )
            }
        })
    

    }
    else {
        console.error("Form Invalid");
    }
}


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/timetable/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    date:res.data.timetable.date,
                    time:res.data.timetable.time,
                    topic:res.data.timetable.topic,
                    platform:res.data.timetable.platform,
                    intellectual:res.data.timetable.intellectual,
                    published:res.data.timetable.published,
                });

                console.log(this.state.timetable);

            }

        });

    }

    render() {
        const { formErrors } = this.state;
        return (

            <div className="back fixed" style={{ zIndex: 8 }}>
                <center>
                    <br /> <br /> <br /> <br />
                    <center> <h1 className="h3 mb-3 font-weight-normal" class="text-primary"><b>Edit Timetable </b></h1></center>

                    <br /> <br />
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '35rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >

          <div className="col-md-8 mt-4 mx-auto">
              <form className="needs-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}} ><b>Date</b></label>
                      <input type="date"
                      className="form-control"
                      name="date"
                      placeholder="Enter the Date"
                      value={this.state.date}
                      onChange={this.handleInputChange}/>
          </div>

                  <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}><b>Time</b></label>
                      <input type="time"
                      className="form-control"
                      name="time"
                      placeholder="Enter the Time"
                      value={this.state.time}
                      onChange={this.handleInputChange}/>
                  </div>

                  <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}><b>Topic</b></label>
                      <input type="text"
                      className="form-control"
                      name="topic"
                      placeholder="Enter the Topic"
                      value={this.state.topic}
                      onChange={this.handleInputChange}/>
                       {formErrors.topic.length > 0 && (
                                        <span className="errorMessage">{formErrors.topic}</span>
                                    )}
                  </div>
                
                  
                    
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}><b>Platform</b></label>
                    <select name="platform"  value={this.state.platform} onChange={this.handleInputChange}  className="form-control" >
                        <option defaultValue>--Select Platform</option>
                        <option value="Online">Online</option>
                        <option value="Physical">Physical</option>
                        
                    </select>
                    </div>




                  <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}><b>Intellectual</b></label>
                      <input type="text"
                      className="form-control"
                      name="intellectual"
                      placeholder="Enter the Intellectual"
                      value={this.state.intellectual}
                      onChange={this.handleInputChange}/>
                  </div>

                  

                  
                 <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}><b>Status</b></label>
                    <select name="published"  value={this.state.published} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                        <option defaultValue>--Select Status</option>
                        <option value="Published">Published</option>
                        <option value="Not Published">Not Published</option>
                        
                    </select>
                    </div>
                  
                  <center> <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Save </b>
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


 