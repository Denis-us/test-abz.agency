import s from './Button.module.css'

const Button = ({children, onClick}) => {
    return (
        <button className={s.button} onClick={onClick} type='submit'>{children}</button>
    )
}

export default Button