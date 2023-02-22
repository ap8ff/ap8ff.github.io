import '../Styles/NavBar.scss';
import * as React from "react";
import { useState,useEffect } from "react"
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import pentaLogo  from "../images/Penta_Logo_White.png";



const NavBar = () => {
    const [show, setShow] = useState(false);
    const [navBarClass, setnavBarClass] = useState("");
    const [navLinkColor, setnavLinkColor] = useState("white")
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
            setnavBarClass("white")
            setnavLinkColor(" rgb(26, 108, 177)")
        } else {
            setnavBarClass("transparent") // revisit this part
            setnavLinkColor("white")
        }
    }

        return (
     
            <Navbar id="NavBar" fixed="top" navbar collapseOnSelect style={{ backgroundColor: navBarClass }}>
          
                <Navbar.Brand href="#index" className="home">
                    <Image className="penta-icon" src={pentaLogo} alt="Penta" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                       
                      
                        <NavDropdown title={
                            <span style={{ color: navLinkColor }}>Solutions</span>
                        } show={show} onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                ConcreteContractors
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mechanical HVAC contractors</NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action/3.4">
                               Industrial Contractors
                            </NavDropdown.Item>
                        </NavDropdown>  
                        <NavDropdown title={
                            <span style={{ color: navLinkColor }}>Services</span>
                        } id="basic-nav-dropdown">
                         
                        </NavDropdown>
                        <NavDropdown title={
                            <span style={{ color: navLinkColor }}>Industries</span>
                        }  id="basic-nav-dropdown">
                         
                        </NavDropdown>
                        <NavDropdown title={
                            <span style={{ color: navLinkColor }}>About</span>
                        } id="basic-nav-dropdown">
                          
                            
                        </NavDropdown>
                        <NavDropdown title={
                            <span style={{ color: navLinkColor }}>Resources</span>
                        } id="basic-nav-dropdown">


                        </NavDropdown>
                        <NavDropdown title={
                            <span style={{ color: navLinkColor }}>Contact</span>
                        } id="basic-nav-dropdown">


                        </NavDropdown>
                    </Nav>
                  
                </Navbar.Collapse>
                <button class="btn  my-2 my-sm-0 me-auto" >Get More Information</button>
        
            </Navbar>
                   
 

        );
    
}

export default NavBar;
