import styles from "./Frase.module.css"; 

function Frase() {
    return(
        <div className = {styles.fraseContainer}>
            <h3 className = {styles.fraseContent}>Componente com Frase!</h3>
        </div>
    )
}

export default Frase