import React from "react";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { FormRow, Form, InputContainer } from "./styled";

type TextInputProps = {
  messageValue: string;
  dirty: boolean;
  handleChange: (
    event: React.SyntheticEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => void;
  handleSubmit: (
    e: React.SyntheticEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => void;
};

export const TextInput = (props: TextInputProps) => {
  return (
    <Form autoComplete="false" onSubmit={props.handleSubmit} noValidate>
      <FormRow>
        <FormControl>
          <InputContainer isDirty={props.dirty}>
            <Input
              id="display-text"
              name="display-text"
              type="text"
              autoComplete="new-password"
              spellCheck="false"
              disableUnderline
              onChange={props.handleChange}
              value={props.messageValue}
            />
          </InputContainer>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </FormRow>
    </Form>
  );
};
