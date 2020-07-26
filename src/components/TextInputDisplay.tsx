import React from "react";
import Typography from "@material-ui/core/Typography";

import {  DisplayText } from "./styled";
import { Message } from "../models";

type TextInputDisplayProps = {
  message: Message;
};

export const TextInputDisplay = (props: TextInputDisplayProps) => (
  <DisplayText key={props.message.text}>
    <Typography variant="caption" color="primary">{props.message.text}</Typography>
  </DisplayText>
);
