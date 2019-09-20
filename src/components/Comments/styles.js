import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: 0 5px 20px 0;

  padding: 10px 0 15px 10px;

  border-left: 10px solid ${props => props.color};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  border-bottom: 1px solid #c5c5c5;

  margin-bottom: 15px;

  justify-content: space-between;

  span {
    color: #c5c5c5;
  }
`;
