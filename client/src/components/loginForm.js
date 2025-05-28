import React, {useState} from "react";
import {
  MDBCard, MDBIcon,
  MDBDropdown,
  MDBDropdownLink,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from 'mdb-react-ui-kit';


function LoginForm({Login,error}){
    const[details,setDetails] = useState({userId:"",password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

    return(
        <div className="login" style={{ zIndex: 8 }}><br /><br /><br />
            <center>
        <form onSubmit={submitHandler}>
            <div className= "form-inner">
            <MDBCard className='text-black mb-3' style={{ maxWidth: '35rem', backgroundColor: 'rgba(52, 52, 52, 0.4)' }}  >
            <div className="col-md-8 mt-4 mx-auto">

            <h3 className='link-dark'><b>Sign In</b></h3>
            <MDBIcon className='ms-1' size='4x' fas icon="user-circle" />
                 <br /> <br />
                {(error !="")? (<div className="error">{error} </div>):""} 
                 <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}></label>
                        <select name="userCategory" defaultValue="Select Type" className="form-control" >
                            <option defaultValue>--Select User Category--</option>
                            <option value="Admin">Administrator</option>
                            <option value="Client">Client</option>
                            <option value="Head Consultant">Head Consultant</option>
                            <option value="Junior Consultant">Junior Consultant</option>
                            </select>
                            </div><br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                    <lable htmlFor = "userId"><b>User ID</b></lable>
                    <input style={{ marginLeft: '40px' }} type = "userId" name = "userId" id = "userId" onChange={e => setDetails({...details,userId: e.target.value})} value={details.userId}/>
                </div>
                <div className="form-group" style={{ marginBottom: '15px'}}>
                    <lable htmlFor = "password"><b>Password</b></lable>
                    <input style={{ marginLeft: '20px' }} type = "password" name = "password" id = "password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password}/>
                </div>
               <button className="btn btn-dark" type="submit" style={{ marginTop: '15px'}}  value = "LOGIN">
                     <i className="far far-check-square"></i>
                     &nbsp; Login
               </button><br /> <br />
                
                </div>
                </MDBCard>
                
            </div><br /> <br />
        </form>
        </center>
        </div>
    )
}

export default LoginForm;