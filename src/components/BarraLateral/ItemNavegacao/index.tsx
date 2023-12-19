import React from "react";
import styled from "styled-components";

interface ItemNavegacaoProps {
  children: React.ReactNode;
  iconeAtivo: string;
  iconeInativo: string;
  ativo: boolean;
}

interface ItemListaEstilizadoProps {
    $ativo: boolean; 
  }

const ItemListaEstilizado = styled.li <ItemListaEstilizadoProps>`
    font-size:  24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color:${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};;
    display: flex;
    align-items: center;
    gap: 22px;
    `


export const ItemNavegacao = ({
  ativo,
  children,
  iconeAtivo,
  iconeInativo,
}: ItemNavegacaoProps) => {
  return (
  <ItemListaEstilizado $ativo={ativo}>
  <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
  {children}
  </ItemListaEstilizado>
  );
};
