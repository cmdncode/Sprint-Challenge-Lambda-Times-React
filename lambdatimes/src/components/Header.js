import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
      width: 1280px;
    }
`;

const HeaderText = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;
const HeaderSpan = styled.span `
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  ${props => (props.date ? `
    margin-left: 25px;
    flex: 1;` : null)}
  ${props => (props.temp ? `
    text-align: right;
    margin-right: 25px;
    flex: 1;` : null)}
`


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSpan date>SMARCH 32, 2018</HeaderSpan>
      <HeaderText>Lambda Times</HeaderText>
      <HeaderSpan temp>98°</HeaderSpan>
    </HeaderContainer>
  )
}

export default Header
