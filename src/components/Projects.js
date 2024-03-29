import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ebay.jpg";
import projImg2 from "../assets/img/threads.webp";
import projImg3 from "../assets/img/car.png";
import projImg4 from "../assets/img/crypto.png";
import projImg5 from "../assets/img/port.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ebay Clone",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Threads Clone",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "CarsHub",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Crypto",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"I possess the proficiency to architect and develop full-stack applications utilizing a diverse range of technologies. My skill set includes expertise in front-end technologies such as HTML, CSS, ReactJS, and UI libraries like Material-UI and Chakra-UI. On the back-end, I have hands-on experience with Node.js, Express.js, and various databases, including MongoDB with Mongoose and PostgreSQL. Additionally, I am skilled in integrating RESTful APIs, managing state with Redux, and ensuring secure authentication using JWT tokens. I'm adept at selecting the most suitable technologies for projects and have successfully demonstrated my ability to build robust and user-centric full-stack applications."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
