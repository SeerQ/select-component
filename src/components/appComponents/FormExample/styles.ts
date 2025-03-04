import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

export const FormWrapper = styled.form`
  max-width: 40rem; 
  margin: 2rem auto;
  padding: 2rem; 
  border: 0.1rem solid ${theme.palette.grey}; 
  border-radius: 0.4rem; 
  background: ${theme.palette.white};
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem; 
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem; 
  font-weight: bold;
  color: ${theme.palette.dark};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem; 
  border: 0.1rem solid ${theme.palette.grey}; 
  border-radius: 0.4rem;
  color: ${theme.palette.dark};
  background: ${theme.palette.white};

  &::placeholder {
    color: ${theme.palette.lightText};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem; 
  background: ${theme.palette.secondary};
  color: ${theme.palette.white};
  border: none;
  border-radius: 0.4rem; 
  cursor: pointer;

  &:hover {
    background: ${theme.palette.dark};
  }

  &:disabled {
    background: ${theme.palette.disabled};
    cursor: not-allowed;
  }
`;