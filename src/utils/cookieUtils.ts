const RANKING_COOKIE_NAME = 'gameRanking';

const setRankingCookie = (rankingList: RankingItemType[]) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000); // 30일 유지
  document.cookie = `${RANKING_COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(rankingList),
  )}; expires=${expires.toUTCString()}; path=/`;
};

export const getRankingCookie = (): RankingItemType[] => {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split('=');
    if (cookieName === RANKING_COOKIE_NAME) {
      try {
        const rankingList: RankingItemType[] = JSON.parse(
          decodeURIComponent(cookieValue),
        );

        return rankingList.map((item) => ({
          ...item,
          date: new Date(item.date),
        }));
      } catch (error) {
        return [];
      }
    }
  }
  return [];
};

export const updateRanking = (name: string, score: number) => {
  const rankingList = getRankingCookie();

  const newRankingItem: RankingItemType = {
    name,
    score,
    date: new Date(),
    ranking: 0,
  };

  const updatedRanking = [...rankingList, newRankingItem]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  updatedRanking.forEach((item, index) => {
    item.ranking = index + 1;
  });

  setRankingCookie(updatedRanking);
};

export const clearRankingCookie = () => {
  document.cookie = `${RANKING_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
