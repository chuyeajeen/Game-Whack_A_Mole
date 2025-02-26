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

  .time {
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
