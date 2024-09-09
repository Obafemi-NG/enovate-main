import humanKind from "./public/humankind2.png";
import scholarX from "./public/scholarX2.png";
import whooosh from "./public/whooosh2.png";
import cashDrive from "./public/cashDrive2.png";
import travelGo from "./public/travelGo2.png";
import learnAm from "./public/learnAm2.png";

export const projects = [
  {
    id: "1",
    name: "HumanKind Foundation",
    year: "2022",
    description:
      "Humankind foundation is a non-governmental organization focused on providing developmental solutions to individuals and communities through green energy.",
    imgUrl: humanKind,
    finished: true,
    big: true,
    tags: ["Web Development", "Brand Identity Design"],
    link: "https://www.humankindorg.com",
  },

  {
    id: "3",
    name: "Whooosh",
    year: "2022",
    description:
      "Whooosh is a multi-featured financial app. It lets users create multiple cards, send money, schedule transfers, pay bills, and request money from friends.",
    imgUrl: whooosh,
    finished: false,
    big: false,
    tags: ["Mobile Dev.", "Product Design"],
  },
  {
    id: "4",
    name: "CashDrive",
    year: "2020",
    description:
      "CashDrive lets people use their cars as collaterals for loans.",
    imgUrl: cashDrive,
    finished: true,
    big: false,
    tags: ["Web Development"],
    link: "https://www.cashdrive.co",
  },
  {
    id: "2",
    name: "ScholarX",
    year: "2022",
    description:
      "ScholarX is a social impact startup that focuses on Educational Financing.",
    imgUrl: scholarX,
    finished: true,
    big: true,
    tags: ["Web Development"],
    link: "https://www.scholarx.co",
  },

  {
    id: "5",
    name: "TravelGo",
    year: "2022",
    description: "TravelGo is an app for booking vacations to selected places.",
    imgUrl: travelGo,
    finished: false,
    big: false,
    tags: ["Product Design"],
  },
  {
    id: "6",
    name: "LearnAM",
    year: "2021",
    description:
      "LearnAM lets people learn various skills in their local languages. ",
    imgUrl: learnAm,
    finished: true,
    big: false,
    tags: ["Web Development"],
    link: "https://www.learnam.africa",
  },
];
