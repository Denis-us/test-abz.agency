import s from './Input.module.css'

const Input = ({type, placeholder}) => {
    return (
        <input className={s.input}
            type={type}
            placeholder={placeholder}/>

    )
}

export default Input