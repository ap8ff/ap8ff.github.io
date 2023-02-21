import '../Styles/NavBar.scss';
import * as React from "react";
import { useState,useEffect } from "react"
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import pentaLogo  from "../images/Penta_Logo_White.png";



const NavBar = () => {
    const [show, setShow] = useState(false);
    const [navBarClass, setnavBarClass] = useState(false);
    useEffect(() => {
        changeNavBackground()
        window.addEventListener("scroll", changeNavBackground)
    })
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const changeNavBackground = () => {
        if (window.scrollY > 60) {
            setnavBarClass(true)
        } else {
            setnavBarClass(false) // revisit this part
        }
    }

        return (
     
            <Navbar id="NavBar" navbar sticky-top  collapseOnSelect>
          
                <Navbar.Brand href="#index" className="home">
                    <Image className="penta-icon" src={pentaLogo} alt="Penta" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    
                        <NavDropdown title="Solutions" id="basic-nav-dropdown">
                           
                        </NavDropdown>
                        <NavDropdown title="Industries" show={show} onMouseEnter={showDropdown}
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
                        <NavDropdown title="Services"  id="basic-nav-dropdown">
                         
                        </NavDropdown>
                        <NavDropdown title="About"  id="basic-nav-dropdown">
                         
                        </NavDropdown>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                          
                            
                        </NavDropdown>
                    </Nav>
                  
                </Navbar.Collapse>
                <button class="btn  my-2 my-sm-0 me-auto" >Get More Information</button>
        
            </Navbar>
                   
 

        );
    
}

export default NavBar;
