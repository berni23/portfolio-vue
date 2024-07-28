import Uab from "./../assets/images/uab.png";
import Mnet from "./../assets/images/mnet.png";
import LMU from "./../assets/images/LMU.png";
import assembler from "./../assets/images/assembler.png";
import Bekodo from "./../assets/images/bekodo.svg";

import Meetaitech from "./../assets/images/meetaitech.png";

const data = [


  {
    title: "Data Engineer at Mad Collective",
    date: "December 2023-Present",
    text:"Within Mad collective I found a great oportunitry to get out of my confort zone and learn the job of data engineering. "+
    "Currently, I design develop, and maintain several data pipelines that serve different business needs. We have a cross-department component "+
    "in charge of delivering severl millions of events daily. For that we use tools like Nifi, Pyspark, aws glue, aws lambda and many others",
    img: "./mad-collective-logo-red-150.png",
    location: "Barcelona",
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],

    tags: ["Python", "AWS","CircleCI" ,"Docker", "Terraform","Datadog"],

    link: {
      url: "https://www.mad.io/",
      text: "Mad Collective",
    },
  },
  {
    title: "Backend Software Engineer at Mad Collective",
    date: "February 2023- December 2023",
    text:
    "At Mad Collective I take part in the development and maintenance of back-office apps related with accounting. "+
    "Also, we are in charge of the integration of our apps with different payment processors. We maintain our own deployment pipelines "+
    "using circleci and terraform, use integrated tools for receiving alerts (datadog, pagerduty) "+
     "and AWS resources for sending domain events (Lambda functions with SQS, SNS). These tools enable us to create highly automated workflows.",
     
    img: "./mad-collective-logo-red-150.png",
    location: "Barcelona",
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],

    tags: ["PHP", "AWS","CircleCI" ,"Docker", "Nodejs", "Terraform","Datadog","Vue3","Serverless","Postman"],

    link: {
      url: "https://www.mad.io/",
      text: "Mad Collective",
    },
  },

  {

    title: "Fullstack Engineer at Estimtrack",
    date: "May 2022- December 2022",
    text: "At Estimtrack I was responsible for the entire development of a software that assists the workflow of employees in Hospitals. "+
    "There I designed the back-end architecture using the domain model and the hexagonal "+
    "pattern. Also, I implemented a notification system using web sockets.",
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
    text:  "At Meetaitech I took part in all aspects of the software creation. There, I developed an "+
    "algorithm that synchronizes the user data coming from calendar apps like Outlook or Google calendar. "+
    "I also optimized api calls by improving database queries, implemented UI designs and maintained the product overall.",
    
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
      " At Bekodo I developed a software in charge of loading  data from spreadsheets to the cloud in order to facilitate the "+
      "transition of small physical businesses into the e-commerce model. "+
      " There I work with python as the backend language, using frameworks like Django and Flask.",

    img: Bekodo,
    location: "Barcelona",
    categories: [{
      tag: "work",
      color: "#FF8C00",
    }],
    tags: ["Python", "Javascript", "HTML5", "CSS", "Django", "Flask"],
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
