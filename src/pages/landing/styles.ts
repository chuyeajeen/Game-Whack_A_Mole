import styled from 'styled-components';
import landingBg from '../../assets/game/landingBG.png';
export const Wrapper = styled.div`
  background-color: #1ea7fd;
  width: 100vw;
  height: 100vh;
  background-image: url(${landingBg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 500px;
    margin-top: 400px;
    .row-content {
      display: grid;
      grid-template-columns: 220px auto;
      text-align: right;
      font-weight: 800;
      font-family: 'Gumi', sans-serif;
      font-size: 30px;
      gap: 10px;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
    }
    .row-button {
      gap: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const PauseWrapper = styled.div``;
