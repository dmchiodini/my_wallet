import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 7px;
  margin: 10px 0;
  padding: 12px 10px;
  cursor: pointer;
  transition: all .3s;
  position: relative;

  &:hover {
    opacity: .7;
    transform: translate(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }

  > div span {
    font-weight: 500;
    font-size: 18px;
  }

`;

export const Tag = styled.div<ITagProps>`
  width: 13px;
  height: 60%;
  position: absolute;;

  background-color: ${props => props.color};
  left: 0;
`;

export const Controllers = styled.div<ITagProps>`
  display: flex;
`;