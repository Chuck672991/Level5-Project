import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const sections = [
  { label: "Requirements", content: "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique, where each level represents a curated space of expertise. Just as one explores unique offering in a boutique, Level Five aspires to deliver specialized and tailored IT solutions at the highest level of proficiency." },
  { label: "Cybersecurity Services (regulated)", content: "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth." },
  { label: "Cybersecurity Services (regulated)", content: "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth." },
  { label: "Cybersecurity Services (regulated)", content: "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth." },
];

const images = [
  {
    label: 'IT Group Services',
    src: './1 (1).svg',
    description: 'Level five software house is best Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.',
  },
  {
    label: 'Data Center & Cloud Services',
    src: './2 (1).svg',
    description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.',
  },
  {
    label: 'Emerging Technologies',
    src: './3 (1).svg',
    description: 'Level five software house is best Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.',
  },
  {
    label: 'Emerging Technologies',
    src: './3 (1).svg',
    description: 'Level five software house is best Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.',
  },
];

function ResponsiveCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const isLargeScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    // Set the active section to the index of the "Requirements" section initially
    const initialSectionIndex = sections.findIndex(section => section.label === "Requirements");
    setActiveSection(initialSectionIndex);
  }, []);

  const handleClickSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const handleClickImage = (index) => {
    setActiveImage(activeImage === index ? null : index);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1));
  };

  const toggleContact = () => {
    setShowContact((prevShowContact) => !prevShowContact);
  };

  return (
    <>
      <div style={{backgroundColor:"#1B1B1F", minHeight:"70vh",minWidth:"52.5vh"}}>
        <Box sx={{}}>
          <Typography sx={{}}></Typography>
        </Box>
        <br />
        <br />
        <br />
        <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
            </Button>
            <Button size="small" onClick={handleNext}>
              <KeyboardArrowRight />
            </Button>
          </Box>
          <Grid container spacing={2} justifyContent="end">
            <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ paddingX: "8%" }}>
                <Grid container my={2} spacing={2}>
                  <Grid item xs={3} md={6} sm={6} lg={2} xl={4}>
                    {sections.map((section, index) => (
                      <div key={index}>
                        <Button
                          sx={{
                            color: "#ffff",
                            fontFamily: "Clash Display",
                            fontSize: "10px",
                            fontWeight: "100",
                            lineHeight: "normal",
                            width:""
                          }}
                          onClick={() => handleClickSection()}
                        >
                          {section.label} <ExpandMoreIcon />
                        
                        </Button>
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
                </Grid>
              </Box>
            </Grid>
            {images.map((image, index) => (
              <Grid item key={index} xs={3} sm={6} md={2}>
                <Paper elevation={3} sx={{ p: 0, textAlign: 'start', backgroundColor: "black" }}>
                  <Card
                    sx={{
                      maxWidth: 245,
                      mt: 2,
                      bgcolor: activeStep === index ? '#553EFF' : 'black',
                    }}
                    onClick={() => handleClickImage(index)}
                  >
                    <CardContent>
                      <img
                        src={image.src}
                        alt=""
                        style={{ width: "8vh", paddingBottom: "3vh" }}
                      />
                      <Typography gutterBottom variant="" component="div" sx={{ fontSize: { xs: "1vh", md: "" }, color: activeStep === index ? 'black' : '#ffff', paddingBottom: "1vh", fontSize: "bold" }}>
                        {image.label}
                      </Typography>
                      <Typography variant="" color="text.secondary" sx={{ color: activeStep === index ? 'black' : ' #ffff', fontSize: { xs: ".5vh", md: "" }, }}>
                        {image.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {showContact && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {/* Add your contact information here */}
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body1">Phone: +1234567890</Typography>
              <Typography variant="body1">Email: example@example.com</Typography>
            </Box>
          )}
        </Box>
        
      </div>
    </>
  );
}

export default ResponsiveCard;
