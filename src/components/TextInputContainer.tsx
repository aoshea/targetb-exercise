import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { useQuery } from "@apollo/client";

import { Message } from "../models";
import { GET_MESSAGE } from "../queries";
import { messageMutations } from "../mutations";

import { TextInput } from "./TextInput";
import { TextInputDisplay } from "./TextInputDisplay";

export const TextInputContainer = () => {
  const { data } = useQuery(GET_MESSAGE);
 
  const [messageValue, setMessageValue] = useState(data ? data.message.text : '');

  const { editMessage } = messageMutations;

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    setMessageValue(event.target.value);
  };

  const handleSubmit = (
    event: React.SyntheticEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    event.preventDefault();
    editMessage(messageValue);
  };

  if (!data) return <div data-testid="loading">Loading...</div>

  return (
    <Paper elevation={1}>
      <Box padding={4}>
        <Typography data-testid="title" variant="h3">Reactive Vars</Typography>
        <Divider />
        <TextInput
          messageValue={messageValue}
          dirty={messageValue !== data.message.text}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TextInputDisplay messageText={data.message.text} />
      </Box>
    </Paper>
  );
};
