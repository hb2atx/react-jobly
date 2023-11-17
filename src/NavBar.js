
import { NavLink } from 'react-router-dom';
import { Nav } from "reactstrap";


function NavBar() {
    return (
   
        <nav className="NavBar">
            <Nav>
        
            <NavLink to="/">Jobly</NavLink>
            <NavLink to="/">Jobly</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            
            </Nav>
        </nav>
            
           
       
    )
}

export default NavBar;