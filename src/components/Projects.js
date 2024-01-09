import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/how-it-works/1.png";
import projImg2 from "../assets/img/how-it-works/2.png";
import projImg3 from "../assets/img/how-it-works/3.png";
import projImg4 from "../assets/img/how-it-works/4.png";
import projImg5 from "../assets/img/how-it-works/5.png";
import projImg6 from "../assets/img/how-it-works/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sign Up",
      description: "Join today and start earning",
      imgUrl: projImg1,
    },
    {
      title: "Play Games",
      description: "Play games to gain power",
      imgUrl: projImg2,
    },
    {
      title: "Join Mining Blocks",
      description: "Get more profit by joining mining blocks",
      imgUrl: projImg3,
    },
    {
      title: "Buy Miners",
      description: "More miners - more profit.",
      imgUrl: projImg1,
    },
    {
      title: "Customize your space",
      description: "Place miners to your space",
      imgUrl: projImg2,
    },
    {
      title: "Build Your Crypto Empire",
      description: "Play everyday to build your crypto empire",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>HOW DOES IT ALL WORK?</h2>
                <p>You have your own space to organize with miners and racks from market. More miners = more power.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
