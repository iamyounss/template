"use client";

import React from "react";
import { Container, Text, Box } from "@chakra-ui/react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
        {children}
    </>



  );
};
