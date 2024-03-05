import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions"; 
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Work from "./Work";
import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const sections = [
  {
    label: "Requirements",
    content: "San  Bay Bridge, located in the United States.",
  },
  {
    label: "System Design",
    content: "A beautiful bird perched on a tree branch.",
  },
  { label: "Development", content: "A stunning view of Bali, Indonesia." },
  { label: "Testing", content: "Scenic view of Goč, a  in Serbia." },
];

const images = [
  {
    label: "IT ",
    src: "./1 (1).svg",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
  },
  {
    label: "Data Center & Cloud Services",
    src: "./2 (1).svg",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth..",
  },
  // {
  //   label: "Emerging Technologies",
  //   src: "./3 (1).svg",
  //   description:
  //     "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
  // },
  // {
  //   label: "Emerging Technologies",
  //   src: "./3 (1).svg",
  //   description:
  //     "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
  // },
];

function ResponsiveCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
  };

  const toggleContact = () => {
    setShowContact((prevShowContact) => !prevShowContact);
  };
  const [activeSection, setActiveSection] = useState(null);
  const isLargeScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen2 = useMediaQuery("(min-width:900px)");
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "6px",
    slidesToShow: 1,
    speed: 500
  };
  useEffect(() => {
    // Set the active section to the index of the "Requirements" section initially
   
    const initialSectionIndex = sections.findIndex(
      (section) => section.label === "Requirements"
    );
    setActiveSection(initialSectionIndex);
  }, []);

  const handleClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <>
      <br />
      <br />

      <div style={{ backgroundColor: "#1B1B1F" }}>
        {/* <Box sx={{}}>
          <Typography sx={{}}></Typography>
        </Box> */}
          {/* <br />
          <br />
          <br /> */}

        <Box sx={{ flexGrow: 0 ,padding:"5vw 1vw"}}>
          {/* buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
            </Button>
            <Button size="small" onClick={handleNext}>
              <KeyboardArrowRight />
            </Button>
          </Box>
          <Grid container sx={{bgcolor:"red"}}>
            {/* left box */}
            <Grid item sx={{bgcolor:"pink"}} xs={5} sm={12} md={4}>
              <Box sx={{ paddingX: "8%" }}>
                <Grid container my={2} spacing={2}>
                  <Grid item xs={12} md={6} sm={6} lg={2} xl={4}>
                    {sections.map((section, index) => (
                      <div key={index}>
                        <Button
                          sx={{
                            color: "orange",
                            fontFamily: "Clash Display",
                            fontSize: "18px",
                            fontWeight: "500",
                            lineHeight: "normal",
                          }}
                          onClick={() => handleClick(index)}
                        >
                          {section.label}
                        </Button>
                        <Divider
                          sx={{ borderColor: "#D0140F", marginTop: "10px" }}
                        />
                        {activeSection === index && isLargeScreen && (
                          <Box>
                            <Typography
                              sx={{
                                color: "#ffff",
                                fontFamily: "Clash Display",
                                fontSize: "20px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                mb: "15px",
                              }}
                            >
                              {section.label} 
                            </Typography>
                            <Typography
                              sx={{
                                color: "#ffff",
                                fontFamily: "Clash Display",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "0.4px",
                                inline: "block",
                              }}
                            >
                              {section.content} 
                            </Typography>
                          </Box>
                        )}
                      </div>
                    ))}
                  </Grid>
                  {activeSection !== null && (
                    <div style={{ width: "70vh" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontFamily: "Clash Display",
                          fontSize: "26px",
                          fontWeight: "400",
                          lineHeight: "normal",
                          mb: "15px",
                        }}
                      >
                        {sections[activeSection].label}
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          fontFamily: "Clash Display",
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "normal",
                          letterSpacing: "0.4px",
                          inline: "",
                        }}
                      >
                        {sections[activeSection].content}
                      </Typography>
                    </div>
                  )}
                </Grid>
              </Box>
            </Grid>
            {/* Roght box */}
            {images.map((image, index) => (
              <Grid item xs={4} key={index}> {/* Assuming you want to display two cards per row */}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Card
              sx={{
                bgcolor: activeStep === index ? "#553EFF" : "black",
              }}
              onClick={() => setActiveStep(index)}
              id="hd-card"
            >
              <CardContent>
                <img src={image.src} alt="" />
                <Typography
                  gutterBottom
                  variant=""
                  component="div"
                  sx={{
                    color: activeStep === index ? "black" : "#ffff",
                  }}
                  id="hd-label"
                >
                  {image.label}
                </Typography>
                <Typography
                  variant=""
                  color="text.secondary"
                  sx={{
                    color: activeStep === index ? "black" : "#ffff",
                  }}
                  id="hd-desc"
                >
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Slider>
      </div>
    </Grid>
            ))}

          </Grid>

          {showContact && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {/* Add your contact information here */}
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body1">Phone: +1234567890</Typography>
              <Typography variant="body1">
                Email: example@example.com
              </Typography>
            </Box>
          )}
        </Box>
   
      </div>
    </>
  );
}

export default ResponsiveCard;
