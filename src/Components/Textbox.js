import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FormPropsTextFields() {
  const [search,setSearch]= React.useState("");
  const [apiData, setApiData] = useState(null);
  const updatesearch = (e)=>{
    setSearch(e.target.value)
  }
  console.log(search)
  const handleSearch = () =>{
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search),
    };

    fetch("http://localhost:5000/ask",options)
      .then(response => response.json())
      .then(data => {
        setApiData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
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
            value={search}
            onChange={(e)=>updatesearch(e.target.value)}
            // onChange={(e) => dispatch(updatesearch(e.target.value))}
          />

          <Button sx={{ mt: 2 }} variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </Box>
      
    </div>
    <div className="answer">
      <h3>Answer: </h3>
      {apiData && <p>{apiData}</p>}
    </div>
    </>
  );
}

