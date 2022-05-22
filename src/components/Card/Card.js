import Text from '../Text/Text'
import s from './Card.module.css'

const Card = ({photo, name, email, position, phone}) => {
    return (
        <>
            <div className={s.user}>
                <img src={photo} alt={name} className={s.image} width="70" height="70"/>
                <Text>{name}</Text>
            </div>
            <ul className={s.userDescription}>
                <li><Text>{position}</Text></li>
                <li><Text>{email}</Text></li>
                <li><Text>{phone}</Text></li> 
            </ul> 
        </>
    )
}

export default Card