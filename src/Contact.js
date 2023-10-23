import { useNavigate } from "react-router-dom";
import React from "react"
import "./App.css";
import Header from "./component/Header";
const Contact = () => {
const navigate =  useNavigate();   
const  goToHome = () => {
    navigate("/");
}   
    return (
        <>
         <Header />
        <section>
            <h1>This is Contact Page</h1>
            <button onClick={goToHome}>go to Home Page</button>
        </section>
        </>
    );

};
export default Contact;