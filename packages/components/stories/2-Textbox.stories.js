import React from "react";
import { action } from "@storybook/addon-actions";

import Textbox from "../lib/textbox";

export default {
  title: "Textbox",
  component: Textbox,
};

export const Text = () => (
  <Textbox type="text" placeholder="Hello World" onChange={action("type")} />
);
