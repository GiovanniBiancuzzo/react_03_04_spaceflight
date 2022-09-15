import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundComponent = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <h2>404: page not found </h2>
            <Button onClick={() => navigate("/")}>Torna alla home</Button>
        </Container>
    );
};

export default NotFoundComponent;
