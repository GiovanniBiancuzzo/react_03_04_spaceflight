import { Container, Row } from "react-bootstrap";
import SingleNewsComponent from "./SingleNewsComponent";
import { News } from "../types/newsInterface";
import { useState } from "react";
import { useEffect } from "react";

const NewsPageComponent = () => {
    const [newsList, setNewsList] = useState<News[]>([]);

    const fetchNews = () => {
        fetch("https://api.spaceflightnewsapi.net/v3/articles")
            .then((res) => res.json())
            .then((data) => setNewsList(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <Container>
            <Row>
                {newsList.map((singleNews) => (
                    <SingleNewsComponent
                        key={singleNews.id}
                        news={singleNews}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default NewsPageComponent;
