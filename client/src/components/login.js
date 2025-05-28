import React,{useState} from "react";
import LoginForm from "./loginForm";


export default function Login(){
  const adminUser ={
    userId:"admin2021",
    password:"admin123",
  }
  const hcUser ={
    userId:"hc2021",
    password:"hc123",
  }
  const jcUser ={
    userId:"jc2021",
    password:"jc123",
  }
  const cUser ={
    userId:"c2021",
    password:"c123",
  }

  const[user,setUser] = useState({userId:""});
  const[error,setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.userId == adminUser.userId && details.password == adminUser.password){
      window.location = '/AdminDashboard';
      console.log("Logged in");
    
    }
    else if(details.userId == hcUser.userId && details.password == hcUser.password){
      window.location = '/HCdashboard';
        console.log("Logged in");
     
      
  } else if(details.userId == jcUser.userId && details.password == jcUser.password){
    window.location = '/JCdashboard';
      console.log("Logged in");
  
    
} else if(details.userId == cUser.userId && details.password == cUser.password){
  window.location = '/searchYourProject';
    console.log("Logged in");

  
}else{
    console.log("Details do not match!");
    setError("Details do not match!")
  }
}


   const Logout = () =>{
     setUser({name:"", userId:""});
   }

  return (
    <div className="" style={{ zIndex: 8 }}>
     
      {(user.userId !="")?(
    
        <div>
          
        </div>
      ):(
        <LoginForm Login={Login} error = {error}/>
      )}
    </div>
);
}
      



























// import React, { Component } from 'react';
// import {
//   MDBCard, MDBIcon,
//   MDBDropdown,
//   MDBDropdownLink,
//   MDBDropdownItem,
//   MDBDropdownMenu,
//   MDBDropdownToggle,
// } from 'mdb-react-ui-kit';


// export default class Login extends Component {
//   render() {
//     return (

//       <div className="bg fixed" style={{ zIndex: 8 }}>
//         <center>
//           <br /> <br /> <br /> <br />
//           <MDBCard className='text-black mb-3' style={{ maxWidth: '25rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
//             <div className="col-md-8 mt-4 mx-auto">
//               <form >

//                 <h3 className='link-dark'><b>Sign In</b></h3>
//                 <br />
//                 <MDBIcon className='ms-1' size='4x' fas icon="user-circle" />
//                 <br /> <br />



//                 <MDBDropdown>
//                   <MDBDropdownToggle tag='a' className='link-dark ms-2'>
//                    <b> Login As </b>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink href="/AdminDashboard"><b>Administrator</b></MDBDropdownLink>
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink href="/searchYourProject"><b>Client</b></MDBDropdownLink>
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink href="/HCdashboard"><b>Head Consultant</b></MDBDropdownLink>
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink href="/JCdashboard"><b>Junior Consultant</b></MDBDropdownLink>
//                     </MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//                 <br />



//                 <div className="form-group" style={{ marginBottom: '15px' }}>

//                   <input type="text"
//                     className="form-control"
//                     name="userId"
//                     placeholder="User ID" ></input>

//                 </div>

//                 <div className="form-group" style={{ marginBottom: '15px' }}>

//                   <input type="text"
//                     className="form-control"
//                     name="password"
//                     placeholder="Password"
//                   >
//                   </input>

//                   <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
//                     <i className="far far-check-square"></i>
//                     &nbsp; Login
//                   </button>

//                 </div>

//                 <br />

//               </form>
//             </div>
//           </MDBCard>
//           <br /> <br /> <br /> <br />
//         </center>
//       </div>
 

//     )
//   }
// }
