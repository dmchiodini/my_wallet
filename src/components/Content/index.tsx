import React from "react";
import { Container } from "./styles";

interface IBaseLayoutProps {
  children?: React.ReactNode;
}

const Content: React.FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Content;