"use client";

import React from "react";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { SaasProvider, theme as saasTheme } from "@saas-ui/react";

// Chakra + Saas UI theme
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#E6F0FF",
        100: "#CFE0FF",
        200: "#A6C7FF",
        300: "#7DAEFF",
        400: "#558FFF",
        500: "#234FBF",
        600: "#1B3A90",
        700: "#152C6B",
        800: "#0E1E44",
        900: "#071027",
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
  },
  saasTheme
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ColorModeScript harus di client */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SaasProvider theme={theme}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </SaasProvider>
    </>
  );
}
