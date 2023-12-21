import styled from "styled-components";
import { Titulo } from "../Titulo";
import { Populares } from "./Populares/Populares";
import { Tags } from "./Tags";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`
export const Galeria = () => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo> Navegue pela Galeria</Titulo>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
