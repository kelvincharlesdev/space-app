import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";



const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
    width: 566px;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    &:focus {
        outline: none;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

interface CampoTextoProps extends InputHTMLAttributes<HTMLInputElement>{
    img: string
}

export const CampoTexto = ({img}: CampoTextoProps) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado placeholder="O que você procura?" />
      <IconeLupa src={img} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
};


