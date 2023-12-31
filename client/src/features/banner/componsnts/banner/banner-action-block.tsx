import React from "react";
import { PrintedText, RoundButton } from "../../../../components";
import { banerList } from "../../constants/list";
import { Box } from "@mui/material";
import BannerTitle from "./banner-title";
import BannerSubtitle from "./banner-subtitle";

const BannerActionBlock: React.FC<Props> = ({ typingStatus }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "34px",
        justifyContent: "center",
        alignItems: {
          mobile: "center",
          laptop: "initial",
        },
      }}
    >
      <Box
        sx={{
          marginTop: {
            mobile: "40%",
            laptop: "initial",
          },
        }}
      >
        <BannerTitle
          variant="h1"
          sx={{
            fontSize: {
              mobile: "26px",
              desktop: "50px",
            },
            textAlign: {
              mobile: "center",
              laptop: "left",
            },
          }}
        >
          <span>Вы получите&nbsp;</span>
          <PrintedText
            timeShow={3500}
            list={banerList}
            onStart={typingStatus}
          />
        </BannerTitle>
        <BannerTitle
          variant="h1"
          sx={{
            fontSize: {
              mobile: "26px",
              desktop: "50px",
            },
            textAlign: {
              mobile: "center",
              laptop: "left",
            },
            maxWidth: {
              mobile: "auto",
              laptop: 670,
            },
          }}
        >
          предвосхищающую все ожидания
        </BannerTitle>
        <BannerSubtitle
          sx={{
            textAlign: {
              mobile: "center",
              laptop: "left",
            },
            fontSize: {
              mobile: "17px",
              laptop: "18px",
            },
          }}
        >
          до мельчайших подробностей!
        </BannerSubtitle>
      </Box>
      <Box>
        <RoundButton
          height={100}
          sx={{
            fontWeight: 300,
          }}
        >
          Рассчитать стоимость
        </RoundButton>
      </Box>
    </Box>
  );
};

export default BannerActionBlock;
interface Props {
  typingStatus: (value: string) => void;
}
