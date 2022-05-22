import s from './Text.module.css'

const Text = ({children}) => {
    return(
        <p className={s.text}>{children}</p>
    )
}

export default Text