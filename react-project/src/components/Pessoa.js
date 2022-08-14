function Pessoa({ nome, foto, profissao, idade }) {
    return (<div>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <div className= "p">
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    </div>)
}


export default Pessoa