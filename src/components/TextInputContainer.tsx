import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import { useQuery } from "@apollo/client";

import { Message } from "../models";
import { GET_MESSAGE } from "../queries";
import { messageMutations } from "../mutations";

import { TextInput } from "./TextInput";
import { TextInputDisplay } from "./TextInputDisplay";

export const TextInputContainer = () => {
  const messageQueryResult = useQuery(GET_MESSAGE);
  const message: Message = messageQueryResult.data.message;
  const [messageValue, setMessageValue] = useState(message.text);

  const { editMessage } = messageMutations;

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
    setMessageValue(event.target.value);
  };

  const handleSubmit = (
    event: React.SyntheticEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    event.preventDefault();
    editMessage(messageValue);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <Paper elevation={1}>
        <Box padding={4}>
          <TextInput
            messageValue={messageValue}
            dirty={messageValue !== message.text}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TextInputDisplay message={message} />
        </Box>
      </Paper>
    </Box>
  );
};
