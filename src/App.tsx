import React from "react";
import Box from "@material-ui/core/Box";

import { AltTextInputContainer } from "./components/AltTextInputContainer";
import { TextInputContainer } from "./components/TextInputContainer";
import { AppContent } from "./components/styled";

export const App = () => (
  <AppContent>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <TextInputContainer />
      <AltTextInputContainer />
    </Box>
  </AppContent>
);
