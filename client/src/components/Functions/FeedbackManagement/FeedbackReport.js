import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

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
                console.log(this.state.feedbacks);
            }
        });
    }

    createPdf = (pdfBody) => {

        var doc = new jsPDF();
        var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
        doc.autoTable({
            didDrawPage: function (data) {
    
                // Header
                /*doc.setFontSize(18);
                var fileTitle1 = "Ravana engineering consultants pvt.ltd ";
                doc.text(fileTitle1, 15, 20);*/
    
                doc.setFontSize(12);
                var fileTitle2 = "Client Reviews Report";
                var img = 'https://i.ibb.co/g3q0Hc1/we.jpg';
                doc.text(fileTitle2, 15, 40);
                doc.addImage(img, 'JPEG', 0, 0, 210, 30);
        
                doc.setFontSize(9);
                var today = new Date();
                var newdat = "Date Printed : "+ today;
                doc.text(100,40,newdat);
    
    
                // Footer
                var pageSize = doc.internal.pageSize;
                //jsPDF 1.4+ uses getHeight, <1.4 uses .height
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                // jsPDF 1.4+ uses getWidth, <1.4 uses .width
                var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
    
                doc.autoTable({
                    html: '#my-table',
                    startY: pageHeight - 250,
                    theme: 'striped'
                });
    
                var str = "Page " + doc.internal.getNumberOfPages()
                // Total page number plugin only available in jspdf v1.0+
                if (typeof doc.putTotalPages === 'function') {
                    str = str + " of " + totalPagesExp;
                }
                doc.setFontSize(10);
                doc.text(str, data.settings.margin.left, pageHeight - 10);
                
            },
            margin: {
                bottom: 60, //this decides how big your footer area will be
                top: 40 //this decides how big your header area will be.
            }
        });
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
            doc.putTotalPages(totalPagesExp);
        }
    
        doc.save('Client_Reviews_Report.pdf'); //this downloads a copy of the pdf in your local instance.
    };
    

    filterData(feedbacks, searchKey) {

        const result = feedbacks.filter((feedback) =>
            feedback.Date.toLowerCase().includes(searchKey)

        )

        this.setState({ feedbacks: result })

    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("/feedbacks").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingFeedbacks, searchKey)
            }
        });

    }



    render() {
        return (
            <div className="back fixed" style={{ zIndex: 8 }}>
            
            <div style={{ width: '20%', marginLeft: '80%' , marginBlockStart:'7%'  }}>
              <form className="d-flex">
                <input className="form-control me-2"
                  type="search"
                  placeholder="Search by date"
                  aria-label="Search" onChange={this.handleSearchArea}>
                </input>
              </form>
            </div>
            <center>
                    <h4><span class="badge bg-info text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>Client Reviews Report</span></h4>
                </center>
                <div style={{ width: '60%', marginLeft: '20%' }}>
                    <div>
                        <br /><br />
                        <table id="my-table" class="table table-bordered " >
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
                                        <td class="table-light">
                                            <a href={`/ViewFeedbacks/${feedbacks._id}`} style={{ textDecoration: 'none' }}>
                                                {feedbacks.Date}
                                            </a>
                                        </td>
                                        <td class="table-light">{feedbacks.Rate}</td>
                                        <td class="table-light">{feedbacks.Email}</td>
                                        <td class="table-light">{feedbacks.Feedback}</td>



                                    </tr>

                                ))}

                            </tbody>

                        </table><br /><br />
                        <center>
                            <a className="btn btn-warning text-dark " onClick={this.createPdf} >
                                <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Download pdf</b></a>
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