import './App.css';
import { CustomProvider, Container, Header, Content, Footer } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import MyHeader from './components/MyHeader';
import AboutMe from './components/AboutMe';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <CustomProvider theme='dark'>
        <Container>
          <Header className="Header"><MyHeader/></Header>
          <Content>
            <AboutMe/>
          </Content>
          <Footer><MyFooter/></Footer>
        </Container>
      </CustomProvider>
    </div>
  );
}

export default App;
