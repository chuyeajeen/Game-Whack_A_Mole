import styled from 'styled-components';
import gameBg from '../../assets/game/gameBg.png';
export const Wrapper = styled.div`
  background-color: #1ea7fd;
  width: 100vw;
  height: 100vh;
  background-image: url(${gameBg});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;

  .content {
    width: 700px;
    display: grid;
    gap: 50px;
    margin: auto;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    justify-content: center;
    place-items: center;
    grid-auto-flow: row dense;
    background-attachment: fixed;
  }
`;
