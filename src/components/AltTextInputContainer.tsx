import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { useQuery, useMutation } from "@apollo/client";

import { TextInput } from "./TextInput";

import { MESSAGE_OUTPUT } from "../queries";
import { UPDATE_MESSAGE_OUTPUT } from "../mutations";
import { TextInputDisplay } from "./TextInputDisplay";

export const AltTextInputContainer = () => {
  const { data, loading } = useQuery(MESSAGE_OUTPUT);

  const [messageValue, setMessageValue] = useState(
    data ? data.messageOutput.text : ""
  );

  const [updateMessageOutput] = useMutation(UPDATE_MESSAGE_OUTPUT, {
    variables: { messageValue },
    update: (cache) => {
      const readData: any = cache.readQuery({
        query: MESSAGE_OUTPUT,
      });
      cache.writeQuery({
        query: MESSAGE_OUTPUT,
        data: {
          ...readData,
          messageOutput: {
            ...readData.messageOutput,
            text: messageValue,
          },
        },
      });
    },
  });

  useEffect(
    () =>
      data && data.messageOutput && setMessageValue(data.messageOutput.text),
    [data]
  );

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    setMessageValue(event.target.value);
  };

  const handleSubmit = (
    event: React.SyntheticEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    event.preventDefault();
    updateMessageOutput();
  };

  if (loading) return <CircularProgress data-testid="loading" />;

  return (
    <Paper style={{ marginTop: "2rem" }} elevation={1}>
      <Box padding={4}>
        <Typography variant="h3">Local resolvers</Typography>
        <Divider />
        <TextInput
          messageValue={messageValue}
          dirty={messageValue !== data.messageOutput.text}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TextInputDisplay messageText={data.messageOutput.text} />
      </Box>
    </Paper>
  );
};
