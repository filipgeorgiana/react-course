import React from 'react';
import styled from 'styled-components';
import Navigation from "./components/Navigation";

const Body = styled.div`
    padding: 20px;
    text-align: center;
    `;

const Heading = styled.h1`
    color:blue
    `;

const Paragraph = styled.p`
`;

const ButtonAttemptOne = styled.button`
    padding: 12px 48px;
    color: ${props => props.primary ? '#fff' : 'royalblue'};
    background-color: ${props => props.primary ? 'royalblue' : 'auto'};
    border-radius: 4px;
    border: none;
    transition: 160ms all;
    :hover{
    background-color: ${props => props.primary ? 'crimson' : 'auto'};
    color: ${props => props.primary ? '#fff' : 'crimson'};
    }
`;

const Button = styled.button`
    padding: 12px 48px;
    border-radius: 4px;
    border: none;
    transition: 160ms all;
`;

const PrimaryButton = styled(Button)`
    background-color: royalblue;
    color: #fff;
    :hover{
        background-color: crimson;
    }
`;

const SecondaryButton = styled(Button)`
    background-color: whitesmoke;
    color: royalblue;
    :hover{
        color: crimson;
    }
`;

const Box = styled.div`
    margin: 12px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Item = styled.div`
    padding: 12px;
    margin: 12px;
    height: 32 px;
    border: 1px solid blue;
    flex: ${props => props.flex || 1};
`;

export default () =>
    <Body>
        <Navigation/>
        <Heading> Heei!! </Heading>
        <Paragraph>
            This is a paragraph of text
        </Paragraph>
        <PrimaryButton primary={true}>
            Sign up here!
        </PrimaryButton>
        <SecondaryButton primary={false}>
            Learn more !
        </SecondaryButton>
        <Box>
            <Item/>
            <Item/>
            <Item flex={10}/>
            <Item/>
            <Item/>
        </Box>
    </Body>