/* eslint-disable */
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  return (
    <Container>
      <div>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to YOK! These terms and conditions outline the rules and regulations for
          the use of YOK's Website, located at [Your Website URL].
        </Typography>

        <Typography variant="body1" paragraph>
          By accessing this website, we assume you accept these terms and conditions. Do not
          continue to use YOK if you do not agree to take all of the terms and conditions
          stated on this page.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Cookies
        </Typography>

        <Typography variant="body1" paragraph>
          We employ the use of cookies. By accessing YOK, you agreed to use cookies in
          agreement with YOK's Privacy Policy.
        </Typography>

        <Typography variant="body1" paragraph>
          Most interactive websites use cookies to retrieve the user's details for each
          visit. Cookies are used by our website to enable the functionality of certain
          areas to make it easier for people visiting our website.
        </Typography>

        <Typography variant="body1" paragraph>
          YOK uses cookies to ensure a better experience for you on our website. By using our
          website, you consent to the use of cookies in accordance with YOK's privacy policy.
        </Typography>

        <Typography variant="h5" gutterBottom>
          License
        </Typography>

        <Typography variant="body1" paragraph>
          Unless otherwise stated, YOK and/or its licensors own the intellectual property
          rights for all material on YOK's Website. All intellectual property rights are
          reserved.
        </Typography>

        <Typography variant="body1" paragraph>
          You may access this from YOK for your own personal use subjected to restrictions
          set in these terms and conditions.
        </Typography>

        <Typography variant="body1" paragraph>
          You must not:
          <ul>
            <li>Republish material from YOK</li>
            <li>Sell, rent, or sub-license material from YOK</li>
            <li>Reproduce, duplicate or copy material from YOK</li>
          </ul>
        </Typography>

        {/* Add more sections as needed */}

        <Typography variant="body1" paragraph>
          These terms and conditions have been generated at YOK's Terms And Conditions Sample.
        </Typography>
      </div>
    </Container>
  );
}
