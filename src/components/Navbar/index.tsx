import React from "react";
import { NavbarContainer } from "./styles";
import Logo from "../../assets/images/LOGO.png";
import Image from "next/image";
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div className="logo">{/* <Image alt='Logo-img' src={Logo} /> */}</div>
      <div className="links">
        <ul>
          <a href="#PresentationContainer">
            <li>INICIO</li>
          </a>
          <a href="#AboutContainer">
            <li>SOBRE MIM</li>
          </a>
          <a href="#ServicesContainer">
            <li>SERVICOS</li>
          </a>
          <a href="#TechContainer">
            <li>TECNOLOGIAS</li>
          </a>
          <a href="#ProjectsContainer">
            <li>PROJETOS</li>
          </a>
          <a target="_blank" href="">
            <li>CURRÍCULO</li>
          </a>
        </ul>
      </div>
      <div className="button">
        <button
          onClick={() => {
            window.open(
              "https://wa.me/5534997674564?text=Acabei%20de%20visitar%20seu%20portf%C3%B3lio%20e%20queria%20conhec%C3%AA-lo%20melhor.",
              "_blank"
            );
          }}
        >
          VAMOS CONVERSAR?
        </button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
