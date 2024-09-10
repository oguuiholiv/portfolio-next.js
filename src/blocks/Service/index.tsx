import React from "react";
import * as S from "./styles";
import Image from "next/image";

/* Import de imagens */
import Motion from "../../assets/icons/motion.png";
import Dev from "../../assets/icons/dev.png";
import Seo from "../../assets/icons/seo.png";
import Des from "../../assets/icons/designer.png";

import styled, { keyframes } from "styled-components";
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
    <S.ServicesContainer id="ServicesContainer">
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
          />
          <p
            className="title-card"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
          >
            Motion
          </p>
          <p
            className="content"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
          >
            Crio designs visualmente impressionantes que se conectam com seu
            público.
          </p>
        </div>
        <div className="card">
          <RotatingImage
            alt="img-card"
            src={Dev}
          />
          <p
            className="title-card"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
          >
            Desenvolvimento
          </p>
          <p
            className="content"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
          >
            Dando vida à sua visão com as últimas tendências em tecnologia e
            design.
          </p>
        </div>
        <div className="card">
          <RotatingImage
            alt="img-card"
            src={Seo}
          />
          <p
            className="title-card"
            style={{
              textTransform: "uppercase",
              maxWidth: "auto",
              maxHeight: "auto",
            }}
          >
            SEO
          </p>
          <p
            className="content"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
          >
            Otimizo a visibilidade do seu site nos mecanismos de busca! Com
            técnicas de SEO, aumentaremos a presença online do seu negócio.
          </p>
        </div>
        <div className="card">
          <RotatingImage
            alt="img-card"
            src={Des}
          />
          <p
            className="title-card"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
          >
            Designer
          </p>
          <p
            className="content"
            style={{ maxWidth: "auto", maxHeight: "auto" }}
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
