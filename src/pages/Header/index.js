import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from '@reach/router';
import styled from 'styled-components';

const CustomLabel = styled.label`
    color: white;
    padding: 8px;
`;

const Header = () => {
    return(<>
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
                <Link to={`${process.env.PUBLIC_URL}/home`}>Test</Link>
                <CustomLabel> Example Card</CustomLabel>
            </Container>
        </Navbar>
    </>);
};


export default Header;