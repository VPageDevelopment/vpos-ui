import React, {Component} from 'react';
import styled from 'styled-components';


const LoginContainer = styled.div`
    background-color:#292c3d;
    flex:1;
`;

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            content : "Login Component"
        }
    };

    render(){
        return (
            <LoginContainer>
                <h1>{this.state.content}</h1>
            </LoginContainer>
        )
    }

};

export default Login;
