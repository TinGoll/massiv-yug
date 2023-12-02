import React from "react";
import Layout from "../layouts/layout";
import { Banner } from "../features/banner";

import { HeadFC } from "gatsby";
import LayoutFixed from "../layouts/layout-fixed";
import { Block, Offset } from "../components";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import { BreadcrumbsBlock } from "../features/breadcrumbs-block";
import {
  FromIdeaBlock,
  ImagesBanerBlock,
  WhatWeProduceBlock,
} from "../features/about-blocks";


const About = () => {
  return (
    <LayoutFixed>
      <main>
        <Block id="breadcrumbsAbout">
          <Offset />
          <Container maxWidth="desktop">
            <BreadcrumbsBlock
              adress={["Главная", "О компании"]}
              links={["/"]}
            />
            <FromIdeaBlock />
            <ImagesBanerBlock />
            <WhatWeProduceBlock />
          </Container>
        </Block>
      </main>
    </LayoutFixed>
  );
};

export default About;

export const Head: HeadFC = () => <title>Home Page</title>;
