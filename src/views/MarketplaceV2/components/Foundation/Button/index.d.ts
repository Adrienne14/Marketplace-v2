import React from "react";

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  icon?: string;
  title: string;
}