import styled from "styled-components"
import { ItemNavegacao } from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`

export const BarraLateral = () => {
    return (
        <aside>
            <ListaEstilizada>
                <ItemNavegacao
                    iconeAtivo="/icones/home-ativo.png"
                    iconeInativo="/icones/home-inativo.png"
                    ativo={true}
                >
                    Inicio
                </ItemNavegacao>

                <ItemNavegacao
                    iconeAtivo="/icones/mais-vistas-ativo.png"
                    iconeInativo="/icones/mais-vistas-inativo.png"
                    ativo={false}
                >
                    Mais vistas
                </ItemNavegacao>
            </ListaEstilizada>
        </aside>
    )
}