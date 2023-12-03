import React from "react";
import { Block, HeaderBlock, Offset, TitleBlock } from "../../components";
import { Box, Container, Theme, useMediaQuery } from "@mui/material";
import { TextItems } from "./constants/constants";
import TextCard from "../../components/text-card/text-card";
import BgIcon from "./bg-icon/bg-icon";

const CompanyValuesBlock = () => {
  return (
    <Block
      id="06"
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Offset />

      <Box
        sx={(theme) => ({
          position: "relative",
          overflow: "hidden",
          paddingTop: "67px",
        })}
      >
        <Container maxWidth="desktop">
          <BgIcon />
          <HeaderBlock number={6} text={"Преимущества"} />

          <TitleBlock
            sx={{
              marginTop: {
                mobile: "25px",
                tablet: "25px",
                laptop: "25px",
                desktop: "70px",
              },
              marginBottom: {
                mobile: "33px",
                tablet: "33px",
                laptop: "33px",
                desktop: "40px",
              },
            }}
          >
            Порядочны и честны
          </TitleBlock>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: {
                mobile: "column",
                tablet: "column",
                laptop: "column",
                desktop: "row",
              },
              gap: {
                mobile: "15px",
                tablet: "15px",
                laptop: "15px",
                desktop: "50px",
              },
              paddingTop: {
                mobile: "27px",
                tablet: "27px",
                laptop: "27px",
                desktop: "12px",
              },
            }}
          >
            {TextItems.map((item) => {
              return (
                <TextCard
                  noPadding
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                >
                  {item.text}
                </TextCard>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Block>
  );
};

export default CompanyValuesBlock;
