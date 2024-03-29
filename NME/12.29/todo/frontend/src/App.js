import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { List } from "./Components/List";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function App() {
  const [dataa, setDataa] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:8000/");
      setDataa(data.data);
    };
    fetchData();
  }, []);
  const getData = async () => {
    const data = await axios.get("http://8000/");
    setDataa(data.data);
  };
  const AddList = async () => {
    try {
      const res = await axios.post("http://localhost:8000/", {
        title: title,
        detail: detail,
      });
      const updatedData = [...dataa, res.data];
      setDataa(updatedData);
      setTitle("");
      setDetail("");
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };
  const DeleteList = async (id) => {
    await axios.delete(`http://localhost:8000/${id}`);
    getData();
  };
  const updateIsDone = async (id, isDone) => {
    const checked = !isDone;
    await axios.put(`http://localhost:8000/${id}`, { isDone: checked });
    getData();
  };
  return (
    <div className="App">
      <div style={{ fontSize: "60px" }}>TO DO LIST</div>
      <div>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <TextField
          id="outlined-basic"
          label="Detail"
          variant="outlined"
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          value={detail}
        />
        <Button variant="contained" onClick={AddList} sx={{ height: "56px" }}>
          Add
        </Button>
      </div>
      <div style={{ width: "454px", display: "flex", flexDirection: "row" }}>
        <p style={{ width: "170px", color: "grey" }}>title</p>
        <p style={{ color: "grey" }}>detail</p>
      </div>
      <div>
        {dataa?.map((list, index) => {
          return (
            <List
              title={list?.title}
              detail={list?.detail}
              isDone={list?.isDone}
              DeleteList={() => DeleteList(list._id)}
              updateIsDone={() => updateIsDone(list._id, list.isDone)}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
