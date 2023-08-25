import React from 'react';
import * as S from './styles'

// import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
    <S.PresentationContainer>
        <div className="content-text">
            <p className='hello'>Olá, meu nome é</p>
            <p className="name">Guilherme Oliveira</p>
            <p className="stack">desenvolvedor <span className="colored">full stack</span></p>
        </div>
        <div className="content-model">
            <div className="content"></div>
        </div>
    </S.PresentationContainer>
  );
}

export default Presentation;