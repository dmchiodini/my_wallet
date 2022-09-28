import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 7px 0;

    &:hover {
      opacity: 0.7;
    }

    > svg {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.header`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  
`;