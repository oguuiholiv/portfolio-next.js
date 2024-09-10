import styled from "styled-components";

export const ContactContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 95.32vh;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cta {
      padding-top: 4.875rem;
      text-align: center;
      .title {
        font-size: 1.875rem;
      }
      .subtitle {
        font-size: 1.25rem;
        font-family: "Ubuntu", sans-serif;
        letter-spacing: 0.125rem;
        //TODO verificar espaçamento do subtitle
      }
    }
    .form-control {
      padding-top: 3.4375rem;
    }
    .form-control form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625rem;

      .textarea-form {
        border: none;
        padding: 0.5rem;
        border-radius: 0.3125rem;
        border: 1px solid transparent;
        border-image: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        border-image-slice: 1;
        width: 32.94vw;
      }

      .input-form {
        width: 32.94vw;
        height: 6.51vh;
        border-radius: 0.3125rem;
        border: 1px solid transparent;
        border-image: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        border-image-slice: 1;
        padding: 0.5rem;
        // TODO bordas redondas
      }
      .submit-form {
        width: 14.64vw;
        height: 6.51vh;
        border: none;
        border-radius: 0.3125rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        background: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1023px){
    width: 100vw;
    height: auto;
    padding-bottom: 1rem;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cta {
      padding-top: 4.875rem;
      text-align: center;
      .title {
        font-size: 1.875rem;
      }
      .subtitle {
        font-size: 1.25rem;
        font-family: "Ubuntu", sans-serif;
        letter-spacing: 0.125rem;
        //TODO verificar espaçamento do subtitle
      }
    }
    .form-control {
      padding-top: 3.4375rem;
    }
    .form-control form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625rem;

      .textarea-form {
        border: none;
        padding: 0.5rem;
        border-radius: 0.3125rem;
        border: 1px solid transparent;
        border-image: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        border-image-slice: 1;
        width: 60vw;
      }

      .input-form {
        width: 60vw;
        height: 6.51vh;
        border-radius: 0.3125rem;
        border: 1px solid transparent;
        border-image: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        border-image-slice: 1;
        padding: 0.5rem;
        // TODO bordas redondas
      }
      .submit-form {
        width: 40vw;
        height: 6.51vh;
        border: none;
        border-radius: 0.3125rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        background: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
      }
    }
  }
  @media screen and (max-width: 768px){
    width: 100vw;
    height: auto;
    padding-bottom: 1rem;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cta {
      padding-top: 4.875rem;
      text-align: center;
      .title {
        font-size: 1.875rem;
      }
      .subtitle {
        font-size: 1.25rem;
        font-family: "Ubuntu", sans-serif;
        letter-spacing: 0.125rem;
        //TODO verificar espaçamento do subtitle
      }
    }
    .form-control {
      padding-top: 3.4375rem;
    }
    .form-control form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625rem;

      .textarea-form {
        border: none;
        padding: 0.5rem;
        border-radius: 0.3125rem;
        border: 1px solid transparent;
        border-image: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        border-image-slice: 1;
        width: 75vw;
      }

      .input-form {
        width: 75vw;
        height: 6.51vh;
        border-radius: 0.3125rem;
        border: 1px solid transparent;
        border-image: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        border-image-slice: 1;
        padding: 0.5rem;
        // TODO bordas redondas
      }
      .submit-form {
        width: 40vw;
        height: 6.51vh;
        border: none;
        border-radius: 0.3125rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        background: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
      }
    }
  }
`;
