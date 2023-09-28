import styled from "styled-components";
import Logotipo from "../Logotipo/Logo";

const Footer = styled.footer`
    padding-bottom: 6rem;
    background-color: #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 3px solid #a32828;
    padding: 1.5rem 0 3.5rem 0;
    margin-top: 5rem;
`;

const Parrafo = styled.p `
    color: white;
    padding-top: 2rem;
    font-size: 1.8rem;
    font-weight: bold;
`

const PieDePagina = () => {

    return (
        <Footer>
            <Logotipo footer={true}/>

            <Parrafo>Cindy Paola Padilla Rockel -  2023 </Parrafo>
        </Footer>
    )
}


export default PieDePagina;