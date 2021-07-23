import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavigationList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

const NavigationItem = styled.li`
    margin: 12px 24px;
    ${props => props.grow ? `flex-grow: ${props.grow}`:''};
    color: ${props => props.theme.colors.text};
    > a {
    color: ${props => props.theme.colors.primary};
    text-decoration:none;
    }
`;

const Input = styled.input`
    width: 100%;
    border: none;
    font-size: 14px;
`;

export default () =>
    <nav>
        <NavigationList>
            <NavigationItem>
                <Link to="/"> Home </Link>
            </NavigationItem>
            {/*<NavigationItem>
                <Link to="/add-jobs"> Add Jobs </Link>
             </NavigationItem>*/}
            <NavigationItem grow ={3}>
                <Input type="text" placeholder="Search for Jobs"/>
            </NavigationItem>
            <NavigationItem>
                <Link to="/login"> Login </Link>
            </NavigationItem>
        </NavigationList>
    </nav>