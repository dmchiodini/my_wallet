import React, { useMemo, useState, useEffect } from "react";
import { v4 } from 'uuid';
import { useParams } from 'react-router-dom';

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMonths from '../../utils/months';

import {
  Container,
  Content,
  Filters
} from "./styles";
import { parse } from "path";

interface IData {
  id: string;
  description: string;
  amountFormated: string;
  frequency: string;
  dateFormated: string;
  tagColor: string;
}

const List: React.FC = () => {
  const { type } = useParams();
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

  const pageData = useMemo(() => {
    if (type === 'entry-balance') {
      return {
        title: 'Entradas',
        lineColor: '#4E41F0',
        data: gains
      }
    } else {
      return {
        title: 'Saídas',
        lineColor: '#E44C4E',
        data: expenses
      }
    }
  }, [type]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    const { data } = pageData;

    data.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    })
  }, [pageData]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(item => item !== frequency);
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  }

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error('Invalid month value. Is accept 0 - 24.');
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error('Invalid year value. Is accept integer numbers.');
    }
  }

  useEffect(() => {
    const { data } = pageData;

    const filterData = data.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
    });

    if (filterData.length > 0) {
      const formattedData = filterData.map(item => {
        return {
          id: v4(),
          description: item.description,
          amountFormated: formatCurrency(Number(item.amount)),
          frequency: item.frequency,
          dateFormated: formatDate(item.date),
          tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E"
        }
      });
      setData(formattedData);
    } else {
      setData([]);
    }
  }, [type, pageData, monthSelected, yearSelected, frequencyFilterSelected]);

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`
            tag-filter 
            tag-filter-recurrent 
            ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}
          `}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`
            tag-filter 
            tag-filter-eventual 
            ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}
          `}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.length > 0 && (
          <>
            {data.map(item => (
              <HistoryFinanceCard
                key={item.id}
                tagColor={item.tagColor}
                title={item.description}
                subtitle={item.dateFormated}
                amount={item.amountFormated}
              />
            ))
            }
          </>
        )}
      </Content>
    </Container >
  );
}

export default List;