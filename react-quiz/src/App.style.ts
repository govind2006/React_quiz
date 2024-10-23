import styled,{createGlobalStyle} from "styled-components";

import BGimage from './images/ramjii.jpeg';

export const GlobalStyle = createGlobalStyle`
html{
height:100%;
}

body{
background-image: url(${BGimage});
  background-size: cover; /* Ensures the image covers the entire screen */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  height: 100vh; /* Ensures the body takes up the full viewport height */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center; 
}
*{
box-sizing:border-box;
font-family:'Catamaran',sans-serif;
}
`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    >p{
    color:#fff;
    
    }

    .scroe{
    color:#fff;
    font-size:2rem;
    margin:0;
    }

    h1{
    font-family: Fascinate Inline,Haettenschweiler,'Arial Narrow Bold', sans-serif;
    background-image:linear-graident(180deg,#fff,#87f1ff);
    background-size:100%;
    background-clip:text;

    --webkit-background-clip:text;

    --webkit-text-fill-color:transparent;
    --moz-background-clip:text;
    --moz-text-fill-color:transparent;

    filter:drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight:400;

    text-align:center;
    margin:20px;
    }

    .start,.next,.score{
    cursor:pointer;
    background:linear-gradient(180deg,$fff,#ffcc91);
    border:2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius:10px;
    height:40px;
    margin:20px;
    padding:0 40px;
    }

    .score{
    background-color:black;
    
    }


    .start{
    max-width:200px;
    
    }



`;