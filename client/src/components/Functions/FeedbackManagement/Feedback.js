import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbacks: []
    };
  }

  componentDidMount() {
    this.retrieveFeedbacks();
  }

  retrieveFeedbacks() {
    axios.get("/feedbacks").then(res => {
      if (res.data.success) {
        this.setState({
          feedbacks: res.data.existingFeedbacks
        });
        console.log(this.state.feeddbacks);
      }
    });
  }


  render() {
    return (

      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <center>
          <h1 className="gifJoin"><span class="badge bg-info text-dark opacity-90 fs-1"> All Client Reviews</span></h1>
          </center>
        <div style={{ width: '20%', marginLeft: '30%' }}>


          <div>
            <br /><br />
            <table class="table table-bordered " >
              <thead class="table-info">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Email</th>
                  <th scope="col">Feedback</th>


                </tr>
              </thead>
              <tbody>
                {this.state.feedbacks.map((feedbacks, index) => (
                  <tr key={index}>
                    <th class="table-light" scope="row">F00{index + 1}</th>
                    <td class="table-light" style={{ textDecoration: 'none' }}>
                      
                        {feedbacks.Date}
                      
                    </td>
                    <td class="table-light">{feedbacks.Rate}</td>
                    <td class="table-light">{feedbacks.Email}</td>
                    <td class="table-light">{feedbacks.Feedback}</td>



                  </tr>

                ))}

              </tbody>

            </table><br /><br />
            <center>
                        


                        <a className="btn btn-warning text-dark " href="/feedbackReport" >
                            <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Generate Report</b>
                        </a>

                    </center>

            <br /><br />
          </div>
          <br></br>
          <br></br>
          <br></br>

          
        </div>
      </div>

    )
  }
}


