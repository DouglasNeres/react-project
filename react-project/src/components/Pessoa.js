function Pessoa({nome , foto, profissao, idade}) {
    return (<div>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>

    </div>)
}


export default Pessoa