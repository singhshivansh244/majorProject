import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <footer className="footer-container">
            <Box>
                <h1 style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "-50px"
                }}>
                    Agro Tech: An Agricultural Solution for farmers
                </h1>
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Developers</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Disease Detection</FooterLink>
                            <FooterLink href="#">Smart Irrigation</FooterLink>
                            <FooterLink href="#">Learn More</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </footer>
    );
};
export default Footer;
