
import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';





export default class RegisteredList extends Component{
constructor(props){
  super(props);

  this.state={
    
    workshops:[]
  };

}


componentDidMount(){
  this.retrieveWorkshops();
}

retrieveWorkshops(){
  axios.get("/workshops").then(res =>{
    if(res.data.success){
      this.setState({
        workshops:res.data.existingWorkshops
      });

     console.log(this.state.workshops);
    }


  });
}


render() {
    return(
      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <div id="wrapper">
          <div id="containerJoin">
<center>
            <h1 className="gifJoin">All Registered List</h1>
</center>
          </div>
        </div> <br /> <br /><br /> <br />
       

        <div >
          <br />
          <div style={{ width: '60%', marginLeft: '20%' }}>

          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">ContactNo</th>
           
            </tr>
          </thead>
          <tbody>
          {this.state.workshops.map((workshops,index) =>(
              <tr key={index}>
              <th class="table-light" scope="row">{index + 1}</th>
              <td class="table-light">
                    <a href={`/workshop/${workshops._id}`} style={{textDecoration:'none'}}>
                    {workshops.name}
                    </a>
                    </td>

                <td class="table-light">{workshops.email}</td>
                <td class="table-light">{workshops.contactNo}</td>  
              </tr>

            ))}
                    </tbody>
                    </table>
                    </div>
                  <br></br>
                   <br></br>
             
                   </div>
                   </div>

             )
          }
    }