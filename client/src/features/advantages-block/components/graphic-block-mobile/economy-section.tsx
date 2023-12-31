import { Box, styled, alpha } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Container = styled(Box)`
  position: relative;
  width: 322px;
  height: 432px;
  border-radius: 160px;
  background-color: ${alpha("#fff", 0.14)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 146px;
    height: 196px;
    border-radius: 148px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EconomySection: React.FC = () => {
  return (
    <Container>
      <StaticImage
        objectFit="cover"
        src="../../../../images/advantages/coins.png"
        alt="kitchen"
      />
    </Container>
  );
};

export default EconomySection;
