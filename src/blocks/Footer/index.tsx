import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <p
        style={{
          color: "white",paddingLeft: '1.93rem'
        }}
      >
        Todos os Direitos Reservados 2023 &copy;
      </p>
      <p style={{ color: "white", paddingLeft: '3.125rem' }}>
        Feito com <span style={{color: 'red'}}>♡</span> <span style={{textDecoration: 'underline'}}> Guilherme Oliveira </span>
      </p>
      <p style={{ color: "black", textDecoration: 'underline', paddingLeft: '12.25rem' }}>Diga Olá</p>
    </S.FooterContainer>
  );
};

export default Footer;
