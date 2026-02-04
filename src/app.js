import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/header";
import Search from "../components/searchbar";
import "../app.css";

const Applayout = () => {
    return(
        <div>
            <Header/>
            <Search/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);