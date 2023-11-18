import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  line-height: 1.15;
  letter-spacing: 0.02em;
  max-width: 200px;
`;

export const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 48px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  border: 1px solid black;
  align-items: center;

  max-width: 380px;
`;
export const Input = styled(Field)`
  width: 200px;
`;
export const FormBtn = styled.button`
  padding: 6px;
  width: 120px;
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

export const StyledGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4 px;
`;
