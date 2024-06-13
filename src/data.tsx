import {
  FaPython,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
  FaAws,
  FaSwift,
  FaDatabase,
  FaCode,
  FaTerminal,
  FaLaughSquint,
  FaStoreAlt,
  FaPuzzlePiece,
  FaGamepad,
  FaGoogle,
  FaHamburger,
  FaSchool,
} from "react-icons/fa";

export const skills = [
  {
    name: "Python",
    desc: "Machine Learning, Data Science, Regression, Classification, Clustering, Django, Selenium, Flask",
    logo: <FaPython size={60} />,
  },
  {
    name: "Java",
    desc: "Object-Oriented, JDBC, Lambdas, Data Structures, Algorithms, Spring Boot",
    logo: <FaJava size={60} />,
  },
  {
    name: "React/Next.js",
    desc: "JavaScript, TypeScript, Node.js, Full Stack",
    logo: <FaReact size={60} />,
  },
  {
    name: "Cloud Technologies",
    desc: "AWS (Cloud Practitioner), GCP, Azure, MongoDB",
    logo: <FaAws size={60} />,
  },
  {
    name: "SwiftUI",
    desc: "APIs, CreateML, CoreData, UI/UX Design",
    logo: <FaSwift size={60} />,
  },
  {
    name: "Databases",
    desc: "No-SQL, MySQL, SQLite, MSSQL, PostgreSQL, MongoDB",
    logo: <FaDatabase size={60} />,
  },
  {
    name: "Other Languages",
    desc: "Bash, Go, C#/C++, GraphQL, HTML, CSS",
    logo: <FaCode size={60} />,
  },
  {
    name: "Other Softwares/Frameworks",
    desc: "Git, Docker, Kubernetes, Cypress, Jenkins",
    logo: <FaTerminal size={60} />,
  },
];

// data/experiences.js

export const experiences = [
  {
    id: "capital-one-software-engineer",
    company: "Capital One",
    position: "Software Engineer Intern",
    location: "McLean, VA",
    date: "June 2023 - August 2023",
    desc: [
      "Spearheaded the development of a bootstrapped platform to streamline the Unusual Activity Report (UAR) data collection process",
      "Designed and deployed a scalable solution that automated processes and decreased manual labor by 30%",
      "Enabled real-time monitoring system, which lead to a 20% increase in identifying potential threats and enhancing fraud detection",
      "Conducted 11 unit tests on Next.js components and HTTP requests to the API to validate reliability, using Cypress and Jest",
      "Executed rigorous performance, data processing, and frontend integration tests on 2 AWS Lambda functions using Behave",
      "Worked closely with stakeholders from Compliance, Risk Management, and IT to increase user engagement by 9% worldwide",
    ],
    type: "Internship",
  },
  {
    id: "metlife-software-engineer",
    company: "MetLife",
    position: "Software Engineer Intern",
    location: "New York, NY",
    date: "May 2022 - December 2022",
    desc: [
      "Successfully migrated critical components and services, in AngularJS, to Angular 13, decreasing latency by 40%",
      "Optimized pipelines in Azure DevOps to automate deployments using shell scripts, cutting deployment cycles by 2-3 minutes",
      "Innovated a new automated onboarding process for new employees, estimated to save over $300K in operational costs",
      "Played a key role in integrating proactive notifications into enterprise-wide chatbot, improving communication for 43K employees",
    ],
    type: "Internship",
  },
  {
    id: "headstarter-tech-lead",
    company: "Headstarter",
    position: "Tech Lead",
    location: "New York, NY",
    date: "March 2022 - December 2022",
    desc: [
      "Collaborated with the CEO and CTO to re-engineer backend architecture redesign, reducing AWS resource costs by 80%",
      "Led the refactoring initiative of the legacy codebase and implementing AWS CDK, boosting efficiency by 60%",
      "Decreased video loading time by 66% by introducing caching such as CloudFront in media related content",
      "Orchestrated a successful platform launch, resulting in the acquisition of over 500 users and generating over $20K in revenue",
    ],
    type: "Part-Time",
  },
  {
    id: "headstarter-founding-engineer",
    company: "Headstarter",
    position: "Founding Engineer",
    location: "New York, NY",
    date: "August 2021 - March 2022",
    desc: [
      "Developed an ed-tech platform in 45 days for company's launch in October, using React, Express, and AWS",
      "Streamlined custom React components, minimizing total number of clicks by 8% and improving average page navigation time",
      "Expedited project timelines by 30% using AWS services, including Cognito, EC2, S3, SES, Lambda, and DynamoDB",
      "Pioneered a robust paywall and subscription modal using Stripe, capable of handling 15K users per month",
    ],
    type: "Part-Time",
  },
  {
    id: "slingshot-machine-learning",
    company: "Slingshot",
    position: "Machine Learning Research Intern",
    location: "New York, NY",
    date: "July 2020 - May 2021",
    desc: [
      "Initiated project to improve device security using a one-time continuous authentication system, ensuring persistent user validation",
      "Released a mobile app using React Native and Firebase to collect stylometric data which was used for research and training models",
      "Fine-tuned 16 machine learning models for text analysis that distinguishes users based on their writing patterns with 97% accuracy",
      "Integrated Cloud Functions to preprocess data, optimizing it for real-time training and enhancing accuracy in user identification",
    ],
    type: "Internship",
  },
];

export const projects = [
  {
    name: "Khuda Lagche",
    date: "August 2022 - Present",
    meta: "Developed a personalized recipe and blog recommendation app using Next.js, FastAPI, and AWS, deploying machine learning models on ElasticBeanstalk.",
    tags: "Next.js ∙ Typescript ∙ AWS ∙ Python ∙ FastAPI ∙ PyTorch ∙ Terraform",
    link: "https://github.com/thetajwar2003/khuda-lagche",
    logo: <FaHamburger size={64} />,
  },
  {
    name: "Learning Made Simple",
    date: "January 2022 - July 2022",
    meta: "Created a learning management system for educational courses, leveraging agile methods and CI/CD pipelines for automation and deployment.",
    tags: "Next.js ∙ Typescript ∙ Amplify ∙ Express ∙ Cypress",
    link: "https://github.com/thetajwar2003/learning-made-simple-ui",
    logo: <FaSchool size={64} />,
  },
  {
    name: "Dad Joke CLI",
    date: "11/2021",
    meta: "Developed a CLI using Go and Cobra that prints out random dad jokes using a “random” command and a “--term” flag. Fetched data from the icanhazdadjoke API using a get request.",
    tags: "GoLang ∙ Cobra",
    link: "https://github.com/thetajwar2003/dadjoke",
    logo: <FaLaughSquint size={64} />,
  },
  {
    name: "AI Flappy Bird",
    date: "06/09/2020",
    meta: "An AI that learns and teaches itself the popular game Flappy Bird. It performed 48 generations, each with 60 Flappy Birds, before ending the simulation at 3 birds scoring 250 points.",
    tags: "Python ∙ PyGame ∙ NEAT-python",
    link: "https://github.com/thetajwar2003/AI-Flappy-Bird-",
    logo: <FaGamepad size={64} />,
  },
  {
    name: "Google Assistant",
    date: "04/08/20",
    meta: "A voice assistant that would relay information about your inbox, events in your google calendar, youtube subscriptions, etc.",
    tags: "Python ∙ Google APIs ∙ Automation",
    link: "https://github.com/thetajwar2003/mini-google-assistant",
    logo: <FaGoogle size={64} />,
  },
];
