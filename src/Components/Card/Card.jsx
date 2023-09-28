import styled from "styled-components";

const Img = styled.img`
     max-width: 98%;
     border: 4px solid;
     width: 40rem;
 `;

const styles = {
    
    backgroundColor: '#ff6b6b',
    color: '#fff',
    padding: '.5rem 1.5rem',
    margin: '1rem 0 0 0rem',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center'
}

const Card = (props) => {

    const { link, imagen, id } = props.datos;
    const {eliminarVideo} = props;

    return (
        <>
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href={link} target="_blank" rel="noreferrer" >
                <Img src={imagen} alt="Miniatura Video" style={{ borderColor: props.colorPrimario }} />
            </a >
        </div>

        <input 
        type="button" 
        value="Eliminar X"
        style={styles}
        onClick={() => {
            eliminarVideo(id)
        }}
        />
        </>
       
    )
}


export default Card;