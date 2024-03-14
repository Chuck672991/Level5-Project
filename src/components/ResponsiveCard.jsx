import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import the ExpandMoreIcon
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";
import { useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "./Container";
SwiperCore.use([Navigation, Pagination]);

const sections = [
  {
    label: "IT Group Services ",
    content:
      "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique,",
  },
  {
    label: "Data Center & Cloud Services",
    service: "Services",
    content:
      "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique,",
  },
  {
    label: "Emerging Technologies",
    content:
      "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique,",
  },
  {
    label: "Software Technologies ",
    content:
      "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique,",
  },
];

const images = [
  {
    label: "IT Group ",
    service: "Services",
    src: "./1 (1).svg",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers  .   Seamlessly empower growth.",
  },
  {
    label: "Data  Cloud ",
    service: "Services",
    src: "./2 (1).svg",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers.  Seamlessly empower growth.",
  },
  {
    label: "Emerging ",
    service: "Technologies",
    src: "./3 (1).svg",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.",
  },
  {
    label: "Software  ",
    service: "Services",
    src: "./3 (1).svg",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.",
  },
];

function ResponsiveCard() {
  const swiperRef = useRef(null);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [expandedSections, setExpandedSections] = useState(
    Array(sections.length).fill(false)
  );
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("600"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("960"));
  const isMediumScreen2 = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const initialSectionIndex = sections.findIndex(
      (section) => section.label === "Requirements"
    );
    setActiveSection(initialSectionIndex);
  }, []);

  const handleClickSection = (index) => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = !newExpandedSections[index];
    setExpandedSections(newExpandedSections);
    setActiveSection(activeSection === index ? null : index);
  };

  const handleClickImage = (index) => {
    setActiveImage(activeImage === index ? null : index);
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
    setActiveSection(activeStep);
  };

  const handleBack = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
    setActiveSection(activeStep);
  };

  const toggleContact = () => {
    setShowContact((prevShowContact) => !prevShowContact);
  };

  return (
    <>
      <Container>
        <div
          style={{
            backgroundColor: "#1B1B1F",
            minHeight: "100%",
            minWidth: "100%",
          }}
        >
          {/* <Box sx={{}}>
          <Typography sx={{}}></Typography>
        </Box> */}

          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2.5} justifyContent="end">
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={6}
                order={isMediumScreen2 ? 2 : 1}
              >
                <Box sx={{ paddingX: isSmallScreen ? "4%" : "8%" }}>
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: {
                          xs: "20px",
                          sm: "19px",
                          md: "23px",
                          lg: "25px",
                          xl: "30px",
                        },
                        color: "#F5F5F5",
                      }}
                    >
                      Our Solutions & Service Offering
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "20px",
                          sm: "19px",
                          md: "23px",
                          lg: "25px",
                          xl: "30px",
                        },
                        color: "#F5F5F5",
                      }}
                    >
                      End-to-End Solutions for You
                    </Typography>
                    <Box
                      sx={{
                        borderBottom: "0.5vh solid #553EFF",
                        width: {
                          xs: "10vh",
                          sm: "20vh",
                          md: "40vh",
                          lg: "50vh",
                        },
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        color: "#F5F5F5",
                        paddingTop: "2%",
                        fontSize: { xs: "3vh", md: "3vh.", lg: "4.5" },
                        paddingBottom: { lg: "3vh" },
                      }}
                    >
                      IT Services
                    </Typography>
                    {sections.map((section, index) => (
                      <div key={index}>
                        <Button
                          sx={{
                            color: "#C5C5C5",
                            fontFamily: "IBM Plex Sans Arabic",
                            fontSize: isSmallScreen ? "14px" : "16px",
                            fontWeight: "10",
                            textAlign: "left",
                            lineHeight: "3",
                            // bgcolor: "pink",
                            marginBottom: "1vw",
                            width: "100%",
                            height: "100%",
                            borderBottom: "1px solid #ffff",
                            // paddingBottom:"5%"
                          }}
                          onClick={() => handleClickSection(index)}
                        >
                          {section.label}
                          <ExpandMoreIcon
                            sx={{
                              color: expandedSections[index]
                                ? "#553EFF"
                                : "inherit",
                            }}
                          />
                        </Button>
                        {activeSection === index && (
                          <Box>
                            <Typography
                              sx={{
                                color: "#C5C5C5",
                                fontFamily: "IBM Plex Sans Arabic",
                                fontSize: "20px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                mb: "px",
                              }}
                            >
                              {section.label}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#C5C5C5",
                                fontFamily: "IBM Plex Sans Arabic",
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
                  </Box>

                  {/* <Grid container my={2} spacing={2}>

                  <Grid item xs={12} sm={12} md={8}    >

                   
                  </Grid>
                </Grid> */}
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={8}
                lg={8}
                xl={6}
                order={isMediumScreen2 ? 2 : 1}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: "start",
                    backgroundColor: "#1B1B1F",
                    border: "none",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      paddingLeft: {
                        xs: "35%",
                        sm: "%",
                        md: "40%",
                        lg: "40%",
                        xl: "40%",
                      },
                    }}
                  >
                    <Button size="large" onClick={handleBack}>
                      <KeyboardArrowLeft />
                    </Button>
                    <Button size="large" onClick={handleNext}>
                      <KeyboardArrowRight />
                    </Button>
                  </Box>
                  <Swiper
                    ref={swiperRef}
                    spaceBetween={10} // Adjust as needed
                    slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 1 : 2.4}
                    navigation
                    pagination={{ clickable: false }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <Card
                          sx={{
                            elevation: "",
                            maxWidth: "100%",
                            mt: 2,
                            // font:"50px",
                            height: "100%",
                            // color: activeStep === index ? '#553EFF' : '#FFFF',

                            bgcolor:
                              activeStep === index + 1 ? "#553EFF" : "black",
                          }}
                          onClick={() => handleClickImage(index)}
                        >
                          <CardContent
                            sx={{ fontFamily: "IBM Plex Sans Arabic" }}
                          >
                            <img
                              src={image.src}
                              alt=""
                              style={{
                                width: "8vh",
                                paddingBottom: "3vh",
                                display: "flex",
                                flexDirection: "row",
                                justifyItems: "center",
                              }}
                            />
                            <Typography
                              variant=""
                              component="div"
                              sx={{
                                display: "flex",
                                flexDirection: "start",
                                fontSize: {
                                  xs: "3.5vh",
                                  sm: "3vh", // Adjust for small screens
                                  md: "3vh", // Adjust for medium screens
                                  lg: "3.5vh", // Adjust for large screens
                                },
                                color: activeStep === index ? "#FFFF" : "#ffff",
                                paddingBottom: "vh",
                                fontWeight: "600",
                              }}
                            >
                              {image.label}
                            </Typography>
                            <Typography
                              sx={{
                                display: "flex",
                                flexDirection: "",
                                fontSize: {
                                  xs: "3vh",
                                  sm: "2.5vh", // Adjust for small screens
                                  md: "2vh", // Adjust for medium screens
                                  lg: "2.5vh", // Adjust for large screens
                                },
                                color: activeStep === index ? "#FFFF" : "#ffff",
                                paddingBottom: "vh",
                                fontWeight: "200",
                              }}
                            >
                              {image.service}
                            </Typography>
                            <Typography
                              variant=""
                              color="#FFFF"
                              sx={{
                                display: "",
                                color: activeStep === index ? "#FFFF" : "#ffff",
                                fontSize: {
                                  xs: "2.2vh",
                                  sm: "1.5vh", // Adjust for small screens
                                  md: "2vh", // Adjust for medium screens
                                  lg: "2vh", // Adjust for large screens
                                },
                              }}
                            >
                              {image.description}
                            </Typography>
                            <Button
                              sx={{
                                display: "flex",
                                flexDirection: "",
                                color:
                                  activeStep === index ? "#FFFF" : " #553EFF",
                                fontSize: {
                                  xs: "3vh",
                                  sm: "",
                                  md: "2.5vh",
                                  lg: "2vh",
                                },
                                paddingBottom: "10%",
                                paddingTop: "5%",
                              }}
                            >
                              Learn More...
                            </Button>
                          </CardContent>{" "}
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Paper>
              </Grid>
            </Grid>

            {showContact && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 0 }}>
                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body1">Phone: +1234567890</Typography>
                <Typography variant="body1">
                  Email: example@example.com
                </Typography>
              </Box>
            )}
          </Box>
        </div>
      </Container>
    </>
  );
}

export default ResponsiveCard;
