import React from 'react';
import * as S from './styles'

const About: React.FC = () => {
  return (
    <S.AboutContainer id="AboutContainer">
        <h1 className="title">Sobre mim</h1>
        <p className="content">Olá, eu sou Guilherme Oliveira, um mestre na linguagem das máquinas e um artista nas cordas de uma guitarra. O meu código é uma expressão da minha criatividade, e minhas músicas são uma extensão da minha alma. Como um desenvolvedor full stack, combino o rigor técnico com a paixão artística para criar experiências únicas. Se você deseja um parceiro que transforma ideias em realidade, estou aqui para fazer isso acontecer.</p>
    </S.AboutContainer>
  )
}

export default About;