import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const images = [
  { label: 'IT Group Services', src: './1 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers  .   Seamlessly empower growth.' },
  { label: 'Data  Cloud Services', src: './2 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers.  Seamlessly empower growth.' },
  { label: 'Emerging Technologies', src: './3 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.' },
  { label: 'Emerging Technologies', src: './3 (1).svg', description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.' },
];
const Cards = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Box>
      <Box sx={{ marginLeft: "22rem", padding: "1vw 0" }}>
        <IconButton sx={{ borderRadius: "1px", gap: "1vw" }} aria-label="prev">
          <KeyboardArrowLeftIcon sx={{ bgcolor: "grey", padding: "4px" }} />
          <KeyboardArrowRightIcon sx={{ bgcolor: "#5E69FC", padding: "4px" }} />
        </IconButton>
        {/* <IconButton sx={{bgcolor:"grey",borderRadius:"1px"}}  aria-label="next" color="primary">
        </IconButton> */}
      </Box>

      <Box style={{ display: "flex", gap: "1vw" }}>
      
      {images.map((image, index) => (
        <div key={index}>
          <CardContent
            sx={{ minWidth: "18vw", minHeight: "23vw", bgcolor: "grey",padding:"4vw 1vw" }}
          >
            <img
              src={image.src}
              alt={image.label}
              style={{ width: "8vh", paddingBottom: "3vh" }}
            />
            <Typography variant="h6" component="div">
              {image.label}
            </Typography>

            <Typography color="text.secondary">Services</Typography>
            <Typography variant="body2">
              {image.description}
            </Typography>
          </CardContent>
        </div>
      ))}
        {/* <div>
          <CardContent
            sx={{ minWidth: "18vw", minHeight: "22vw", bgcolor: "grey" }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
        <div>
          <CardContent
            sx={{ minWidth: "18vw", minHeight: "22vw", bgcolor: "grey" }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
        <div>
          <CardContent
            sx={{ minWidth: "18vw", minHeight: "22vw", bgcolor: "orange" }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div> */}
      </Box>
    </Box>
  );
};

export default Cards;
