import React from "react";
import { Block, ImageLayout } from "../../../components";
import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import theme from "../../../theme/theme";

const ImagesBanerBlock = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("laptop")
  );

  return (
    <Block
      id="ImagesBaner"
      sx={{
        display: "grid",
        justifyItems: "center",
        marginBottom: isMobile ? "70px" : "60px",
      }}
    >
      <Container
        maxWidth="desktop"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "17px" : "56px",
        }}
      >
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          gap="26px 30px"
        >
          <Box
            display="flex"
            flexDirection="column"
            flexBasis={isMobile ? "100%" : "33%"}
            gap={isMobile ? "17px" : "30px"}
          >
            <ImageLayout rectangle>
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image3.png"
                alt="Запас ЧМЗ"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Огромный запас ЧМЗ
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            flexBasis={isMobile ? "100%" : "33%"}
            gap={isMobile ? "17px" : "30px"}
          >
            <ImageLayout rectangle>
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image4.png"
                alt="Шлифовка"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Механическая и ручная шлифовка
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            flexBasis={isMobile ? "100%" : "33%"}
            gap={isMobile ? "17px" : "30px"}
          >
            <ImageLayout rectangle>
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image5.png"
                alt="Склад"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Большой склад фасадного профиля для популярных моделей, позволяет
              нам держать минимальные сроки изготовления.
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          gap="26px 30px"
        >
          <Box
            display="flex"
            flexDirection="column"
            flexBasis={isMobile ? "100%" : "33%"}
            gap={isMobile ? "17px" : "30px"}
          >
            <ImageLayout rectangle>
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image6.png"
                alt="Покраска"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Роботизированная и ручная покраска
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            flexBasis={isMobile ? "100%" : "33%"}
            gap={isMobile ? "17px" : "30px"}
          >
            <ImageLayout rectangle>
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image7.png"
                alt="ЧПУ"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Парк станков с ЧПУ, дополняет восьмишпиндельный,
              многофункциональный станок, который позволяет быстро вырезать
              большое количество декора из массива.
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            flexBasis={isMobile ? "100%" : "33%"}
            gap={isMobile ? "17px" : "30px"}
          >
            <ImageLayout rectangle>
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image8.png"
                alt="Доработка декора"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Ручная доработка ЧПУ декора
            </Typography>
          </Box>
        </Box>
      </Container>
    </Block>
  );
};

export default ImagesBanerBlock;
