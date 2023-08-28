import React from 'react';
import * as S from './styles'


const Projects: React.FC = () => {
  return (
    <S.ProjectsContainer>
        <div className="title">
            <h1>Conheça meus <span className='colored'>trabalhos</span></h1>
        </div>

        <div className="carrousel">
            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    </S.ProjectsContainer>
  )
}

export default Projects;