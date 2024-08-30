import styled from "styled-components";

export const ProjectsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      padding-top: 1.875rem;
      text-transform: uppercase;
      .colored {
        background: linear-gradient(
          -225deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .carrousel {
      width: 100%;
      padding: 20px;
      z-index: 0;
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-wrapper {
      display: flex;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 4rem;
      box-sizing: border-box;
    }

    .slide-content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .slide-image {
      flex: 0 0 40%;
      max-width: 40%;
      padding-right: 20px;
    }

    .slide-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .slide-text {
      flex: 1;
    }

    .slide-text h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .slide-text p {
      font-size: 0.8rem;
      color: #666;
      margin-bottom: 10px;
    }
    .repo-button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 1rem;
      color: #fff;
      background-color: #007bff;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
    .site-button {
      display: inline-block;
      padding: 10px 20px;
      margin-left: 10px;
      font-size: 1rem;
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;
      background-color: #28a745;

      &:hover {
        background-color: #218838;
      }
    }

    .swiper-button-prev {
    }

    .swiper-button-next {
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
    }
    .stacks {
      display: flex;
      flex-wrap: wrap; /* Permite que os badges quebrem para a próxima linha */
      gap: 5px; /* Espaçamento entre os badges */
      margin-bottom: 10px; /* Espaçamento entre as badges e os botões */
    }

    .badge {
      display: inline-block;
      background: linear-gradient(
        -225deg,
        rgba(35, 21, 87, 0.8) 0%,
        rgba(68, 16, 122, 0.8) 29%,
        rgba(255, 19, 97, 0.8) 67%,
        rgba(255, 248, 0, 0.8) 100%
      );
      color: #fff; /* Cor do texto */
      padding: 5px 10px;
      margin: 5px 0; /* Margem vertical para espaçamento entre as linhas de badges */
      border-radius: 20px; /* Bordas arredondadas */
      font-size: 12px;
      font-weight: bold; /* Texto em negrito */
      text-transform: uppercase; /* Transformar o texto em maiúsculas */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar destaque */
      white-space: normal; /* Permite que o texto quebre em várias linhas */
      word-wrap: break-word; /* Quebra palavras longas para caber na badge */
      max-width: 100%; /* Garante que a largura da badge não ultrapasse o container */
      text-align: center; /* Centraliza o texto dentro da badge */
    }
  }
`;
