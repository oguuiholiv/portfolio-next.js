import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  @media screen and (min-width: 1024px){
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        padding-top: 1.875rem;
        text-transform: uppercase;
        .colored{
            background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        }

        
    }
  }
`;
