import React from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title
} from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';
import LogoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={LogoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <Link to="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
        <Link to="list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Link>
        <Link to="list/exit-balance">
          <MdArrowDownward />
          Saídas
        </Link>
        <Link to="#">
          <MdExitToApp />
          Sair
        </Link>
      </MenuContainer>
    </Container>
  );
}

export default Aside;