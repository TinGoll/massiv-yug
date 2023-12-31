import { Box, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import { listItems } from "../../constants/constants";
import PointIcon from "../../assets/point-icon";

const Ul = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 10px;

  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Li = styled("li")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const ListComponents = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );
  return (
    <Ul>
      {listItems.map((item) => (
        <Li key={item.key}>
          <Box>
            <PointIcon />
          </Box>
          <Typography
            variant="text"
            flex={1}
            fontSize={isMobile ? "15px" : "16px"}
          >
            {item.text}
          </Typography>
        </Li>
      ))}
    </Ul>
  );
};

export default ListComponents;
