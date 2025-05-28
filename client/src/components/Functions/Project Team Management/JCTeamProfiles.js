import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCol, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

export default class JCTeamProfiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/team/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    team: res.data.team
                });

                console.log(this.state.team);

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
                var fileTitle2 = "Team Involvement Report";
                var img = 'https://i.ibb.co/g3q0Hc1/we.jpg';
                doc.text(fileTitle2, 15, 40);
                doc.addImage(img, 'JPEG', 0, 0, 210, 30);

                doc.setFontSize(9);
                var today = new Date();
                var newdat = "Date Printed : " + today;
                doc.text(100, 40, newdat);


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

        doc.save('Team_Involvement_Report.pdf'); //this downloads a copy of the pdf in your local instance.
    };


    render() {



        const { _id, name, category, type, date, noMembers, member01, member02, member03, member04, in1, in2, in3, in4 } = this.state.team;

        return (
            <div className="back fixed" style={{ zIndex: 8 }}>
                <br />
                <center>
                    <h1><span class="badge bg-info text-dark opacity-90 fs-1 " style={{ marginBlockStart: '-1%' }}> Team Involvement Report</span></h1>

                    <div style={{ width: '35%' }}>


                        <div >
                            <br />
                            <table id="my-table" class="table table-bordered "  >


                                <thead class="table-dark">
                                    <tr>

                                        <th scope="col">{_id}</th>
                                    </tr>
                                </thead>
                                <tbody class="table-light">
                                    <tr ><th scope="col">Project Category  :-
                                        {category}</th></tr>
                                    <tr ><th scope="col">Client/Company Name :-{name}</th></tr>
                                    <tr ><th scope="col">Due date :-{date}</th></tr>
                                    <tr ><th scope="col">Team Type  :-{type}</th></tr>
                                    <tr ><th scope="col">No. of Members  :-{noMembers}</th></tr>
                                    <tr ><th scope="col">Team Type  :-{type}</th></tr>
                                    <tr ><th scope="col">Member 01  :-{member01}</th></tr>
                                    <tr ><th scope="col">Involvement  :-{in1}</th></tr>
                                    <tr ><th scope="col">Member 02  :-{member02}</th></tr>
                                    <tr ><th scope="col">Involvement  :-{in2}</th></tr>
                                    <tr ><th scope="col">Member 03  :-{member03}</th></tr>
                                    <tr ><th scope="col">Involvement  :-{in3}</th></tr>
                                    <tr ><th scope="col">Member 04  :-{member04}</th></tr>
                                    <tr ><th scope="col">Involvement  :-{in4}</th></tr>


                                </tbody>


                            </table>
                            <br /><br />
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
                </center>
            </div>


        )
    }
}