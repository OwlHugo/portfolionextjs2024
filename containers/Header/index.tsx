'use client'
import React, { useState } from "react";
import { FaHome, FaProjectDiagram,FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";


import Link from "next/link";

const Header = () => {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredProjects, setIsHoveredProjects] = useState(false);
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);
  const [isHoveredGitHub, setIsHoveredGitHub] = useState(false);
  const [isHoveredWhatsapp, setIsHoveredWhatsapp] = useState(false);

  const navigationLinks = [
    { icon: <FaHome className="text-white" size={20}/>, label: "Início", path: "/", isHovered: isHoveredHome, setIsHovered: setIsHoveredHome },
    { icon: <FaProjectDiagram className="text-white" size={20}/>, label: "Projetos", path: "/projetos", isHovered: isHoveredProjects, setIsHovered: setIsHoveredProjects },

  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/hugo-adriano-de-oliveira-07b46321b/", icon: <FaLinkedin color="#2867B2" size={25}/>, label: "LinkedIn", isHovered: isHoveredLinkedIn, setIsHovered: setIsHoveredLinkedIn },
    { href: "https://github.com/HugoOwl", icon: <FaGithub color="#211F1F" size={25}/>, label: "GitHub", isHovered: isHoveredGitHub, setIsHovered: setIsHoveredGitHub },
    { href: "https://api.whatsapp.com/send?phone=5566996932147&text=Ol%C3%A1,%20te%20encontrei%20pelo%20seu%20site!", icon: <FaWhatsapp color="#25D366" size={25}/>, label: "Whatsapp", isHovered: isHoveredWhatsapp, setIsHovered: setIsHoveredWhatsapp },
  ];

  const backgroundColor = "#0D314B";
  const hoverColor = "#072238";

  const handleMouseEnter = (setIsHovered) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (setIsHovered) => {
    setIsHovered(false);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:mt-3">
      <div className="flex flex-wrap items-center space-x-4 mb-2 md:mb-0 md:space-x-6">
        {navigationLinks.map(({ icon, label, path, isHovered, setIsHovered }, index) => (
          <Link href={path} key={index}>
            <button
              className="rounded-lg p-2 md:p-4 flex items-center"
              style={{
                backgroundColor: isHovered ? hoverColor : backgroundColor,
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => handleMouseEnter(setIsHovered)}
              onMouseLeave={() => handleMouseLeave(setIsHovered)}
            >
              {icon}
              <span className="ml-2 text-white font-semibold">{label}</span>
            </button>
          </Link>
        ))}
      </div>
      <div className="flex space-x-4">
        {socialLinks.map(({ href, icon, label, isHovered, setIsHovered }, index) => (
          <a href={href} target="_blank" rel="noopener noreferrer" key={index}>
            <button
              className="rounded-lg p-2 md:p-4 flex items-center justify-center"
              style={{
                backgroundColor: isHovered ? hoverColor : backgroundColor,
                height: "100%",
                minWidth: "50px", 
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => handleMouseEnter(setIsHovered)}
              onMouseLeave={() => handleMouseLeave(setIsHovered)}
            >
              {icon}
              <span className="md:inline ml-2 text-sm text-white font-semibold">{label}</span>
            </button>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
