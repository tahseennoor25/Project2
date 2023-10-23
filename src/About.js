import { useNavigate } from "react-router-dom";
import Header from "./component/Header";
const About = () => {

const navigate =   useNavigate();   

const goToContact = () => {
    navigate("/contact");
} 
    return (
        <>
      <Header />
        <sectiono>
            <h1>This is About Page</h1>
            <button onClick={() => goToContact()}>Go to Contact Page</button>
        </sectiono>
        </>
    );

};
export default About;