import s from "./Heading.module.css"

const Heading = ({children}) => {
    return (
        <h1 className={s.heading}>{children}</h1>
    )
}

export default Heading