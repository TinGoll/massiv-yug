import React from "react";
import { Block, HeaderBlock, Offset, TitleBlock } from "../../components";
import BgIcon from "./components/bg-icon/bg-icon";
import { Box, Container } from "@mui/material";
import InfoBlock from "./components/info-block/info-block";
import GraphicBlock from "./components/graphic-block/graphic-block";

const AdvantagesBlock: React.FC = () => {
  return (
    <Block id="02">
      <Offset />
      <Box
        sx={(theme) => ({
          bgcolor: theme.colors.light.secondary,
          position: "relative",
          overflow: "hidden",
          paddingTop: "67px",
        })}
      >
        <BgIcon />
        <HeaderBlock darkTheme number={2} text="Преимущества" />
        <Container maxWidth="desktop">
          <TitleBlock
            mt={4}
            sx={{
              color: "white",
            }}
          >
            Почему вы?
          </TitleBlock>
          <InfoBlock />
        </Container>
        <GraphicBlock />
        <Offset />
      </Box>
    </Block>
  );
};

export default AdvantagesBlock;
