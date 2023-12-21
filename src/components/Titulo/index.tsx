import styled from "styled-components";

interface TituloStyledProps {
  $alinhamento: string;
}

interface TituloProps {
  $alinhamento?: string;
  children: React.ReactNode;
}
const TituloEstilizado = styled.h2<TituloStyledProps>`
  color: #7b78e5;
  font-size: 32px;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
`;

export const Titulo = ({children, $alinhamento }: TituloProps) => {
  return (
    <TituloEstilizado $alinhamento={$alinhamento!}>{children}</TituloEstilizado>
  );
};
