import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <p
        style={{
          color: "white",
          paddingLeft: "1.93rem",
        }}
      >
        Todos os Direitos Reservados 2023 &copy;
      </p>
      <p style={{ color: "white", paddingLeft: "3.125rem" }}>
        Feito com <span style={{ color: "red" }}>♡</span>{" "}
        <span style={{ textDecoration: "underline" }}> Guilherme Franco </span>
      </p>
      <p
        style={{
          color: "black",
          textDecoration: "underline",
          paddingLeft: "calc((100vw - 1023px) / 2)",
        }}
      >
        Diga Olá
      </p>
    </S.FooterContainer>
  );
};

export default Footer;
