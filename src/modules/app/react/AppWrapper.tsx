"use client";

import React from "react";
import { Provider } from "react-redux";
import { app } from "@/modules/app/main";
import { DependenciesProvider } from "@/modules/app/react/DependenciesProvider";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={app.store}>
      <DependenciesProvider dependencies={app.dependencies}>
        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </DependenciesProvider>
    </Provider>
  );
};
