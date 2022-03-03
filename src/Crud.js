import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Crud = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    onload();
  }, []);

  const onload = async () => {
    const resault = await axios.get("http://localhost:3003/user");
    setUsers(resault.data);
    console.log(resault);
  };
  return (
    <>
      <div className="crudbNav">
        <div className="crud-div">
          <div className="headingCrud">
            <NavLink className="crudAddBtn" to="#">
              Home
            </NavLink>
            <NavLink className="crudAddBtn" to="/AddItem">
              Add Items
            </NavLink>
          </div>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          <tr>
            {/* <td>{index + 1}</td> */}
            <td>{users.name}</td>
            <td>{users.username}</td>
            <td>{users.email}</td>
            <td>{users.phone}</td>
            <NavLink to="/Veiw" className="crudButton">
              Viwe
            </NavLink>
            <NavLink to="/Edit" className="crudButton">
              Edit
            </NavLink>
            <NavLink to="/Delete" className="crudButton">
              Delete
            </NavLink>
          </tr>
          ;
        </table>
      </div>
    </>
  );
};

export default Crud;
