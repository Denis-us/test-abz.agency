import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContainerHero from './components/ContainerHero/ContainerHero';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Users from './components/Users/Users';
import Heading from './components/Heading/Heading';
import UserList from './components/UserList/UserList';
import Button from './components/Button/Button';
import Form from './components/Form/Form';


function App() {
  return (
    <>
      <Header/>

      <Section>
        <ContainerHero>
          <Hero/>
        </ContainerHero>
      </Section>

      <Section>
        <Container>
          <Users>
            <Heading>Working with<br/>GET request</Heading>
            <UserList/>
          </Users>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <Users>
            <Heading>Working with<br/>POST request</Heading>
            <Form/>
            <Button>Sign in</Button>
          </Users>
        </Container>
      </Section>
    
    </>
    
  );
}

export default App;
