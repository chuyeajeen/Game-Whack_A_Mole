import React from 'react';
import { Wrapper } from './styles';
import RankingRow from '../../molecule/rankingRow';

/**
 * RankingTemplate Props
 * 랭킹 화면 Template
 * @param rankings : 쿠키에 저장되어있는 랭킹 배열
 * */
interface RankingTemplateProps {
  rankings: RankingItemType[];
}
const RankingTemplate = ({ rankings }: RankingTemplateProps) => {
  return (
    <Wrapper>
      <div className={'banner'}>Ranking</div>
      <div className={'content'}>
        {rankings.map((ranking, index) => {
          return (
            <RankingRow
              key={index}
              ranking={ranking.ranking!}
              name={ranking.name}
              date={ranking.date}
              score={ranking.score}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default RankingTemplate;
