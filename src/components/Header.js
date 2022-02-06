import React from 'react';
import { Container } from './styles/Container.styles';
import { StyledHeader} from './styles/Header.styles';
import {Button} from './styles/Button';
import {Flex} from './styles/Flex.styled'

let data="Dcastalia";
const Header = () => {
    function apple()
  {
  data="Dcastalia";
    alert(data);
  }
    return (
        <StyledHeader>
            <Container>
                <Button onClick={apple} primary as="a" href="http://www.dcastalia.com"> Click Me </Button>
                <Flex>
                    <div>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis tempore dignissimos reiciendis dolorem, impedit eligendi voluptatibus ex sit optio ducimus nulla.</p>
                        
                        <Button onClick={apple} primary as="a" href="http://www.dcastalia.com">Dcastalia</Button>
                    </div>
                    <img style={{width: '375px',marginLeft: '40px'}} src="https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;