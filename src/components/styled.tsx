import styled, { keyframes } from "styled-components";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

export const AppContent = styled.div`
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface InputContainerProps {
  readonly isDirty: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  padding: 0.25rem;
  margin-right: 0.5rem;
  border-bottom: ${(props) =>
    props.isDirty ? "2px solid red" : "2px solid #08bf3c"};
  transition: border-color 200ms ease-in-out;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const DisplayText = styled.div`
  position: relative;
  animation: ${fadeIn} 500ms linear forwards;
  opacity: 0;
`;
