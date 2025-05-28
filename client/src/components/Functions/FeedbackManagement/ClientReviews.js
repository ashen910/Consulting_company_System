import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
export default class ClientReviews extends Component {
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

      <div className="Khome">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>


        <br /> <br /> <br />

        <div id="wrapper">
          <div id="containerJoin">
<center>
            <h1 className="gifJoin">Client Reviews</h1>
</center>
          </div>
        </div> <br /> <br /> <br />


        <div style={{ width: '60%', marginLeft: '20%' }}>


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
                    <td class="table-light" style={{ textDecoration: 'none', width: '50%' }}>

                      {feedbacks.Date}

                    </td>
                    <td class="table-light">{feedbacks.Rate}</td>
                    <td class="table-light">{feedbacks.Email}</td>
                    <td class="table-light">{feedbacks.Feedback}</td>



                  </tr>

                ))}

              </tbody>

            </table>
            <br />
            <center>
            <div style={{ marginLeft: '25' }}>
              <button className="btn btn-warning"><MDBIcon far icon="paper-plane" size='2x' /><a href="/giveFeedback" style={{ textDecoration: 'none', color: 'white' }}>Give Your Feedback</a></button>
            </div>
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

