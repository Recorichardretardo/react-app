import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { getPosts } from '../../redux-store/actions/TestCard';
import Table from '../../components/TestTable';

const CustomLabel = styled.label`
  color: #FFFFFF;
  font-size: 1rem;
  margin-top: 15px;
  font-weight: 500;
`;


const TestCard = () => {
    const dispatch = useDispatch();
    const testCardDataa = useSelector(state => state.testCard) || {};

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPosts());
    }, [dispatch]);

    console.log("testCardDataa", testCardDataa);
return (<>
    <Container>
        <Card style={{ height: '3.5rem', textAlign: 'center', backgroundColor: '#000000', marginTop: '15px'}} >
            <CustomLabel> Test Label</CustomLabel>
        </Card>
        <Table />
    </Container>
</>);
};

export default TestCard;