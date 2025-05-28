import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';


export default class  MonthlyFinancialReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cashflows: []
    };

  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/cashflows").then(res => {
      if (res.data.success) {
        this.setState({
          cashflows: res.data.existingPosts
        });

        console.log(this.state.cashflows);
      }
    });
  }


  filterData(cashflows, searchKey) {
    const result = cashflows.filter((post) =>
      post._id.toLowerCase().includes(searchKey)||
      post.projectCategory.toLowerCase().includes(searchKey)


    )
    this.setState({ cashflows: result })
  }

    //doc.autoTable({ head: [['signature ', '', '', '', 'date ']], theme: 'plain' })
    


  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/cashflows").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
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
            var fileTitle2 = "All Projects Financial Report";
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

    doc.save('Projects_Financial_Report.pdf'); //this downloads a copy of the pdf in your local instance.
};

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />

        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%' }}>
          <form className="d-flex">      
           <select  onChange={this.handleSearchArea}>
               <option defaultValue>--Select Project Category--</option>
               <option value="hydro power project">Hydro Power Project</option>
               <option value="reforestation project">Reforestation Project</option>
                <option value="solar power project">Solar Power Project</option>
                <option value="carbon project">Carbon Project</option>
                <option value="">All Categories</option>
            </select>
          </form>
        </div>
        <center>
          <h1><span class="badge bg-info text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>All Projects Financial Details Report</span></h1>
        </center>
        <div >
          <br />
          
          <table  id="my-table" class="table table-bordered " >
            <thead class="table-info">
              <tr>
              <th scope="col">#</th>
                     <th scope="col">Cash-Flow ID</th>
                     <th scope="col">Client/Company Name</th>
                     <th scope="col"><b>Project Category</b></th>

                    <th scope="col">Total Project Budget</th>
                   <th scope="col">Advance Payment</th>
                   <th scope="col">Total Payble</th>
                
              </tr>
            </thead>
            <tbody>

                  {this.state.cashflows.map((cashflows, index) => (
                    <tr key={index}>
                      <th class="table-light" scope="row">{index + 1}</th>
                      <td class="table-light">
                        <a href={`/viewProjectCashFlow/${cashflows._id}`} style={{ textDecoration: 'none' }}>
                          {cashflows._id}
                        </a>
                      </td>
                      <td class="table-light">{cashflows.companyName}{cashflows.name}</td>
                      <td class="table-light">{cashflows.projectCategory}</td>
                      <td class="table-light">{cashflows.total}</td>
                      <td class="table-light">{cashflows.advance}</td>
                      <td class="table-light">{cashflows.payble}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>       
          <br />
          <div>

          <center>
              

                  <a className="btn btn-warning text-dark " onClick={this.createPdf}>
                  <b>Download PDF</b> &nbsp;<MDBIcon far icon="file-pdf" size='2x' />
                  </a>
  
           
            </center>
            

          </div>
          <br></br>
          <br></br>
          <br></br>
         
        </div>
       

      </div>
    )
  }
}




