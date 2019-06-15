import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button1 from "../src/components/Button1";

storiesOf("Button1", module)
  .add("primary", () => (
    <Button1
      onClick={action("clicked")}
      style={{ backgroundColor: "dodgerblue", color: "white" }}
      label="PRIMARY"
    />
  ))
  .add("outlined", () => (
    <Button1
      style={{
        backgroundColor: "white",
        color: "dodgerblue",
        border: "1px solid dodgerblue"
      }}
      label="OUTLINED"
    />
  ))
  .add("outlined with border radius", () => (
    <Button1
      style={{
        backgroundColor: "white",
        color: "dodgerblue",
        border: "1px solid dodgerblue",
        borderRadius: "20px"
      }}
      label="OUTLINED RADIUS"
    />
  ))
  .add("primary with border radius", () => (
    <Button1
      style={{
        backgroundColor: "dodgerblue",
        color: "white",
        borderRadius: "20px"
      }}
      label="PRIMARY RADIUS"
    />
  ))
  .add("disabled", () => <Button1 disabled label="DISABLED" />);
