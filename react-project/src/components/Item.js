import PropTypes from 'prop-types'

function Item({marca, anoLancamento}) {
    return (
        <>
            <li>Veículo de marca: {marca}, Lançado em:{anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a Marca',
    anoLancamento: 0,
}


export default Item