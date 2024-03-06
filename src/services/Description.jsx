import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const Description = () => {
  const data = [
    {
      heading: "Software As a Service (SAAS)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissedolor sit amet, consectetur adipiscing elit. Suspendissedolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      heading: "InfraStructire as a Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      heading: "X As a Service (SAAS)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  const [expanded, setExpanded] = useState(Array(data.length).fill(false));

  const handleExpansion = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };


  return (
    <Box sx={{ minWidth: "45vw" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          lineHeight: "2",
          fontSize: "4vh",
          letterSpacing: "2px",
        }}
      >
        IT Services
      </Typography>

      <div>
        {data.map((section, index) => (
          <Accordion
            key={index}
            expanded={expanded[index]}
            onChange={() => handleExpansion(index)}
            sx={{
              bgcolor: "transparent",
              color: "white",
              border: "none",
            }}
          >
            <Box sx={{ padding: "0 0 1vw 0" }}>
              <AccordionSummary
                aria-controls={`panel${index + 1}-content`}
                sx={{
                  borderBottom: "1px solid white",
                  width: "100%",
                  padding: "0",
                }}
                expandIcon={<ExpandMoreIcon />}
                id={`panel${index + 1}-header`}
              >
                <Typography>{section.heading}</Typography>
              </AccordionSummary>
            </Box>
            <AccordionDetails sx={{ padding: "0" }}>
              <Typography>{section.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
};

export default Description;
