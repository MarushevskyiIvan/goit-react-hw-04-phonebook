import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ListBtn = styled.button`
  padding: 8px;
  width: 60px;
  font-size: 12px;
  line-height: 1.15;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 8px;
  background-color: #6495ed;
  color: white;
  &&:hover {
    color: black;
  }
`;

export const ListText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  display: block;
`;
export const ListNumber = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  display: block;
`;
