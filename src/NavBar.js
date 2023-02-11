import './NavBar.scss';
import * as React from "react";
import { useState } from "react"
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import astronomicals  from "./images/astranomicals.png";



const NavBar = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

        return (
     
            <Navbar id = "NavBar" collapseOnSelect  expand="lg">
          
                <Navbar.Brand href="#home" className="home">Anju Puthenveetil</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    
                        <NavDropdown title="About Me" id="basic-nav-dropdown">
                           
                        </NavDropdown>
                        <NavDropdown title="Services" show={show} onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Search Engine Optimization
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Content Writing</NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action/3.4">
                               Web Development
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="CaseStudies"  id="basic-nav-dropdown">
                         
                        </NavDropdown>
                        <NavDropdown title="Articles"  id="basic-nav-dropdown">
                         
                        </NavDropdown>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                          
                            
                        </NavDropdown>
                    </Nav>
                  
                </Navbar.Collapse>
                <button class="btn  my-2 my-sm-0 me-auto" >(949) 478-0305</button>
        
            </Navbar>
                   
 

        );
    
}

export default NavBar;
