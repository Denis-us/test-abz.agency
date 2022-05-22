import Heading from '../Heading/Heading'
import Text from '../Text/Text'
import Button from '../Button/Button'
import s from './Hero.module.css'


const Hero = () => {
    return (
        <>
            <div className={s.heading}>
                <Heading>
                    Test assignment for front-end developer
                </Heading>
            </div>
                <Text>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </Text>
            <div className={s.button}>
                <Button>
                    Sign up
                </Button>
            </div>
            

        </>
    )
}

export default Hero