import { Box, Button } from "@mui/material";
import { MyButton } from "./MyButton";
import { MyInput } from "./MyInput";
import { MyStatusBar } from "./MyStatusBar";

export const Components = ({size,variant,state}) => {
    return (
      <div>
        {/* <h2>Components</h2> */}
        {/* <Box sx={{display:'flex', flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',paddingX:"0"}}> */}
        {/* <Button variant="contained" color="success" size={size} {state} >text</Button> */}
        {/* <MyButton size="large" text="text" loading></MyButton>
        <MyButton text="hello"></MyButton>
        <MyButton variant="error" text="text"></MyButton>
            </Box>

       
                <MyStatusBar variant="h2" text="text" status="complete"/>
                <MyStatusBar variant="h3" text="text" status="back-log"/>
                <MyStatusBar variant="h4" text="text"/> */}
                <MyInput label="test"></MyInput>
                <MyInput disabled label="test1"></MyInput>
                <MyInput label="test1" startAdornment="hi"></MyInput>
                <MyInput label="test1" endAdornment="bye"></MyInput>
                <MyInput charLimit="5"></MyInput>
                <MyInput onError helperText="please input text"></MyInput>
                <MyInput onFocus></MyInput>
                <MyInput multiline rows={4}></MyInput>

      </div>
    );
  };