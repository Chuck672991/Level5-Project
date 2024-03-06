import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMoreIcon
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const sections = [
  { label: "IT Group Services", content: "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique," },
  { label: "Data Center & Cloud Services", content: "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique," },
  { label: "Emerging Technologies", content: "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique," },
  { label: "Emerging Technologies", content: "Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique,  Just as one explores unique offering in a boutique," },
];

const images = [
  { label: 'IT Group Services', src: './1 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers  .   Seamlessly empower growth.' },
  { label: 'Data  Cloud Services', src: './2 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers.  Seamlessly empower growth.' },
  { label: 'Emerging Technologies', src: './3 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.' },
  { label: 'Emerging Technologies', src: './3 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.' },
];

function ResponsiveCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [expandedSections, setExpandedSections] = useState(Array(sections.length).fill(false));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const initialSectionIndex = sections.findIndex(section => section.label === "Requirements");
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
      <div style={{ backgroundColor: "#1B1B1F", minHeight: "100%", minWidth: "100%" }}>
        <Box sx={{}}>
          <Typography sx={{}}></Typography>
        </Box>

        <Box sx={{ flexGrow: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
            </Button>
            <Button size="small" onClick={handleNext}>
              <KeyboardArrowRight />
            </Button>
          </Box>
          <Grid container spacing={2.5} justifyContent="end">
            <Grid item xs={12} md={4}>
              <Box sx={{ paddingX: isSmallScreen ? "4%" : "8%" }}>
              <Box  sx={{}}>
                   <Typography sx={{fontWeight:"bold",fontSize:{xs:"3vh",},color:"#fff"}}>
                   Our Solutions & Service Offering
                   </Typography>
                   <Typography sx={{fontSize:"3.5vh",color:"#fff"}}>
                   End-to-End Solutions for You
                   </Typography>
<Box sx={{borderBottom:"0.5vh solid #553EFF",width:{xs:"22vh",md:"21vh"}}}></Box>
                   </Box>

                <Grid container my={2} spacing={2}>

                  <Grid item xs={12} md={10}>

                   <Typography sx={{color:"#fff",fontSize:{xs:"3vh",md:"3vh.",lg:"4.5"}}}>
                   IT Services
                   </Typography>
                    {sections.map((section, index) => (
                      <div key={index}>
                        <Button
                          sx={{
                            color: "#ffff",
                            fontFamily: "Clash Display",
                            fontSize: isSmallScreen ? "12px" : "10px",
                            fontWeight: "10",
                            lineHeight: "3",
                            width: "100%",
                            borderBottom:"1px solid #ffff"
                            
                          }}
                          onClick={() => handleClickSection(index)}
                        >
                           {section.label} <ExpandMoreIcon sx={{ color: expandedSections[index] ? '#553EFF' : 'inherit' }} />
                        </Button>
                        {activeSection === index && (
                          <Box>
                            <Typography
                              sx={{
                                color: "#ffff",
                                fontFamily: "Clash Display",
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
              <Grid item key={index} xs={6} sm={3} md={2}>
                <Paper elevation={3} sx={{ p: 0, textAlign: 'center', backgroundColor: "black" }}>
                  <Card
                    sx={{
                      maxWidth: "100%",
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
                      <Typography gutterBottom variant="" component="div" sx={{ fontSize: { xs: "vh", md: "2vh" }, color: activeStep === index ? 'black' : '#ffff', paddingBottom: "1vh", fontSize: "" }}>
                        {image.label}
                      </Typography>
                      <Typography variant="" color="text.secondary" sx={{ color: activeStep === index ? 'black' : ' #ffff', fontSize: { xs: "1.5vh", md: "2vh" }, }}>
                        {image.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {showContact && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
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
