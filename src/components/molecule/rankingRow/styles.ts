import { styled } from 'styled-components';

export const Wrapper = styled.div`
  min-width: 600px;
  width: 40vw;
  height: 100px;
  display: grid;
  grid-template-columns: 0.4fr 1fr 4fr;
  background-color: beige;
  border-radius: 16px;
  padding: 10px 20px;
  align-items: center;
  box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.15);
  .ranking-box {
    width: 80px;
    height: 80px;
    background-color: #eaeab4;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    font-size: 65px;
    font-weight: bold;
    color: yellow;
  }
  .content {
    width: 100px;
    padding: 0 20px;

    .date {
      font-size: 15px;
      color: saddlebrown;
      font-weight: bold;
    }
    .score {
      font-size: 25px;
      color: saddlebrown;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .name {
    font-size: 60px;
    color: saddlebrown;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
