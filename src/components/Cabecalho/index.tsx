import { styled } from "styled-components";
import { CampoTexto } from "../CampoTexto";
import search from "../../assets/search.png"


const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;



export const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="public/imagens/logo.png" alt="Imagem da Logo" />

     <CampoTexto img={search}/>
    </HeaderEstilizado>
  );
};
