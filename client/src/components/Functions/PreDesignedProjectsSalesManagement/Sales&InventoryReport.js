import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'


export default class SalesReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pdpRecords: []
    };

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
            var fileTitle2 = "Sales and Inventory Report";
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

    doc.save('Sales_Report.pdf'); //this downloads a copy of the pdf in your local instance.
};


  componentDidMount() {
    this.retrievePdpRecords();
  }

  retrievePdpRecords() {
    axios.get("/pdpRecords").then(res => {
      if (res.data.success) {
        this.setState({
          pdpRecords: res.data.existingPdpRecords
        });

        console.log(this.state.pdpRecords);
      }


    });
  }


  filterData(pdpRecords, searchKey) {

    const result = pdpRecords.filter((pdpRecord) =>
      pdpRecord.pdpid.toLowerCase().includes(searchKey) ||
      pdpRecord.projectcategory.toLowerCase().includes(searchKey) ||
      pdpRecord.summary.toLowerCase().includes(searchKey) ||
      pdpRecord.price.toLowerCase().includes(searchKey)


    )

    this.setState({ pdpRecords: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/pdpRecords").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPdpRecords, searchKey)
      }
    });

  }



  render() {
    return (


      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <div style={{ width: '20%', marginLeft: '80%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search By PDP ID/Project Category"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <center>
          <h1><span class="badge bg-info text-dark opacity-90 fs-1">PDP Records Report</span></h1>
        </center>
        <div style={{ width: '70%', marginLeft: '15%' }}>
                

        <div >
          <br />


          <table  id="my-table" class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">PDP ID</th>
                <th scope="col">Project Category</th>
                <th scope="col">Summary</th>
                <th scope="col">Price</th>
   
              </tr>
            </thead>

            <tbody>
              {this.state.pdpRecords.map((pdpRecords, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">M100{index + 1}</th>
                  <td class="table-light">
                    <a href={`/pdpRecord/${pdpRecords._id}`} style={{ textDecoration: 'none' }}>
                      {pdpRecords.pdpid}
                    </a>
                  </td>
                  <td class="table-light">
                    <a href={`/pdpRecord/${pdpRecords._id}`} style={{ textDecoration: 'none' }}>
                      {pdpRecords.projectcategory}
                    </a>
                  </td>
                  <td class="table-light"> {pdpRecords.summary}</td>
                  <td class="table-light"> {pdpRecords.price}</td>

        
               

                </tr>

              ))}

            </tbody>

          </table>
          <br></br>
          <br></br>
          </div>
          <center>
          <a className="btn btn-warning text-dark " onClick={this.createPdf} >
            <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Download pdf</b></a></center>



       
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  };
}
