import { styled } from "styled-components";
import { CampoTexto } from "../CampoTexto";
import search from "../../assets/search.png"


const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 212px;
  }
`;



export const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Imagem da Logo" />

     <CampoTexto img={search}/>
    </HeaderEstilizado>
  );
};
