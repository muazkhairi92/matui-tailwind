import { Children } from "react"
import { Typography, Box, TextField, InputAdornment } from "@mui/material";



export const MyInput = ({label,disabled,onFocus,onError,charLimit,startAdornment, endAdornment,...rest}) => {

    
    return(
        <Box     
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            '& label.Mui-focused': {
                color: '#09A3A9',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#09A3A9',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'gray',
                },
                '&:hover fieldset': {
                  borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#09A3A9',
                },
            }
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
            {...rest}
            />

        {/* <Typography variant={variant}>{text}</Typography> */}
        </Box>
    )
}
