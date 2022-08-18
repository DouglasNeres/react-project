import Item from './Item'

function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item marca = "Ferrari" anoLancamento = {1987}/>
                <Item marca = "Fiat" anoLancamento = {1964}/>
                <Item marca = "Golf" anoLancamento = {1970}/>
                <Item marca = "Chevrolet" anoLancamento = {1999}/>
                <Item />
            </ul>
        </>
    )
}

export default List
