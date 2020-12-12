import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  background-color: #3298dc;
  border-color: transparent;
  color: #fff;
  position: relative;
  vertical-align: top;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
`;

const _Button = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default _Button;
