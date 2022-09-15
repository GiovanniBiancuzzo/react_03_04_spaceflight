import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPageComponent from "./components/NewsPageComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import SingleNewsPageComponent from "./components/SingleNewsPageComponent";
import NotFoundComponent from "./components/NotFoundComponent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <NavbarComponent />
                    <JumbotronComponent />
                </header>
                {
                    //todo: aggiungi una props dal navigate per aggiornare il contenuto del jumbotron
                }{" "}
                <div className="newsBackground">
                    <Routes>
                        <Route path="/" element={<NewsPageComponent />}></Route>
                        <Route
                            path="/news"
                            element={<NewsPageComponent />}
                        ></Route>
                        <Route
                            path="/news/:id"
                            element={<SingleNewsPageComponent />}
                        ></Route>
                        <Route
                            path="/blog"
                            element={<NewsPageComponent />}
                        ></Route>
                        <Route
                            path="/reports"
                            element={<NewsPageComponent />}
                        ></Route>
                        <Route
                            path="/info"
                            element={<NewsPageComponent />}
                        ></Route>
                        <Route path="*" element={<NotFoundComponent />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
