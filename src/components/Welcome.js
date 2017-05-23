import React  from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
    flex:1;
    background-color:#f25d59;
`;

const LogoContainer = styled.div`
    display:flex;
    width:90%;
    height:230px;
    background-color:#f46662;
    margin-left:10%;
`;

const LogoInnerContainer = styled.div`
    color:white;
    margin:0 auto;
    align-self:center;
`;

const Logo = styled.img`
    width:70px;
    height:70px;
`;

const LogoText = styled.span`
    color:inherit;
`;

const Welcome = () => (
    <WelcomeContainer>
        <LogoContainer>
            <LogoInnerContainer>
                <Logo src="https://react.semantic-ui.com/logo.png" alt="application logo"/>
                <LogoText>VPOS</LogoText>
            </LogoInnerContainer>
        </LogoContainer>
    </WelcomeContainer>
);

export default Welcome;
