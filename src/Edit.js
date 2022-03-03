import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  let Navigat = useNavigate();
  let { id } = useParams();
  const [dataInput, setDataInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    loadUsers();
  }, []);
  const { name, username, email, phone } = dataInput;

  const ChangEvent = (e) => {
    const { name, value } = e.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };

  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3003/user/${id}`);
    setDataInput(res.data);
  };

  const ClickEvent = async (e) => {
    if (
      dataInput.name === "" &&
      dataInput.username === "" &&
      dataInput.email === "" &&
      dataInput.phone === ""
    ) {
      alert("Please Fill Data");
    } else {
      e.preventDefault();
      await axios.put(`http://localhost:3003/user/${id}`, dataInput);
      Navigat("/crud");
    }
  };
  return (
    <div className="add-container">
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Name"
            variant="standard"
            onChange={ChangEvent}
            name="name"
            value={name}
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="User Name"
            variant="standard"
            onChange={ChangEvent}
            name="username"
            value={username}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Gmail"
            variant="standard"
            onChange={ChangEvent}
            name="email"
            value={email}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Phone"
            variant="standard"
            onChange={ChangEvent}
            name="phone"
            value={phone}
          />
        </Box>
        <navLink
          to=""
          className="crudButton"
          onClick={ClickEvent}
          variant="contained"
        >
          Update
        </navLink>
      </Box>
    </div>
  );
};

export default Edit;
