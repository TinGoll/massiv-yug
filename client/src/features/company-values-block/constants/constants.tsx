import React from "react";
import { Approve, Compressi2, Lifebuoy, Like } from "../../../assets/icons";
import { TextCardItem } from "../types/types";
import ChipIcon from "../../../assets/icons/chip-icon";

export const TextItems: TextCardItem[] = [
  {
    key: "CVB_TextItem_1",
    icon: <Approve />,
    title: "Ценим и применяем опыт",
    text: "У нас работают люди с большим стажем, их опыт и знания помогают нам добиваться высокого качества и эффективных решений.",
  },
  {
    key: "CVB_TextItem_2",
    icon: <ChipIcon />,
    title: "Двигаемся в ногу со временем",
    text: "Мы используем высокотехнологичное оборудование, ЧПУ, роботизированную технику, а также сами являемся новаторами и авторами уникальных технологий производства и контроля.",
  },
  {
    key: "CVB_TextItem_3",
    icon: <Compressi2 />,
    title: "Гибкие и решительные",
    text: "Минимум формализма, максимум креатива, тестим гипотезы, подбираем максимально эффективные решения.",
  },
  {
    key: "CVB_TextItem_4",
    icon: <Like />,
    title: "Порядочны и честны",
    text: "Честное имя и безупречная репутация – важнейшая ценность для нас, в любой ситуации стараемся добиться максимального порядочного отношения к людям. Предпочтем ущерб, но не честь компании! ",
  },
  {
    key: "CVB_TextItem_5",
    icon: <Lifebuoy />,
    title: "Лояльность клиента",
    text: "– главная ценность, над которой работает весь наш коллектив, именно Вы и Ваше восторженное состояние по завершению наших обязательств является главной целью! Ведь мы работаем для и ради Вас!",
  },
];
