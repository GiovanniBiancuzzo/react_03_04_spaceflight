import { useEffect, useState } from "react";
import { Button, Card, CardDeck, Col, Container } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { News } from "../types/newsInterface";

interface SingleNews {
    news: News;
}

const SingleNewsPageComponent = () => {
    const params = useParams();

    const [singleNews, setSingleNews] = useState<News>();

    const fetchSingleNews = () => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
            .then((res) => res.json())
            .then((data) => setSingleNews(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchSingleNews();
    }, []);

    return (
        <Container fluid>
            <Card>
                <Card.Header>{singleNews!.title}</Card.Header>
                <Card.Img variant="top" src={singleNews!.imageUrl} />
                <Card.Body>
                    <Card.Title>{singleNews!.newsSite}</Card.Title>
                    <Card.Text>{singleNews!.summary}</Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">
                        {singlesingleNews!.updatedAt}
                    </small>
                </Card.Footer> */}
                <Link to={singleNews!.url}>Go to the news</Link>
            </Card>
        </Container>
    );
};

export default SingleNewsPageComponent;
