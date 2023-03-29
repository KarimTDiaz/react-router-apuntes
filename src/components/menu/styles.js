import styled from "styled-components";
import { NavLink } from "react-router-dom";
const StyledMenu = styled.nav``

const MenuList = styled.ul`
list-style: none;
margin-top: 0;
margin-bottom: 0;
padding-left: 0;
display: flex;
gap: 1rem;
`

const MenuItem = styled.li``

const MenuLink = styled(NavLink)`
padding: 0.2rem;
text-decoration: none;
color:inherit;


&.active{
    color: grey;
    border-bottom: 1px solid black;
}
`


export {StyledMenu,MenuList,MenuItem,MenuLink}