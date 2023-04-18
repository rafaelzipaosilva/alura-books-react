import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #DDDDDD;
    padding-bottom: 20px;
    display: flex;
    flex-direction:column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFFFFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt={livro.nome} />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos