import { Children } from "react"
import { Typography, Box, TextField, InputAdornment, Button } from "@mui/material";



export const MySelect = ({label,disabled,onFocus,onError,selectedItem}) => {

    
    return(
        <Box     
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField 
        color="secondary"
        error={onError}
        focused={onFocus}
        disabled={disabled} 
        label={label} 
        inputProps={{maxLength:charLimit}} 
        InputProps={{
            startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
            endAdornment: <InputAdornment position="start">{endAdornment}</InputAdornment>,
            }} 

            />
        {/* <Typography variant={variant}>{text}</Typography> */}
        </Box>
    )
}
