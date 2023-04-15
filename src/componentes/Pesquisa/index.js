import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35% #326589 165%);
    color: #FFFFFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFFFFF;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
`

function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"  
            />
        </PesquisaContainer>
    )
}

export default Pesquisa