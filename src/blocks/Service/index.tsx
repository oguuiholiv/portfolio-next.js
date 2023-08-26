import React from "react";
import * as S from "./styles";
import Image from "next/image";

/* Import de imagens */
import Motion from "../../assets/icons/motion.png";
import Dev from "../../assets/icons/dev.png";
import Seo from "../../assets/icons/seo.png";
import Des from "../../assets/icons/designer.png";

import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const RotatingImage = styled(Image)`
   animation: ${rotate} 3s linear infinite;
`;



const Service: React.FC = () => {
  return (
    <S.ServicesContainer>
      <div className="title">
        <code className="code">
          &lt; h1 &gt;
          <br />
          <span>Meus serviços</span>
          <br />
          &lt;/h1&gt;
        </code>
      </div>
      <div className="cards">
        <div className="card">
          <RotatingImage
            alt="img-card"
            src={Motion}
            style={{ marginTop: "2.0625rem"}}
          />
          <p
            className="title-card"
            style={{ maxWidth: "6.58vw", maxHeight: "4.03vh" }}
          >
            Motion
          </p>
          <p
            className="content"
            style={{ maxWidth: "18.30vw", maxHeight: "9.11vh" }}
          >
            Crio designs visualmente impressionantes que se conectam com seu
            público.
          </p>
        </div>
        <div className="card">
          <RotatingImage alt="img-card" src={Dev} style={{ marginTop: "2.0625rem" }} />
          <p
            className="title-card"
            style={{ maxWidth: "17.86vw", maxHeight: "4.03vh" }}
          >
            Desenvolvimento
          </p>
          <p
            className="content"
            style={{ maxWidth: "18.30vw", maxHeight: "9.11vh" }}
          >
            Dando vida à sua visão com as últimas tendências em tecnologia e
            design.
          </p>
        </div>
        <div className="card">
          <RotatingImage alt="img-card" src={Seo} style={{ marginTop: "2.0625rem" }} />
          <p
            className="title-card"
            style={{
              textTransform: "uppercase",
              maxWidth: "4.39vw",
              maxHeight: "4.03vh",
            }}
          >
            SEO
          </p>
          <p
            className="content"
            style={{ maxWidth: "18.30vw", maxHeight: "12.36vh" }}
          >
            Otimizo a visibilidade do seu site nos mecanismos de busca! Com
            técnicas de SEO, aumentaremos a presença online do seu negócio.
          </p>
        </div>
        <div className="card">
          <RotatingImage alt="img-card" src={Des} style={{ marginTop: "2.0625rem" }} />
          <p
            className="title-card"
            style={{ maxWidth: "11.78vw", maxHeight: "8.07vh" }}
          >
            Designer <span style={{ textTransform: "lowercase" }}> e </span>{" "}
            criatividade
          </p>
          <p
            className="content"
            style={{ maxWidth: "18.30vw", maxHeight: "9.11vh" }}
          >
            Transformo ideias em experiências excepcionais de aplicativos móveis
            e da Web.
          </p>
        </div>
      </div>
    </S.ServicesContainer>
  );
};

export default Service;
