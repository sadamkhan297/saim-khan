import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Veiw = () => {
  const [dataInput, setDataInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  // const { name, username, email, phone } = dataInput;
  let { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3003/user/${id}`);
    setDataInput(res.data);
  };

  return (
    <div className="add-container2">
      <Link className="crudButton" to="/crud">
        <b>Back To Home</b>
      </Link>

      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">
          <b>Name</b> : {dataInput.name}
        </li>
        <li className="list-group-item">
          <b>User Name</b> : {dataInput.username}
        </li>
        <li className="list-group-item">
          <b>Email</b> : {dataInput.email}
        </li>
        <li className="list-group-item">
          <b>Phone</b> : {dataInput.phone}
        </li>
      </ul>
    </div>
  );
};

export default Veiw;
