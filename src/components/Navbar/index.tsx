import React from 'react';
import { NavbarContainer } from './styles';
import Logo from '../../assets/images/LOGO.png'
import Image from 'next/image';
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
  <NavbarContainer>
    <div className="logo">
        <Image alt='Logo-img' src={Logo} />
    </div>
    <div className="links">
        <ul>
            <a href="#">
                <li>INICIO</li>
            </a>
            <a href="#">
                <li>SOBRE MIM</li>
            </a>
            <a href="#">
                <li>SERVICOS</li>
            </a>
            <a href="#">
                <li>TECNOLOGIAS</li>
            </a>
            <a href="#">
                <li>PROJETOS</li>
            </a>
            <a target='_blank' href="https://drive.google.com/file/d/1b7LDv74ADtb2kwTVTo59_5eFFsuxNobL/view?usp=sharing">
                <li>CURRÍCULO</li>
            </a>
        </ul>
    </div>
    <div className="button">
        <button>VAMOS CONVERSAR?</button>
    </div>
  </NavbarContainer>)
}

export default Navbar;