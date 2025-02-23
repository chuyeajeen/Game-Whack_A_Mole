import React from 'react';
import { Wrapper } from './styles';
import RankingRow from '../../molecule/rankingRow';

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
              ranking={ranking.ranking}
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
