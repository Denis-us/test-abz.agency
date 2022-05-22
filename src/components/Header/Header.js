import logo from '../../images/IcoLogo.svg'
import logoText from '../../images/IcoText.svg'
import Button from '../Button/Button'
import s from './Header.module.css'

const Header = () => {
    return (
            <header className={s.header}>
                <ul className={s.headerLogo}>
                    <li className={s.headerLogoListElement}>
                        <a href="/">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </li>
                    <li className={s.headerLogoListElement}>
                        <a href="/">
                            <img src={logoText} alt="Logo-text"/>
                        </a>
                    </li>
                </ul>
                <ul className={s.headerButtonList}>
                    <li className={s.headerButtonListElement}>
                        <Button>
                            Users
                        </Button>
                    </li>
                    <li className={s.headerButtonListElement}>
                        <Button>
                            Sign up
                        </Button>
                    </li>
                </ul>
            </header>
        
    )
}

export default Header