import s from './RadioButton.module.css'

const RadioButton = ({type, name, value}) => {
    return (
        <input className={s.input}
            type={type}
            name={name}
            value={value}/>

    )
}

export default RadioButton