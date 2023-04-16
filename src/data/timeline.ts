import Uab from "./../assets/images/uab.png";
import Mnet from "./../assets/images/mnet.png";
import LMU from "./../assets/images/LMU.png";
import assembler from "./../assets/images/assembler.png";
import Bekodo from "./../assets/images/bekodo.svg";

import Meetaitech from "./../assets/images/meetaitech.png";

const data = [


  {

    title: "Backend Software Engineer at Mad Collective",
    date: "February 2022-Now",
    text:
      " At Mad Collective I am part of a team in charge of several back-office projects for accounting and billing. We use serverless infrastructure deployed on AWS and other tools that "+
      "provide a high automatization worfklow.",
     
    img: "./mad-collective-logo-red-150.png",
    location: "Barcelona",
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],

    tags: ["PHP", "AWS","CircleCI" ,"Docker", "Nodejs", "Terraform","Datadog","Serverless"],

    link: {
      url: "https://www.mad.io/",
      text: "Mad Collective",
    },
  },



  {

    title: "Fullstack Engineer at Estimtrack",
    date: "May 2022- Gen 2023",
    text:
      " At estimtrack I was responsible for the entire development of a Software that assists the workflow of employees in Hospitals. Here I designed the back-end architecture using the domain model" +
      "and the hexagonal pattern. Also, I implemented a notification system using the websocket protocol" +
      "some of the technologies used include PHP and Laravel for the backend and Vue for the frontend . ",
    img: "./estimtrack_black.png",
    location: "Barcelona",
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],

    tags: ["PHP", "DDD", "Socket Protocol", "Vue"],

    link: {
      url: "https://estimtrack.com/",
      text: "Estimtrack",
    },
  },

  {

    title: "Fullstack Engineer at Meetaitech",
    date: "April 2021-December 2022",
    text:
      "My duties in the company covered a wide range of variety . Some of the challenges I faced included the development of algorithm that synchronizes the user data produced"
    +"from calendar apps like Outlook or Google calendar. I also optimized api calls by improving database queries, implemented fronted UI designs and maintained the product overall.",
    location: "Barcelona",
    img: Meetaitech,
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],

    tags: ["PHP","Algorithms", "Javascript", "Laravel", "Vue", "Webhooks"],

    link: {
      url: "https://meetaitech.com/",
      text: "Meetaitech",
    },
  },

  {
    title: "Backend developer at Bekodo",
    date: "March 2021 - April 2021",
    text:
      " Backend developer at Bekodo. Working with python and using frameworks like Django or Flask.",

    img: Bekodo,
    location: "Barcelona",
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],


    tags: ["Python", "Javascript", "HTML", "CSS", "Django", "Flask"],

    link: {
      url: "https://www.bekodo.com/",
      text: "Bekodo",
    },
  },

  {
    title: " Software development master at Assembler",
    date: "June 2020 - Feb 2021",
    text:
      " Intensive software development master focused in web applications. The programm was project-based" +
      "several projects were developed under an agile environment and carefully following clean code patterns. During" +
      " that period  i could learn full-stack technologies whilst focusing more on the back-end side of web development .",

    img: assembler,
    location: "Barcelona",
    categories: [{
      tag: "studies",
      color: "#2fbded",
    },

    {
      tag: "work",
      color: "#FF8C00",
    }],

    tags: [
      "Javascript",
      "PHP",
      "HTML",
      "CSS",
      "Git",
      "Laravel",
      "React",
      "Nodejs",
      "MVC",
      "RestFUL",
    ],

    link: {
      url: "https://www.assemblerschool.com/",
      text: "Assembler",
    },
  },

  {
    title: "Data analist at M-net",
    date: "Sept 2018 - Oct 2019",
    text:
      "My job at M-net constisted in analyzing the revenue data from internet contracts in" +
      "order to maximize income and reduce possible losses. Moreover, I also analyzed the data regarding" +
      "international calls and its relative prices, in order to ensure a positive benefit for the company" +
      "and also minimizing the risk to suffer possible Hacker frauds.",
    img: Mnet,

    location: "Munich",

    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],

    tags: ["Excel", "Tableau"],

    link: {
      url: "https://www.m-net.de/hilfe-service/anleitungen/kundenportal/",
      text: "Mnet",
    },
  },
  {
    title: "Astrophysics master at LMU",

    text:
      "I coursed the master In astrophysics at the Ludwig-Maximilian-Universität, in Munich . My master thesis involved the execution of various simulations of a planet system in formation . " +
      "Due to of the fact that I did not recieve many constraints from my professor, I was able to develop my programming skills, by designing and developing an interface for the evaluation and comparison of scientific data as a product of the simulations performed.",
    date: "Sept 2017 - Feb 2020",

    categories: [{
      tag: "studies",
      color: "#2fbded",
    }],

    tags: [
      "Physics",
      "Python",
      "Jupyter",
      "Linux",
      "Latex",
      "Numerical Methods",
      "Computer Science"
    
    ],

    img: LMU,

    link: {
      url: "https://www.lmu.de/en/",
      text: "LMU",
    },
  },

  {
    title: "Physics degree at UAB",
    text:
      " I graduated in Physics by the Universitat autònoma, in Barcelona. Coursing the last year in Munich. It gave me insightful kowledge in Maths and Physics, but at the same time I learned how to approach problems of any other field that may require analytical skills, abstract thinking, strategic planning ,evaluation and programming.",
    date: "Sept 2012 - June 2017",
    img: Uab,
    categories: [{
      tag: "studies",
      color: "#2fbded",
    }],
    link: {
      url: "https://www.uab.cat/en/",
      text: " UAB",
    },
  },
];

export default data;
