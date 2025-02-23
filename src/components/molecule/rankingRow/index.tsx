import React from 'react';
import { Wrapper } from './styles';
import { dateFormatUtils } from '../../../utils/dateUtils';

interface RankingRowProps {
  name: string;
  score: number;
  date: Date;
  ranking: number;
}
const RankingRow = ({ name, ranking, date, score }: RankingRowProps) => {
  return (
    <Wrapper>
      <div className={'ranking-box'}>{ranking}</div>
      <div className={'content'}>
        <div className={'date'}>{dateFormatUtils.format(date)}</div>
        <div className={'score'}>{score}점</div>
      </div>
      <div className={'name'}>{name}</div>
    </Wrapper>
  );
};

export default RankingRow;
