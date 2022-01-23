import React from "react";
import { Typography } from "@material-ui/core";

export interface TextProps {
    variant?:string;
    content?:string;
    style?:any;


}

export const TypetextComponent: React.FC<TextProps> = (TextProps) => {
  return (
    <Typography

    style = {TextProps.style}
    
    >
          {
              TextProps.content
          }

    </Typography>
  );
};
