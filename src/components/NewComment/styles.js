import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 10%;

  margin: 20px 0;

  h4 {
    color: #707070;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 100%;

  textarea {
    resize: none;
    background: #fff;
    height: 100%;
    border: 1px solid #c5c5c5;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 10%;
  height: 100%;

  button {
    background: #de264c;
    border: none;
    border-radius: 4px;

    width: 90%;
    height: 80%;

    color: #fff;
    font-weight: bold;
    padding: 10px;

    cursor: pointer;
  }

  button:first-child {
    margin-bottom: 5px;
  }

  button:hover {
    background: #cb0d34;
  }
`;
