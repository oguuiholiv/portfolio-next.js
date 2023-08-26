import styled from 'styled-components';

export const PresentationContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Orbitron&family=Ubuntu&family=Wavefont:wght@200&display=swap');
  @media screen and (min-width: 1024px){
    
  width: 90vw;
  height: 80vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Orbitron', sans-serif;
  .content-text{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    font-size: 0.65rem;
    .icons{
      display: flex;
      gap: 1.25rem;
      padding-top: 1.0625rem;
    }
    .hello{
        font-size: 1.5625rem;
    }
    .name{
        font-size: 4.0625rem;
        font-family: 'Ubuntu', sans-serif;
        background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    .stack{
        font-size: 1.6875rem;

        .colored{
            background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

    }
  }
  
  .content-model{
    width: 50%;

    .content{
        margin-top: 9.125rem;
        width: 43.92vw;
        height: 52.08vh;
        background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    }
  }
  }
`;
