import React, { useState, useMemo } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { 
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight
} from "./styles";

interface IPieChartGraphicProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string
  }[];
}

const PieChartGraphic: React.FC<IPieChartGraphicProps> = ({ data }) => (
    <Container>
      <SideLeft>
        <h2>Relação</h2>
        <LegendContainer>
          {data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent || 0}%</div>
              <span>{indicator.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie 
              data={data}
              labelLine={false}
              dataKey="percent"
            >
              {data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
);

export default PieChartGraphic;