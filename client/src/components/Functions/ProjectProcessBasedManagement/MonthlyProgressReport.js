import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';


export default class MonthlyProgressReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectDetailsProfiles: []
    };

  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/projectDetailsProfiles").then(res => {
      if (res.data.success) {
        this.setState({
          projectDetailsProfiles: res.data.existingPosts
        });

        console.log(this.state.projectDetailsProfiles);
      }
    });
  }


  filterData(projectDetailsProfiles, searchKey) {
    const result = projectDetailsProfiles.filter((post) =>
      post.date.toLowerCase().includes(searchKey) ||
      post.projectCategory.toLowerCase().includes(searchKey)

    )
    this.setState({ projectDetailsProfiles: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/projectDetailsProfiles").then(res => {
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
        var fileTitle2 = "All Projects Progression Report";
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

    doc.save('Projects_Progress_Report.pdf'); //this downloads a copy of the pdf in your local instance.
  };

  render() {
    return (

      
         <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '7%' }}>
          <form className="d-flex">
            <select onChange={this.handleSearchArea}>
              <option defaultValue>--Select Project Category--</option>
              <option value="hydro power project">Hydro Power Project</option>
              <option value="reforestation project">Reforestation Project</option>
              <option value="solar power project">Solar Power Project</option>
              <option value="carbon project">Carbon Project</option>
              <option value="">All Categories</option>
            </select>


            {/* <input type="date"
                                        className="form-control"
                                        name="date"
                                        placeholder=""
                                        value={this.state.date}
                                        onChange={this.handleSearchArea}/>
                                 */}
          </form>
        </div>
        <center>
          <h1><span class="badge bg-info text-dark opacity-90 fs-1" style={{ marginBlockStart: '-1%' }}>All Projects Progress Report</span></h1>
        </center>
        <div >
          <br />

          <table id="my-table" class=" container table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Project ID</th>
                <th scope="col">Project Category</th>
                <th scope="col">Client/Company Name</th>
                <th scope="col">Total Completed Rate (%)</th>
                <th scope="col">Due Date</th>

              </tr>
            </thead>
            <tbody>

              {this.state.projectDetailsProfiles.map((projectDetailsProfiles, index) => (
                <tr key={index}>

                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">

                    {projectDetailsProfiles._id}
                  </td >
                  <td class="table-light">{projectDetailsProfiles.projectCategory}</td>
                  <td class="table-light">{projectDetailsProfiles.companyName}{projectDetailsProfiles.name}</td>
                  <td class="table-light">{projectDetailsProfiles.progress}</td>
                  <td class="table-light">{projectDetailsProfiles.date}</td>

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


              {/* <a className="btn btn-warning text-dark " href="/dashshow" >
                    Dash Board
                  </a> */}

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


















// import React, { Component } from 'react';
// import axios from 'axios';
// import { MDBIcon } from 'mdb-react-ui-kit';
// import { MDBTable } from 'mdb-react-ui-kit';

// //import
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable'


// export default class  MonthlyProgressReport extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       projectDetailsProfiles: []
//     };

//   }


//   componentDidMount() {
//     this.retrieveApplicants();
//   }

//   retrieveApplicants() {
//     axios.get("/projectDetailsProfiles").then(res => {
//       if (res.data.success) {
//         this.setState({
//             projectDetailsProfiles: res.data.existingPosts
//         });

//         console.log(this.state.projectDetailsProfiles);
//       }


//     });
//   }


//   //create pdf
//   createPdf = () => {

//     var doc = new jsPDF('p', 'pt');

//    // var doc = new jsPDF("p", "mm", "a4");
//     //var width = doc.internal.pageSize.getWidth();
//    // var height = doc.internal.pageSize.getHeight();
//    // var imgData ='data:image/jpeg;base64,'+Base64.encode("jj.jpeg");




//     doc.text(180, 30, "Ravana engineering consultants pvt.ltd   ")

//     // var today = new Date();
//     // var newdat = "Date Printed : "+ today;
//     // doc.text(60,500,newdat);

//     //doc.addImage("jj.jpeg", 'JPEG', 15,40,180,160);

//     doc.autoTable({ head: [], theme: 'plain' })
//     doc.autoTable({ head: [['', '', '', '', '', '', '', '', '', '', 'Ongoing Projects Progress Report ']], theme: 'plain' })
//     doc.autoTable({ html: "#my-table", theme: 'striped' })
//     doc.autoTable({
//       columnStyles: { europe: { halign: 'center' } },
//       margin: { top: 100 },
//     })

//     //doc.autoTable({ head: [['signature ', '', '', '', 'date ']], theme: 'plain' })



//     doc.save('RC Projects Progress Report.pdf')


//   }




//   render() {
//     return (


//       <div className="Khome">
//         <br />
//         <document id="my">
//           <center>
//             <h4><span class="badge bg-info text-dark opacity-90 fs-1">Progress details of projects in progress </span></h4>
//           </center>
//           <div style={{ width: '80%', marginLeft: '10%' }}>


//             <div>
//               <br /><br />
//               {/* table id */}

//               <table id="my-table" class="table table-bordered ">


//                 <thead class="table-info" >

//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Project ID</th>
//                     <th scope="col">Project Category</th>
//                     <th scope="col">Client/Company Name</th>
//                     <th scope="col">Total Completed Rate (%)</th>
//                     <th scope="col">Due Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.projectDetailsProfiles.map((projectDetailsProfiles, index) => (
//                     <tr key={index}>

//                       <th scope="row">{index + 1}</th>
//                       <td>

//                           {projectDetailsProfiles._id}
//                       </td>
//                       <td>{projectDetailsProfiles.projectCategory}</td>
//                       <td>{projectDetailsProfiles.companyName}{projectDetailsProfiles.name}</td>
//                       <td>{projectDetailsProfiles.progress}</td>
//                       <td>{projectDetailsProfiles.date}</td>


//                     </tr>

//                   ))}

//                 </tbody>


//               </table><br /><br />

//               <center>


//                 {/* button */}
//                 <a className="btn btn-warning text-dark " onClick={this.createPdf} >
//                   <MDBIcon far icon="file-pdf" size='2x' />&nbsp;<b>Download PDF</b>
//                 </a>
//                 <br /><br /><br />


//               </center>
//               <br /><br />
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//           </div></document>
//       </div>

//     )
//   };
// };



