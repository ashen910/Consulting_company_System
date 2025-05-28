import React, { Component } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from 'mdb-react-ui-kit';


export default class homepage extends Component {

  render() {

    return (


      <div>


        <MDBNavbar style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} expand='lg'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls='navbarExample01'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <MDBIcon fas icon='bars' />
            </MDBNavbarToggler>
            <div className='collapse navbar-collapse' id='navbarExample01' >
              <MDBNavbarNav right className='mb-2 mb-lg-0'>
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current='page' href="/">
                    <b class='' className='link-info mx-2'>Home</b>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle href="#" tag='a' className='nav-link'>
                      <b className='link-info mx-2'>Projects</b>
                    </MDBDropdownToggle>                
                    <MDBDropdownMenu >
                      <MDBDropdownItem>
                        <MDBDropdownLink href="/carbon"><b class='nav-link' className='link-info mx-2'>Carbon Projects</b></MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="/hydropower"><b class='nav-link' className='link-info mx-2'>Hydro Power Projects</b></MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="/reeforestation"><b class='nav-link' className='link-info mx-2'>Reeforestation Projects</b></MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="/solar"><b class='nav-link' className='link-info mx-2'>Solar Projects</b></MDBDropdownLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/clientAppoinments'><b class='' className='link-info mx-2'>Get Your Appointment here</b></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Service'><b class='' className='link-info mx-2'>Services</b></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/designedProjects'><b class='' className='link-info mx-2'>Pre-Design Projects</b></MDBNavbarLink>
                </MDBNavbarItem>

              </MDBNavbarNav>
              <div style={{ marginRight: '-17%' }}>

                <a href="/login" type="button"  className='link-light'><MDBIcon far icon="eye" size='2x' /></a>

              </div>



              <div style={{ marginLeft: '20%' }}>
                <MDBIcon className='ms-1' icon='user-cog' size='2x' />
              </div>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  <b class=''></b>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/login"><b class='text-black'  className='link-info mx-2'>LOG IN</b></MDBDropdownLink>
                  </MDBDropdownItem>
                  {/* <MDBDropdownItem>
                    <MDBDropdownLink  href="#"><b class='text-black'>Another action</b></MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink  href="#"><b class='text-black'>Something else here</b></MDBDropdownLink>
                  </MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>





            </div>


          </MDBContainer>
        </MDBNavbar>

      </div>


    )
  }
}



