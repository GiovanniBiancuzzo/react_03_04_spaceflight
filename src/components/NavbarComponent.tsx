import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt="Spaceflight News"
                    src="//public/SNAPI_logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{" "}
                Spaceflight News
            </Navbar.Brand>
            <Link to={"/"}>News</Link>
        </Navbar>
    );
};

export default NavbarComponent;
