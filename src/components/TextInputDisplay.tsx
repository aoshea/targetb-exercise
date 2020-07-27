import React from "react";
import Typography from "@material-ui/core/Typography";

import {  DisplayText } from "./styled";

type TextInputDisplayProps = {
  messageText: string;
};

export const TextInputDisplay = (props: TextInputDisplayProps) => (
  <DisplayText key={props.messageText}>
    <Typography data-testid="display" variant="caption" color="primary">{props.messageText}</Typography>
  </DisplayText>
);
