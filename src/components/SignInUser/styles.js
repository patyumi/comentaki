import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    border: 1px solid #c5c5c5;

    color: #333;
    padding: 0 15px;
  }

  input:first-child {
    margin: 0 4px;
  }
`;
