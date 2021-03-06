import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 12px 48px;
    border-radius: 4px;
    border: none;
    transition: 160ms all;
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    :hover{
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const SecondaryButton = styled(Button)`
    background-color: whitesmoke;
    color: ${props => props.theme.colors.primary};
    :hover{
        color: ${props => props.theme.colors.secondary};
    }
`;