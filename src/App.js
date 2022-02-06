import { ThemeProvider } from 'styled-components'
import {Container} from '../src/components/styles/Container.styles'
import Header from './components/Header';
import GlobalStyles from '../src/components/styles/Global';
import CustomSelect from './CustomSelect';
import Content from './Content'
import Card from './components/Card';
import Footer from './components/Footer';
import Body from './components/Body';
import NavBar from './components/NavBar';
// import CenterMode from './components/CenterMode';
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import SimpleSlider from './components/SimpleSlider';

const styles = {
  select:{
    margin: '40px 0'

  }
}

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <>
      <SimpleBarReact style={{ height: '100vh' }}>
      <GlobalStyles></GlobalStyles>
      <NavBar></NavBar>
        <Header></Header>
        <Body></Body>
        {/* <CenterMode></CenterMode> */}
        <SimpleSlider></SimpleSlider>
        <CustomSelect  style={styles.select}/>
        <Container>
          {
            Content.map((item, index) =>(
               <Card key={index} item={item}/>
            ))}
        </Container>
        <Footer></Footer>
        </SimpleBarReact>
      </>
    </ThemeProvider>
    )
  };
    
export default App;
