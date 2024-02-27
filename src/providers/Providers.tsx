"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers(props: ProvidersProps) {
  return <NextUIProvider>{props.children}</NextUIProvider>;
}
