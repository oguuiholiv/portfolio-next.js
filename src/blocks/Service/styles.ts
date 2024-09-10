import styled from "styled-components";

export const ServicesContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 85vh;
    background: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 3rem;

    .title {
      padding-left: 15rem;
    }
    .code {
      background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.875rem;

      span {
        font-size: 3.4375rem;
        font-weight: bold;
        padding-left: 3rem;
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .cards {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      gap: 0.9375rem;
      text-align: center;

      .card {
        width: 23.06vw;
        height: 50vh;
        background: rgba(8, 8, 10, 0.8);
        border-radius: 0.9375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: white;
        font-family: "Orbitron", sans-serif;
        text-align: center;

        .title-card {
          text-transform: capitalize;
          font-size: 1.5625rem;
        }
        .content {
          display: flex;
          width: 20vw;
          height: 13vh;
          font-size: 0.9375rem;
          text-align: center;
        }
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100vw;
    height: auto;
    background: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      padding-top: 3.1875rem;
    }
    .code {
      background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.875rem;
      span {
        padding-left: 2.72875rem;
        font-size: 2.1875rem;
        font-weight: bold;
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .cards {
      width: 100%;
      height: 100%;
      padding-top: 2.1875rem;
      padding-bottom: 2.1875rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.9375rem;
      text-align: center;

      .card {
        width: 80vw;
        height: 35vh;
        background: rgba(8, 8, 10, 0.8);
        border-radius: 0.9375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: "Orbitron", sans-serif;
        text-align: center;

        .title-card {
          text-transform: capitalize;
          font-size: 1.5625rem;
          padding-top: 0.5rem;
          padding-bottom: 2.9375rem;
          text-align: center;
        }
        .content {
          width: 65vw;
          text-align: center;
          font-size: 0.9375rem;
          padding-top: 1.4375rem;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
    background: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      padding-top: 3.1875rem;
    }
    .code {
      background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.875rem;
      span {
        padding-left: 2.72875rem;
        font-size: 2.1875rem;
        font-weight: bold;
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .cards {
      width: 100%;
      height: 100%;
      padding-top: 2.1875rem;
      padding-bottom: 2.1875rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.9375rem;
      text-align: center;

      .card {
        width: 80vw;
        height: 35vh;
        background: rgba(8, 8, 10, 0.8);
        border-radius: 0.9375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: "Orbitron", sans-serif;
        text-align: center;

        .title-card {
          text-transform: capitalize;
          font-size: 1.5625rem;
          padding-top: 0.5rem;
          padding-bottom: 2.9375rem;
          text-align: center;
        }
        .content {
          width: 65vw;
          text-align: center;
          font-size: 0.9375rem;
          padding-top: 1.4375rem;
        }
      }
    }
  }
`;
