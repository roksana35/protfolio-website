import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Skill from "../Components/Skill";



const Home = () => {
    return (
        <div> 

            <div>
                <Banner></Banner>
            </div>
            <div>
                <Skill></Skill>
            </div>
            <div>
                <Education></Education>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
        
    );
};

export default Home;