import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';
import { DiUbuntu, DiReact, DiPython, DiJava } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsGithub, BsFillBootstrapFill, BsPhone } from 'react-icons/bs';
import Flags from 'country-flag-icons/react/3x2';

const Me = 'Paweł Oleniak';
const introduction = ['Profile', ''];
const education = ['Education', 'AGH University of Science and Technology', '2020- present'];

const React = ['React', <DiReact color={'#00bcd4'} />];
const wellKnownSkills = [
  ['HTML', <IoLogoHtml5 color={'red'} />],
  ['Css', <IoLogoCss3 color={'#2b58b6'} />],
  ['Javascript', <IoLogoJavascript color={'yellow'} />],
  ['Styled Components', <SiStyledcomponents color={'#d0c019'} />],
];
const SoftwareSkills = [...wellKnownSkills, React];

const otherITSkills = [
  ['Linux terminal', <DiUbuntu color={'#dd4814'} />],
  ['Git', <BsGithub color={'#222'} />],
  ['RWD', <BsPhone size={40} color={'#222'} />],
];

const languages = [
  ['Polish C2', <Flags.PL width={20} />],
  ['English B2', <Flags.GB width={20} />],
];
const otherLangauageDetails = [
  ['Python', <DiPython color={'#4B8BBE'} />],
  ['Java', <DiJava color={'#f89820 '} />],
];
const familiarDetails = [
  ['D3.js', <AiOutlineBarChart color={'#4B8BBE'} />],
  [
    'React Bootstrap',
    <>
      <BsFillBootstrapFill size={30} color={'0275d8 '} /> <DiReact size={30} color={'#00bcd4'} />
    </>,
  ],
];

export const detailsElements = [
  wellKnownSkills,
  [...[React, ...otherITSkills], ...otherLangauageDetails],
  familiarDetails,
];
export const detailsHeaders = [
  ['Well Known', `Stuff have I worked many times and  usually solve problems quickly`],
  ['Other', 'Stuff I have worked on several times<br/>but can use rather freely with internet access '],
  ['Currently Learning', 'Stuff I have still learning and trying to use in my current projects'],
];
export const skillsElements = [
  ['Software Skills', SoftwareSkills],
  ['Other IT Skills', otherITSkills],
  ['Languages', languages],
];

export const introHeaders = ['Introduction', 'Education'];
export const personalData = [
  ['Contact', 'pawel.oleniak00@wp.pl', '739669792'],
  ['Adress', 'Witolda Budryka 1,30-072 Kraków'],
  ['Date of Birth', '14.01.2000'],
];
export const introSection = [Me, introduction, education];
