import React from "react"
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Header />
        <section>
            <h1>This is Home page Only!</h1>

        </section>
        <Outlet />
        </>
    );

};
export default Home;