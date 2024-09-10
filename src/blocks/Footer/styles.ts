import styled from "styled-components";

export const FooterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 20.31vh;
    background: linear-gradient(
        140deg,
        rgba(8, 8, 10, 0.64) 0%,
        rgba(8, 8, 10, 0.3) 100%
      ),
      linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.125rem;
    font-family: "Orbitron", sans-serif;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100vw;
    height: 18vh;
    background: linear-gradient(
        140deg,
        rgba(8, 8, 10, 0.64) 0%,
        rgba(8, 8, 10, 0.3) 100%
      ),
      linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.125rem;
    font-family: "Orbitron", sans-serif;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 18vh;
    background: linear-gradient(
        140deg,
        rgba(8, 8, 10, 0.64) 0%,
        rgba(8, 8, 10, 0.3) 100%
      ),
      linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.125rem;
    font-family: "Orbitron", sans-serif;
  }
`;
