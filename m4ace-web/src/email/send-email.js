import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Section,
  Text,
  Preview,
} from "@react-email/components";
import * as React from "react";

export const SendEmail = ({ name, email, message }) => {
  return (
    <Html>
      <Head />
      <Preview>Message from M4ACE</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* <Img src='logo.png' width='40' height='33' alt='PCIS' /> */}
          <Section>
            <Text style={text}>Hi Team,</Text>
            <Text style={text}>A new user has just send a message to you.</Text>
            {/* <Text style={boldtext}>
              Dr. {name} is requesting that you send your Health Record via this
              DID
            </Text> */}
            <Text style={text}>User&apos;s Name: {name}</Text>
            <Text style={text}>User&apos;s Email Address: {email}</Text>
            <Text style={text}>User&apos;s Message: {message}</Text>
            <Text style={text}>Thank you for using AFIP MEDLOG</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SendEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const boldtext = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  lineHeight: "26px",
  fontWeight: "bold",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "210px",
  paddingTop: "14px",
  paddingBottom: "14px",
};

const anchor = {
  textDecoration: "underline",
};
