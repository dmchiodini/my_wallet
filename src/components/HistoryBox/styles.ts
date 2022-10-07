import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
`;

export const ChartContainer = styled.div`
  height: 260px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h2 {
    margin-bottom: 20px;
    padding-left: 18px;
  }

`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 18px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;   
    margin-left: 7px;

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 7px;
    }
`;