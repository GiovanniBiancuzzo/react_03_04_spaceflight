import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark">
            <Link to={"/"}>
                <Navbar.Brand>
                    <img
                        alt="Spaceflight News"
                        src="../public/SNAPI_logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
            </Link>
            <Nav>
                <Link
                    to="/news"
                    className={
                        "nav-link" +
                        (location.pathname === "/" ? " active" : "")
                    }
                >
                    News
                </Link>
                <Link
                    to="/blog"
                    className={
                        "nav-link" +
                        (location.pathname === "/blog" ? " active" : "")
                    }
                >
                    Blog
                </Link>
                <Link
                    to="/reports"
                    className={
                        "nav-link" +
                        (location.pathname === "/reports" ? " active" : "")
                    }
                >
                    reports
                </Link>
                <Link
                    to="/info"
                    className={
                        "nav-link" +
                        (location.pathname === "/info" ? " active" : "")
                    }
                >
                    Info
                </Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;
