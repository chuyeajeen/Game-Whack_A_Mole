import React, { useState } from 'react';
import RankingTemplate from '../../components/template/rankingTemplate';
import { clearRankingCookie, getRankingCookie } from '../../utils/cookieUtils';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atomic/button';
import { Wrapper } from './styles';

const Ranking = () => {
  const ranking = getRankingCookie();
  const navigate = useNavigate();
  const [rankingKey, setRankingKey] = useState(1);

  return (
    <Wrapper>
      <RankingTemplate key={rankingKey} rankings={ranking} />
      <div className={'button'}>
        <Button label={'Home'} onClick={() => navigate('/')} size={'large'} />
        <Button
          label={'Reset'}
          onClick={() => {
            clearRankingCookie();
            setRankingKey((prevState) => prevState + 1);
          }}
          size={'large'}
        />
      </div>
    </Wrapper>
  );
};

export default Ranking;
