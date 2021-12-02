import React,{Component} from "react";
import { Nav,  NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import {NavLink, BrowserRouter} from "react-router-dom";

class Header extends Component{

    constructor(props){
        super(props);
        
        this.state={
            isNavOpen: false
        };
    
}
    render(){
        return(
            <React.Fragment>
                <Navbar dark className="bg-primary" expand="md">
                    <NavbarBrand href="/">
            <img src="assets/images/logo.png" height="30"/>
                    </NavbarBrand>
                    <Nav navbar>
                      
                        <NavItem>
                         <NavLink className="nav-link" to="/staff">
                            <i className="fa fa-users fa-lg" > Nhân Viên</i>
                         </NavLink>
                        </NavItem> 
                        
                      
                        <NavItem>
                         <NavLink className="nav-link" to="/depament">
                            <i className="fa fa-address-card fa-lg" > Phòng Ban</i>
                         </NavLink>
                        </NavItem> 
                       
                        <NavItem>
                         <NavLink className="nav-link" to="#">
                            <i className="fa fa-money fa-lg" > Bảng Lương</i>
                         </NavLink>
                        </NavItem> 
                        
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default Header