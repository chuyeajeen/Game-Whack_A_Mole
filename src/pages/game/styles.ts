import styled from 'styled-components';
import gameBg from '../../assets/game/gameBg.png';

export const Wrapper = styled.div<{ rowCount: number; colCount: number }>`
  background-color: #1ea7fd;
  width: 100vw;
  height: 100vh;
  background-image: url(${gameBg});
  background-size: cover;
  background-position: center;

  .game-info {
    display: flex;
    padding-right: 20px;
    padding-top: 20px;
    font-size: 40px;
    font-weight: bold;
    color: gold;
    .title {
      width: 200px;
    }
  }

  .content {
    width: 700px;
    height: 700px;
    display: grid;
    gap: 20px;
    margin: auto;
    grid-template-columns: repeat(${({ colCount }) => colCount}, 1fr);
    grid-template-rows: repeat(${({ rowCount }) => rowCount}, 1fr);
    justify-content: center;
    place-items: center;
    grid-auto-flow: row dense;
    background-attachment: fixed;
  }
`;

export const ScoreWrapper = styled.div`
  .score-title {
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: gold;
    font-weight: bold;
  }
  .score {
    width: 330px;
    height: 200px;
    background-color: #e7fdd8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: gold;
    font-weight: bold;
    border-radius: 5px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;
