import React from "react";
import { action } from "@storybook/addon-actions";

import Panel from "../lib/panel";

export default {
  title: "Panel",
  component: Panel,
};

const ListItem = ["a", "b", "c"];

export const List = () => (
  <Panel title="Title" type="text" ListItem={ListItem}></Panel>
);
