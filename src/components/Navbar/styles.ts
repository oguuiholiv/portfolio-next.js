import styled from 'styled-components';
export const NavbarContainer = styled.div`
  @media screen and (min-width: 1024px) {
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Orbitron&family=Ubuntu&family=Wavefont:wght@200&display=swap');
    width: 100vw;
    height: 15vh;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 1;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.45); 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: 'Orbitron';
    font-weight: 600;
    font-style: normal;

    .logo{
        width: 10%;
    }
    .logo image{
        width: 85%;
    }
    .links{
        width: 65%;
        display: flex;
        justify-content: end;
    }
    .links ul{
        display: flex;
        gap: 1rem;
    }
    .links ul li{
        font-size: 0.75rem;
        list-style: none;
    }
    .button{
        width: 20%;
    }
    .button button{
        width: 18vw;
        height: 8vh;
        color: white;
        text-transform: uppercase;
        font-family: 'Orbitron', sans-serif;
        font-size: 1.0625rem;
        font-weight: 900;
        border-radius: 5px; 
        border: none;
        box-shadow: 6px 7px 6px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
        background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    }
  }
`;
