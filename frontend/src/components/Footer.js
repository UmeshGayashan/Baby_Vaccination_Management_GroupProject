
import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>

      <h1

        style={{
          color: "yellow",
          textAlign: "center",
          marginTop: "-10px",
        }}
      >
        <img
          style={{ height: "100px", width: "250px" }}
          className="twitter-negative-icon"
          loading="eager"
          alt=""
          src="/2-10@2x.png"
        />
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">
              Mission
            </FooterLink>
            <FooterLink href="#">
              Vision
            </FooterLink>
            <FooterLink href="#">
              Aim
            </FooterLink>
            <FooterLink href="#">
              Home
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">
              Baby vaccinating
            </FooterLink>
            <FooterLink href="#">
              Maintain Reports
            </FooterLink>
            <FooterLink href="#">
              Send Reminders
            </FooterLink>
            <FooterLink href="#">
              Knowledge
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
              Email
            </FooterLink>
            <FooterLink href="#">
              Address
            </FooterLink>
            <FooterLink href="#">
              Telephone No.
            </FooterLink>
            <FooterLink href="#">
              Location
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
                  Facebook
            </FooterLink>
            <FooterLink href="#">
                  Instagram
            </FooterLink>
            <FooterLink href="#">
                  Twitter
            </FooterLink>
            <FooterLink href="#">
                  Youtube
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;