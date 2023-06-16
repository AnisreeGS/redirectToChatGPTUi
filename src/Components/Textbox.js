import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function FormPropsTextFields() {
  const [search, setSearch] = useState({
    question: "",
  });
  const [apiData, setApiData] = useState([]);

  console.log(search);

  const handleSearch = async (e) => {
    var data = {
      question: search.question,
    };
    console.log("inside handle search");
    console.log("data", data);
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log("options", options);
    

    fetch("http://127.0.0.1:5000/ask", options)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .then((d) => console.log("d in fetch", d));
    setSearch({ question: "" });
  };


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
            value={search.question}
            onChange={(e) =>
                            setSearch({ ...search, question: e.target.value })
                          }
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
    


    // <>
    //   <div class="submitforms">
    //     <container class="d-flex justify-content-center border border-primary">
    //       <div>
    //         <div class="form-group">
    //           <label for="exampleInputEmail1">Question</label>
    //           <input
    //             type="text"
    //             class="form-control"
    //             id="exampleInputName"
    //             placeholder="Ask me your question"
    //             value={search.question}
    //             onChange={(e) =>
    //               setSearch({ ...search, question: e.target.value })
    //             }
    //           ></input>
    //         </div>

    //         <button
    //           type="submit"
    //           class="btn btn-primary"
    //           onClick={handleSearch}
    //         >
    //           Submit
    //         </button>

    //         <br></br>
    //         <br></br>
    //         <br></br>
    //         <br></br>
    //       </div>
    //     </container>
    //     {/* {apiData.map((input) => (
    //       <div>
    //         <span>question:{input.question}</span>
    //         <br></br>
    //         <br></br>
    //       </div>
    //     ))} */}
    //     <h3>Answer: </h3>
    //     {apiData && <p>{apiData}</p>}
    //   </div>
    // </>
  );
}
