import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  border-bottom: 1px solid #c5c5c5;
`;

export const Tittle = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;

  width: 20%;
  height: auto;

  .tooltip {
    background: #de264c;
    padding: 5px;
    position: relative;
    width: 15%;

    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .tooltip:before {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #de264c;
    border-right-color: pink;
    content: "";
    top: 3px;
    right: -5px;
    position: absolute;
  }

  h2 {
    width: 85%;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;

  width: 80%;

  button {
    background: #de264c;
    border: none;
    border-radius: 4px;

    color: #fff;
    font-weight: bold;
    padding: 10px;
    margin: 0 0 0 4px;

    cursor: pointer;
  }

  button:hover {
    background: #cb0d34;
  }
`;
