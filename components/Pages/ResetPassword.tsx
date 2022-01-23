import {Component} from "react";
import {Grid, Card,CardContent, Typography, Box} from "@material-ui/core";
import Image from "../common/images/logo.png";
import {SecuritySharp} from "@material-ui/icons"
import {ButtonComponent} from "../common/forms/Button"
import { InputFieldComponent } from "../common/forms/InputField";



class ResetPassword extends Component {
   render() {

    return(
        <>  
         <Grid container xs={12} md={12} lg={12}
         
         direction="column"
         alignItems="center"
         justify="center"
         
         >
        <Grid
          component={Box}
             

          container item
         
          xs={10}
          sm={6}
          md={6}
          lg={4}
          justify="center"
          alignItems="center"
          alignContent="center" 
                  >
          <img
            src={Image}
            alt=""
            style={{
              width: "20%",
              height: "4.5%",
              marginTop: "7%",
            }}
          />

          <Card
            style={{
              width: "100%",
              height: "70vh",
              marginTop: "10%",
              borderRadius: "3%",

            }} 



          >
            <CardContent>
              <Typography
                style={{
                  fontWeight: "450",
                  marginTop: "10%",
                  fontSize: "200%",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                }}
              >
                Enter your new
              </Typography>

              <Typography
                style={{
                  fontWeight: "450",
                  fontSize: "200%",
                  marginTop: "-2%",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                }}
              >
                password
              </Typography>
 
                          
          <InputFieldComponent
           
          />
                 <InputFieldComponent />
                

              <Typography
               variant="subtitle1"
                  style={{
                    fontWeight: "300",
                    width:"100%",    
                    fontFamily: "CircularStd",
                    fontSize:"82%", 

                  }}

              >


              <SecuritySharp style={{fontSize:"0.8rem",color:"grey",margin:"0% 1.5% 0% 1.5%" }} />
              A strong password is 8 characters long, 

              </Typography>
               
              <Typography
               variant="subtitle1"
                  style={{
                    marginTop: "-1%",
                    fontWeight: "300",
                    width:"100%",   
                    fontSize:"82%", 
                    fontFamily: "CircularStd",
                  }}

              >
              between lowercase, uppercase, and numbers.


              </Typography>
                 
                 <ButtonComponent

                 label = "Update password"
                  style = {{
                      width:"70%",
                      background:"black",
                      height:"70%",
                      color:"white",
                      fontWeight:"bold",
                      marginTop:"5%",
                      marginBottom:"40%",
                      borderRadius:"1.5rem",
                      backgroundColor:"#D9E7EB",
                      fontFamily:"CircularStd",
                      padding:"3% 3% 3% 3%"

                  }}
                 />



            </CardContent>
          </Card>
        </Grid>
      </Grid>
      

       
 </>
    )
       
   }
}


export default ResetPassword;
