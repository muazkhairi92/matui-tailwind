import { Button,CircularProgress } from "@mui/material";
import { color } from "@mui/system";


export const MyButton = ({size,variant,state,disabled,loading,text,color= 'primary',sx,...rest}) => {
    let height;
    let fontSize;
    let borderRadius;

    switch (size) {
        case "large":
            height ="65px"
            fontSize ="30px"  
            borderRadius ="10px"
            break;
        case "standard":
            height ="45px"
            fontSize ="16px" 
            borderRadius ="4px"
            break;
        case "small":
            height ="35px"
            fontSize ="16px"  
            borderRadius ="4px"
            break;
    
        default:
            height ="45px"
            fontSize ="16px"
            borderRadius ="4px"  
            break;
    }
    
    return (
      
      
        <Button 
        disabled={disabled}
        variant={variant}
        sx={{
            height:height,
            padding:"5px 10px",
            borderRadius:borderRadius,
            fontSize:fontSize,
        }}
        {...rest}
        >{loading ? <CircularProgress/> :<p>{text}</p> }
        
        
        </Button>
            
    );
  };