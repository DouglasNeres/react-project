function Evento( {numero} ) {

    function meuEvento() {
        console.log(`Oii, Ativei! ${numero}` )
    }

    return(
        <div>
            <p>Clique e dispare o Evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento