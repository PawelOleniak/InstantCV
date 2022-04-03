import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';
import { DiUbuntu, DiReact, DiPython, DiJava, DiDatabase } from 'react-icons/di';
import { SiStyledcomponents, SiFirebase } from 'react-icons/si';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsGithub, BsFillBootstrapFill, BsPhone } from 'react-icons/bs';
import Flags from 'country-flag-icons/react/3x2';

const Me = 'Paweł Oleniak';
const introduction = {
  header: 'Profile',
  elements: [
    "I'm a aspiring frontend developer, who wants to develop and gain experience. I started from making simple sites with HTML and JS. Later continued by learning React. Now I'm working to grasp D3 with purpose of creating own Geneaological Tree Component",
  ],
};
const availability = { header: 'Availability:', elements: ['Immediately'] };
const education = {
  header: 'Education',

  elements: [
    ['AGH University of Science and Technology'],
    ['Automatyka I Robotyka', '2019-2021', 'Resignation due to a change of interests'],
    ['Inżynieria Obliczeniowa', '2020- present', ''],
  ],
};

const React = { skillName: 'React', icon: <DiReact color={'#00bcd4'} /> };
const wellKnownSkills = [
  { skillName: 'HTML', icon: <IoLogoHtml5 color={'red'} /> },
  { skillName: 'Css', icon: <IoLogoCss3 color={'#2b58b6'} /> },
  { skillName: 'Javascript', icon: <IoLogoJavascript color={'yellow'} /> },
  { skillName: 'Styled Components', icon: <SiStyledcomponents color={'#d0c019'} /> },
];
const softwareSkills = [...wellKnownSkills, React];

const otherITSkills = [
  { skillName: 'Linux terminal', icon: <DiUbuntu color={'#dd4814'} /> },
  { skillName: 'Git', icon: <BsGithub color={'#222'} /> },
  { skillName: 'RWD', icon: <BsPhone color={'#222'} /> },
];

const languages = [
  { skillName: 'Polish C2', icon: <Flags.PL width={20} /> },
  { skillName: 'English B2', icon: <Flags.GB width={20} /> },
];
const otherLangauageDetails = [
  { skillName: 'Python', icon: <DiPython color={'#4B8BBE'} /> },
  { skillName: 'Java', icon: <DiJava color={'#f89820 '} /> },
  { skillName: 'Firebase', icon: <SiFirebase color={'orange '} /> },
  { skillName: 'SQL', icon: <DiDatabase color={'lightgray '} /> },
];
const familiarDetails = [
  { skillName: 'D3.js', icon: <AiOutlineBarChart color={'#4B8BBE'} /> },
  {
    skillName: 'React Bootstrap',
    icon: (
      <>
        <BsFillBootstrapFill color={'0275d8 '} /> <DiReact color={'#00bcd4'} />
      </>
    ),
  },
];

export const detailsElements = [
  wellKnownSkills,
  [...[React, ...otherITSkills], ...otherLangauageDetails],
  familiarDetails,
];
export const detailsHeaders = [
  { header: 'Well Known', description: `Stuff have I worked many times and  usually solve problems quickly` },
  {
    header: 'Other',
    description: 'Stuff I have worked on several times<br/>but can use rather freely with internet access ',
  },
  { header: 'Currently Learning', description: 'Stuff I have still learning and trying to use in my current projects' },
];
export const skillsElements = [
  { header: 'Software Skills', skills: softwareSkills },
  { header: 'Other IT Skills', skills: otherITSkills },
  { header: 'Languages', skills: languages },
];

export const introHeaders = ['Introduction', 'Education'];
export const personalData = [
  { header: 'Contact', elements: ['pawel.oleniak00@wp.pl', 739669792] },
  { header: 'Adress', elements: ['Witolda Budryka 1,30-072 Kraków'] },
  { header: 'Date of Birth', elements: ['14.01.2000'] },
];
export const introSection = { Me, introduction, availability, education };
