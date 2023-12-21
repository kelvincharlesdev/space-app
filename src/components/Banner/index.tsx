import styled from "styled-components";

const FigureEstilizado = styled.div<FigureProps>`
   background-image: ${props => `url(${props.$backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 328px;
  border-radius: 20px;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
 


`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

interface BannerProps {
  texto: string,
  backgroundImage: string
}

interface FigureProps {
  $backgroundImage: string;
}

export const Banner = ({backgroundImage, texto} : BannerProps) => {
  return (
    <FigureEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizado>
  );
};


