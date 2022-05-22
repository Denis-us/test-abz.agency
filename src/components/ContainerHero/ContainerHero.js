import s from './ContainerHero.module.css'

const ContainerHero = ({children}) => {
            return (
                <div className={s.container}>{children}</div>
            )
        }
        
export default ContainerHero