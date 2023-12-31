import styled from "styled-components"
import Background1 from "../../assets/Background1.svg"

export const Container = styled.div`
    background: url("${Background1}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
    overflow: hidden;
`;
export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157.44deg, 
        rgba(255, 255, 255, 0.60) 0.84%,
        rgba(255, 255, 255, 0.60) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 22px; 
    margin-left: 25px;
    letter-spacing: -0.408px;
`;
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;
    
    border: none;
    outline: none;
    
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    
    color: #FFF;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 140px;
    
    
    background: rgba(46, 50, 90, 0.80);
    border-radius: 14px;
    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: #FFF;
    
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    &:hover{

        opacity: 0.8;

    }

    &:active{
        opacity: 0.5;
        background-color: pink;
    }
    
`;




