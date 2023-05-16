import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FormPropsTextFields() {
  return (
    <>
    <div className="container">
      <h1 className="centered">Search whatever you want.</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-search"
            className="centered"
            label="Ask me questions.."
            type="search"
            onChange={(e) => dispatch(updatequestion(e.target.value))}
          />

          <Button sx={{ mt: 2 }} variant="contained" 
          // onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </Box>
      
    </div>
    <div className="answer">
      <h3>Answer: </h3>
    </div>
    </>
  );
}
