import styled from 'styled-components'

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  display: flex;
  justify-content: center;
  min-width: 120px;
  font-size: 16px;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader () {
    return (
        <Opcoes>
          {textoOpcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ))}
        </Opcoes>
    )
}

export default OpcoesHeader