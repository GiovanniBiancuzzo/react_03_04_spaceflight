import { Container, Row, Spinner } from "react-bootstrap";
import SingleNewsComponent from "./SingleNewsComponent";
import { News } from "../types/newsInterface";
import { useState } from "react";
import { useEffect } from "react";

const NewsPageComponent = () => {
    const [newsList, setNewsList] = useState<News[]>([]);

    const fetchNews = () => {
        fetch(`${process.env.REACT_APP_ENDPOINT_API}articles`)
            .then((res) => res.json())
            .then((data) => setNewsList(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            {newsList.length > 0 ? (
                <Container>
                    <Row xs={2} md={3} xl={4}>
                        {newsList.map((singleNews) => (
                            <SingleNewsComponent
                                key={singleNews.id}
                                news={singleNews}
                            />
                        ))}
                    </Row>
                </Container>
            ) : (
                <Spinner animation="grow" variant="warning" />
            )}
        </>
    );
};

export default NewsPageComponent;
