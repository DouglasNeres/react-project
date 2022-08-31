function ListaDois({itens}) {
    return (
        <>
            <h3>Lista coisas Boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key = {index}>{item}</p>
                ))) : (
                    <p>Não há itens na Lista!</p>
                )}
        </>
    )
}

export default ListaDois