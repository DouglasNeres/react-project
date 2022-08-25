import Button from './Button'

function Evento() {
    function meuEvento() {
        console.log(`Ativando First Event.`)
    }

    function segundoEvento() {
        console.log(`Ativando Secund Event.`)
    }

    return(
        <div>
            <p>Clique e dispare o Evento</p>
            <Button event ={meuEvento} text = "Primeiro Evento" />
            <Button event ={segundoEvento} text = "Segundo Evento" />
            {/* <button onClick={meuEvento}>Ativar</button> */}
        </div>
    )
}

export default Evento