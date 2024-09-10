import styled from 'styled-components';
import Image from 'next/image';

export const TechContainer = styled.div`
  
  @media screen and (min-width: 1024px){
    width: 100vw;
    height: 110.16vh;
    background: linear-gradient(140deg, rgba(8, 8, 10, 0.64) 0%, rgba(8, 8, 10, 0.30) 100%), linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);  
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 3rem;


    .title{
        padding-left: 15rem;
        margin-top: 3.1875rem;
    }
    .code{
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.875rem;

        span{
            font-size: 3.4375rem;
            font-weight: bold;
            padding-left: 3rem;
            background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .cards{
      width: 32.94vw;
      height: 61.19vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      margin-right: auto;

      .card-line{
        display: flex;
        gap: 0.625rem;
        margin-top: 0.625rem;
        
        .card-item{
          width: 5.85vw;
          height: 10.41vh;
          border-radius: 0.3125rem;
          background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    
  }
  @media screen and (min-width: 769px) and (max-width: 1023px){
    width: 100vw;
    height: auto;
    background: linear-gradient(140deg, rgba(8, 8, 10, 0.64) 0%, rgba(8, 8, 10, 0.30) 100%), linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);  
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 3rem;


    .title{
        padding-left: 15rem;
        margin-top: 3.1875rem;
    }
    .code{
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.875rem;

        span{
            font-size: 3.4375rem;
            font-weight: bold;
            padding-left: 3rem;
            background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .cards{
      width: 85vw;
      height: 61.19vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      
      .card-line{
        display: flex;
        gap: 0.625rem;
        margin-top: 0.625rem;
        
        .card-item{
          width: 15vw;
          height: 10vh;
          border-radius: 0.3125rem;
          background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    
  }
  @media screen and (max-width: 768px){
    width: 100vw;
    height: auto;
    background: linear-gradient(140deg, rgba(8, 8, 10, 0.64) 0%, rgba(8, 8, 10, 0.30) 100%), linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);  
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 3rem;


    .title{
        padding-left: 1.93rem;
        margin-top: 3.1875rem;
    }
    .code{
        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.875rem;

        span{
            font-size: 2.5rem;
            font-weight: bold;
            padding-left: 3rem;
            background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .cards{
      width: 85vw;
      height: 61.19vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      
      .card-line{
        display: flex;
        gap: 0.625rem;
        margin-top: 0.625rem;
        
        .card-item{
          width: 16vw;
          height: 8vh;
          border-radius: 0.3125rem;
          background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: cover;
        }
      }
    }
    
  }
`;
