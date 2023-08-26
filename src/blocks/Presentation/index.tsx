import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Mail from "../../assets/icons/mail.png";

const Presentation: React.FC = () => {
  return (
    <S.PresentationContainer>
      <div className="content-text">
        <p className="hello">Olá, meu nome é</p>
        <p className="name">Guilherme Oliveira</p>
        <p className="stack">
          desenvolvedor <span className="colored">full stack</span>
        </p>
        <div className="icons">
          <a target="_blank" href="https://github.com/oguuiholiv">
            <Image alt="github" src={Github} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/oguuiholiv/">
            <Image alt="linkedin" src={Linkedin} />
          </a>
          <a target="_blank" href="mailto:francoguilherme.sec@gmail.com">
            <Image alt="mail" src={Mail} />
          </a>
        </div>
      </div>
      <div className="content-model">
        <div className="content"></div>
      </div>
    </S.PresentationContainer>
  );
};

export default Presentation;
