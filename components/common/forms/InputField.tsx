import React from 'react';
import {TextField} from "@material-ui/core";
import  "./global.css"


export interface InputFieldProps {
    id?:string;
    className?:string;
    label?:string;
    type?:string;
    style?:any;
    placeholder?:string;
    onChange?:any;
}

export  const InputFieldComponent:React.FC<InputFieldProps> = (InputFieldProps) =>  {

        return(
            <TextField
            id= {InputFieldProps.id }
            className= {InputFieldProps.className ?? "inputRounded" }
            label= {InputFieldProps.label}
            type= {InputFieldProps.type}
            variant= "outlined"
            style = {InputFieldProps.style}
            onChange={InputFieldProps.onChange}
            InputLabelProps={{
                style: {
                  fontSize: 14,
                  backgroundColor: "#FFF",
                  paddingLeft: 4,
                  paddingRight: 4,
                  color: "#383838",
                },
              }}
              inputProps={{
                style: {
                  width:"100%",
                  fontSize: 14,
                  height: 45,
                  padding: "0 14px",
                  fontWeight: "bold",
                },
              }}
            
            >

            </TextField>
        )

    }



    