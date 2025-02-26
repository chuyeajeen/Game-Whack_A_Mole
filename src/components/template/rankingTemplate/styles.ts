import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 800px;
  width: 50vw;
  background: #e6e2c3;
  border-radius: 16px;
  padding: 40px;
  border: 4px solid #3a7d44;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.15);
  .banner {
    position: absolute;
    top: -40px;
    background: #ffb400;
    color: white;
    width: 260px;
    font-size: 50px;
    font-weight: bold;
    padding: 8px 24px;
    border-radius: 30px;
    border: 3px solid white;
    text-align: center;
    box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.15);
  }
  .content {
    display: grid;
    gap: 10px;
    padding-top: 40px;
  }
`;
