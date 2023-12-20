import styled from "styled-components";
import Banner from "../../assets/banner.png"

const BannerEstilizado = styled.div`
  background-image: url(${Banner});
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

export const FigureEstilizado = () => {
  return (
    <BannerEstilizado>
      <TituloEstilizado>A galeria mais completa de fotos do espaço!</TituloEstilizado>
    </BannerEstilizado>
  );
};
