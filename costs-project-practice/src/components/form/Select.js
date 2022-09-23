import styles from './Select.module.css'

function Select({ text, name, options}) {
    return (
        <div className = {styles.formControl}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
            <option disabled selected>Selecione uma opção</option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>
        </div>
    )
}

export default Select