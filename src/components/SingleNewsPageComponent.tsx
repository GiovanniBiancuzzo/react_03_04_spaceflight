import { useEffect, useState } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { News } from "../types/newsInterface";
import format from "date-fns/format";

const SingleNewsPageComponent = () => {
    const params = useParams();

    const [singleNews, setSingleNews] = useState<News | null>(null);

    const fetchSingleNews = () => {
        fetch(`${process.env.REACT_APP_ENDPOINT_API}articles/${params.id}`)
            .then((res) => res.json())
            .then((data) => setSingleNews(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchSingleNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {singleNews ? (
                <Container className="p-4">
                    <Card>
                        <Card.Header>
                            <h2>{singleNews.title}</h2>
                        </Card.Header>
                        <Card.Img variant="top" src={singleNews.imageUrl} />
                        <Card.Body>
                            <Card.Title>
                                Fonte: {singleNews.newsSite}
                            </Card.Title>
                            <Card.Text>{singleNews.summary}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <em>
                                <small className="text-muted">
                                    Last updated at:{" "}
                                    {format(
                                        new Date(singleNews.updatedAt),
                                        "pppp"
                                    )}
                                </small>
                            </em>
                        </Card.Footer>
                        <Button href={singleNews.url}>Go to the news</Button>
                    </Card>
                </Container>
            ) : (
                <Spinner animation="grow" variant="warning" />
            )}
        </>
    );
};

export default SingleNewsPageComponent;
