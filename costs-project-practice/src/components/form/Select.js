import styles from './Select.module.css'

function Select({ text, name}) {
    return (
        <div className = {styles.formControl}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
            <option disabled selected>Selecione uma opção</option>
        </select>
        </div>
    )
}

export default Select