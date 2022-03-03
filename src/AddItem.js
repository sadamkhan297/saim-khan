import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  let Navigat = useNavigate();
  const [dataInput, setDataInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = dataInput;

  const ChangEvent = (e) => {
    const { name, value } = e.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
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
      await axios.post("http://localhost:3003/user", dataInput);
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
          to="/crud"
          className="crudButton"
          onClick={ClickEvent}
          variant="contained"
        >
          Add User
        </navLink>
      </Box>
    </div>
  );
};

export default AddItem;
