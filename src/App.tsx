import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPageComponent from "./components/NewsPageComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import SingleNewsPageComponent from "./components/SingleNewsPageComponent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    {/* <NavbarComponent /> */}
                    <JumbotronComponent />
                    {
                        //todo: aggiungi una props dal navigate per aggiornae il contenuto del jumbotron
                    }{" "}
                    <div className="newsBackground">
                        <Routes>
                            <Route
                                path="/"
                                element={<NewsPageComponent />}
                            ></Route>
                            <Route
                                path="/:id"
                                element={<SingleNewsPageComponent />}
                            ></Route>
                            {
                                //todo: aggiungi altre pagine blogs, ecc
                            }
                        </Routes>
                    </div>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
