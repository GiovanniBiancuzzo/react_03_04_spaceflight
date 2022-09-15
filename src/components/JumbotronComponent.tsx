import { Container, Jumbotron } from "react-bootstrap";

const JumbotronComponent = () => {
    return (
        <Jumbotron fluid className="jumbotronBackground">
            <Container>
                <h1>Spaceflight News</h1>
                <p>
                    Get an overview of the latest Spaceflight news, from various
                    sources! Easily link your users to the right websites
                </p>
            </Container>
        </Jumbotron>
    );
};

export default JumbotronComponent;
