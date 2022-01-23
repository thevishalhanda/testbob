import React from "react";
import { Button } from "@material-ui/core";

export interface ButtonProps {
  style?: any;
  label?: string;
  color?: string;
  background?: string;
  onclick?:any;

}

export const ButtonComponent: React.FC<ButtonProps> = (ButtonProps) => {
  return (
    <Button
      style={{
        fontFamily: "CircularStd",
        padding: "3% 3% 3% 3%",
        width: "70%",
        height: "70%",
        color: "white",
        fontWeight: "bold",
        marginTop: "5%",
        marginBottom: "40%",
        borderRadius: "1.5rem",
        backgroundColor: "#D9E7EB",
      }}
      onClick = {ButtonProps.onclick}
    >
      {ButtonProps.label ?? "default"}
    </Button>
  );
};
