    import { useState, useEffect } from "react";
    import { Container, Row, Col } from "react-bootstrap";
    import {ArrowRightCircle} from "react-bootstrap-icons";
    import headerImg from "../assets/img/header-img.svg";

    export const Banner = () => {
        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const toRotate =["Web Developer", "Web Designer", "UI/UX Design"];
        const [text, setText]   = useState('');
        const [delta, setDelta] = useState(300 - Math.random() * 100);
        const period = 200;

        useEffect   (() => {

            let ticker = setInterval(() => {
                tick();
            },delta)

            return () => {clearInterval(ticker);}
        },[text])

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fulltext = toRotate[i];
            let UpdateText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1)

            setText(UpdateText)
            if (isDeleting) {
                setDelta(prevDelta => prevDelta /2);
            }

            if(!isDeleting && UpdateText === fulltext ) {
                setIsDeleting(true)
                setDelta(period)
            }else if(!isDeleting && UpdateText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setDelta(500)
            }
        }

        return (
            <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to Danny</span>
                        <h1>{`Hi's I'm Danny Scolt`} <span className="warp">{text}</span></h1>
                        <p>My career goal is to become a Front-End Developer upon graduating. I aim to acquire the requisite knowledge and skills for involvement inweb and interactive app development. I am committed to continuous learning, engaging in real-world projects, and building industryconnections to attain my objectives. In two years, I aspire to excel and progress to the Senior level.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /> </button> 
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                    <img src={headerImg} alt='Headder Img'/>
                    </Col>
                </Row>
            </Container>

            </section>
        )
    }