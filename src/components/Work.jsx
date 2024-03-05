import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import Container from "./Container";
import useMediaQuery from "@mui/material/useMediaQuery";

const sections = [
  { label: "Requirements", content: "At 360XpertSolutions, our journey begins with a meticulous exploration of your needs and aspirations. Our adept team collaborates closely with you to unearth the intricacies of your project, ensuring a comprehensive understanding of every requirement. Through client engagement and effective communication, we set the foundation for a successful software development journey." },
  { label: "System Design", content: "Armed with a clear understanding of your requirements, our experts embark on the System Design phase. Here, we architect a robust and scalable solution tailored to your specifications. Employing cutting-edge technologies and industry best practices, we craft a blueprint that serves as the roadmap for the entire development process. Our emphasis lies in creating a system that not only meets your current needs but also paves the way for future scalability." },
  { label: "Development", content: "Enter the realm of creation as our skilled developers bring your vision to life. Following agile methodologies, we break down the project into manageable sprints, ensuring rapid and incremental progress. With an unwavering commitment to quality, we code with precision and agility, keeping you closely involved in the development process. Expect transparency, flexibility, and a software product that aligns seamlessly with your goals." },
  { label: "Testing", content: "Rigorous quality assurance is ingrained in our DNA. The Testing phase at 360XpertSolutions is a meticulous process where every line of code is scrutinized, ensuring functionality, security, and performance. Our comprehensive testing strategy includes unit testing, integration testing, and user acceptance testing, guaranteeing a resilient and error-free software solution that exceeds your expectations." },
  { label: "Deployment", content: "Witness the culmination of our efforts as we seamlessly deploy your software solution. Our deployment process is orchestrated with precision to minimize downtime and ensure a smooth transition. With a keen eye on user experience, we deliver a fully functional and optimized software product that is ready to make a positive impact on your business." },
  { label: "Maintenance", content: "Our commitment to your success extends beyond deployment. The Maintenance phase at 360XpertSolutions is an ongoing partnership to ensure your software remains at its peak performance. We proactively monitor, update, and enhance the system to adapt to changing requirements and technological advancements. Your satisfaction is our priority, and we stand by you to address any evolving needs." },
];

export default function Work() {
  const [activeSection, setActiveSection] = useState(null);
  const isLargeScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen2 = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    // Set the active section to the index of the "Requirements" section initially
    const initialSectionIndex = sections.findIndex(section => section.label === "Requirements");
    setActiveSection(initialSectionIndex);
  }, []);

  const handleClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <Container>
      <Box sx={{ paddingX: "" }}>
        <Grid container my={2} spacing={3}>
          <Grid item xs={12} md={3} sm={12} lg={3} xl={4}>
            {sections.map((section, index) => (
              <div key={index}>
                <Button
                  sx={{
                    color: "#ffff",
                    fontFamily: "Clash Display",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                  onClick={() => handleClick(index)}
                >
                  {section.label}
                </Button>
                <Divider sx={{ borderColor: "#D0140F", marginTop: "10px" }} />
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
          <Grid item xs={12} md={9} lg={9} xl={9} sx={{ display: isLargeScreen2 ? "" : "none" }}>
            {activeSection !== null && (
              <div>
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
                    color: "#181815",
                    fontFamily: "Clash Display",
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "normal",
                    letterSpacing: "0.4px",
                    inline: "block",
                  }}
                >
                  {sections[activeSection].content}
                </Typography>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
