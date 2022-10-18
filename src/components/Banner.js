import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/codeSnippet.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    " Web Developer",
    " Web Designer",
    " UI/UX Designer",
    " Software Engineer",
    " Graphic Designer",
    " Coffee Enthusiast",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText == "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my homepage!</span> */}
            <h1>
              Hi Im Tuscanny :
              <span classname="wrap">{text}</span>
            </h1>
            <p>
            My name is Tuscanny, and Im a Web Designer and FrontEnd Software Engineer. I often wonder how ideas and designs come together to make things that are elegant, practical and thechnically impressive. I enjoy challenging myself to create one-of-a-kind designs and web applications that are unique and break the mold of conventional website aesthetics. Building crisp and profesional web apps is fun for me, and a dicipline that inspires my imagination in personal projects.
            </p>
            <button className="bannerButton" onClick={() => console.log("connect")}>
              Reach out <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImg} alt="Header Img" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
