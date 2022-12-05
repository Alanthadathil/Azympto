import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import MainPage from "./components/MainPage";

function App() {
    return (
        <>
            <Helmet>
                <title>Hygge</title>
            </Helmet>
            <MainPage />
        </>
    );
}

export default App;
