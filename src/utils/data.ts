import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const caculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/PyNBoids.gif',
    title: 'Boids Simulation in Python',
    description:
      'You can create various simutions via this simulator',
    codeLink: 'https://github.com/S4CH/Boids',
    liveLink: '',
    techstack: ['Python', 'Simulator'],
  },
  {
    img: 'img/intru.png',
    title: 'Advanced Intrusion Detection System',
    description:
      'An IDS works by monitoring system activity through examining vulnerabilities in the system',
    codeLink: 'https://github.com/S4CH/advanced-intrusion-detection-system',
    liveLink: '',
    techstack: ['Detection System','Intrusion'],
  },
  {
    img: 'img/Cyshell.png',
    title: 'CyShell-> A Unix Shell',
    description:
      'CLI based on the Unix Bash shell written in c using System-Calls. Supports multiple commands per line, signal handling, and chained redirection and piping etc... ',
    codeLink: 'https://github.com/S4CH/cyshell',
    liveLink: '',
    techstack: ['System Calls','Unix','C'],
  },
  {
    img: 'img/devsnest discord bot.png',
    title: 'Devsnest Discord Bot',
    description:
      'Personalised Bot for students which connects the server side of website of a particular student and fetches his info. Students can mark their questions while being with peers on discord without logging in to the website',
    codeLink: 'https://github.com/devs-nest/discord-bot',
    liveLink: 'https://devsnest.in/discord',
    techstack: ['Discord Bot','Bot Dev'],
  }

];

const experience: Array<ExperienceType> = [
  {
    img: 'img/devsnest.jpg',
    jobTitle: 'Cyber Threat Analyst',
    company: 'devsnest.in',
    date: 'Feb 2021 - Present',
    workLength: ``,
    location: 'Delhi , India',
    tasks: [
      'Secured devsnest from malicious hacking attempts to give a secured environment to the students here',
      'Discord Server Designer and Maintainer of Devsnest'
    ],
    techstack: ['VAPT', 'IDOR', 'RE'],
  },
  {
    img: 'img/orca.jpg',
    jobTitle: 'Pentester {Intern}',
    company: 'Orca Security',
    date: 'Jun 2021 - Aug 2021',
    workLength: '2 mos',
    location: 'California, USA {Remote}',
    tasks: [
      ' Identified risks, vulnerabilities, and gaps in the cloud services',
      ' Design, test, certify and document new cloud services, environments andsystems',
      ' Hands-on experience in operations and maintenance of cloud services',
    ],
    techstack: [
      'Cloud Security',
      'Vulnerability Testing',
      'Docker',
      'Kubernetes',
      'GraphQL',
    ],
  },

];

const education: Array<EducationType> = [
  {
    img: 'img/mnit_logo.png',
    school: 'Malaviya National Institute of Technology, Jaipur',
    study: 'BTech, Computer Science and Engineering',
    date: '2020 - 2024',
  },
  {
    img: 'img/school.jpg',
    school: 'Bhartiya Public School',
    study: 'High School, Mathematics as Major',
    date: '2018 - 2019',
  },
];

export { experience, projects, education };
