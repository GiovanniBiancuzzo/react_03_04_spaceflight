import { Badge, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { News } from "../types/newsInterface";

interface SingleNews {
    news: News;
}

const SingleNewsComponent = ({ news }: SingleNews) => {
    const navigate = useNavigate();

    return (
        <Col>
            <Card>
                <Card.Img
                    variant="top"
                    src={news.imageUrl}
                    onClick={() => navigate(`/${news.id}`)}
                />
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Badge>{news.newsSite}</Badge>
                    {
                        //todo: switch sulla compagnia per il colore del badge
                    }
                    {/* <Card.Text>{news.summary}</Card.Text> */}
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">{news.updatedAt}</small>
                </Card.Footer> */}
            </Card>
        </Col>
    );
};

export default SingleNewsComponent;
