import { Children } from "react"
import { Typography, Box } from "@mui/material";



export const MyStatusBar = ({variant,status,text}) => {

    let backgroundColor;
    let Color;

    switch(status){
        case "complete":
            backgroundColor ="green"
            Color="white"
            break;
        case "back-log":
            backgroundColor ="red"
            Color="white"
            break;
        default:
            backgroundColor ="blue"
            Color="white"
            break;
    }
    
    return(
        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:"5% 5% 5% 5%", backgroundColor:backgroundColor, color:Color, width:'100px',borderRadius:"5%"}}>
        <Typography variant={variant}>{text}</Typography>
        </Box>
    )
}
