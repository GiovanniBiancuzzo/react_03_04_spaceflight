import { format } from "date-fns";
import { Badge, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { News } from "../types/newsInterface";

interface SingleNews {
    news: News;
}

const SingleNewsComponent = ({ news }: SingleNews) => {
    const navigate = useNavigate();

    return (
        <Col className="mt-4">
            <Card>
                <Card.Img
                    variant="top"
                    src={news.imageUrl}
                    onClick={() => navigate(`/news/${news.id}`)}
                />
                <Card.Body>
                    <Card.Title>
                        <h6>{news.title}</h6>
                    </Card.Title>
                    Fonte: <Badge variant="primary">{news.newsSite}</Badge>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <em>
                            Last updated at:{" "}
                            {format(new Date(news.updatedAt), "pppp")}
                        </em>
                    </small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleNewsComponent;
