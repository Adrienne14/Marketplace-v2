import React from "react";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 10px 0px;
  }
`