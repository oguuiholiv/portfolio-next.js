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

    .carrousel {
      width: 100%;
      max-width: 1200px;
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
      padding: 20px;
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
      font-size: 1rem;
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
  }
`;
