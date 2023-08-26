import styled from 'styled-components';

export const ServicesContainer = styled.div`
@media screen and (min-width: 1024px){
    width: 100vw;
    height: 85vh;
    background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 3rem;

    .title{
        padding-left: 15rem;
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
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        gap: 0.9375rem;

        .card{
            width: 23.06vw ;
            height: 44.06vh;
            background: rgba(8, 8, 10, 0.80); 
            border-radius: 0.9375rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            font-family: 'Orbitron', sans-serif;



            .title-card {
                text-transform: capitalize;
                font-size: 1.5625rem;
                padding-top: 0.5rem;
                padding-bottom: 2.9375rem;
            }
            .content{
                font-size: 0.9375rem;
                text-align: center;
                padding-top: 2.375rem;

            }
        }
    }
}
@media screen and (min-width: 769px) and (max-width: 1023px){
    width: 100vw;
    height: 80vh;
    background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    padding-left: 15rem;
    padding-top: 5.6875rem;
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
}
@media screen and (max-width: 768px){
    width: 100vw;
    height: 80vh;
    background: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    padding-left: 15rem;
    padding-top: 5.6875rem;
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
}
  
`;
