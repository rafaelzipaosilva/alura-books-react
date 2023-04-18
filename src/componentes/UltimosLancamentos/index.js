import { Titulo } from '../Titulo';
import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import CardRecomenda from '../CardRecomenda';
import imgLivro from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #DDDDDD;
    padding-bottom: 20px;
    display: flex;
    flex-direction:column;
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
            <Titulo
                cor='#EB9B00'
                tamanhoFonte='36px'
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt={livro.nome} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicacação com a plataforma Google'
                img={imgLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos