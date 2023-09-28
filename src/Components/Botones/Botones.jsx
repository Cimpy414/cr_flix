import React from "react";
import styled from "styled-components";
import { BtnForm } from "../UI";
import { Link } from "react-router-dom";



const DivCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


const styles = {
    border: 'none',
    borderRadius: '.5rem',
    fontSize: '20px',
    padding: '1.5rem 3rem',
    margin: '3rem 0',
    maxWidth: '95%',
    cursor: 'pointer',
    backgroundColor: "#7e2f2f",
    color: "#000"
}



const Botones = ({ categoria, reset}) => {

    return <>

        <DivCont className="contenedor">

            <div style={{ display: 'flex', gap: '4rem' }}>

                <BtnForm type="submit" id="btnGuardar" style={{ backgroundColor: "#ff7a7a", color: "#fff" }}>Guardar</BtnForm>

                <input type="button" value="Limpiar" id="btnLimpiar" style={styles} onClick={() => reset()}></input>

            </div>

            {!categoria
                ?
                <Link to={"/categoria"}> <BtnForm style={{ backgroundColor: "#ff7a7a", color: "#fff", width: '25rem' }}>Nueva Categoría</BtnForm> </Link>
                :
                <Link to={"/video"}> <BtnForm style={{ backgroundColor: "#ff7a7a", color: "#fff" }}>Atras</BtnForm> </Link>
            }

        </DivCont>
    </>
}

export default Botones;