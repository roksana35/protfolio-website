import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import ProjectShowcase from "../Components/ProjectShowcase";
import Skill from "../Components/Skill";



const Home = () => {
    return (
        // <div> 

        //     <div>
        //         <Banner></Banner>
        //     </div>
        //     <div>
        //         <Skill></Skill>
        //     </div>
        //     <div>
        //         <ProjectShowcase></ProjectShowcase>
        //     </div>
        //     <div>
        //         <Education></Education>
        //     </div>
        //     <div>
        //         <Contact></Contact>
        //     </div>
        // </div>
        <div>
      <section id="home">
        <Banner />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <ProjectShowcase />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
        
        
    );
};

export default Home;