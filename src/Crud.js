import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const Crud = () => {
  const [user, setfirst] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/user");
    setfirst(result.data);
  };
  const DeleteEvent = async (id) => {
    await axios.delete(`http://localhost:3003/user/${id}`);
    loadUsers();
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
          {user.map((preVal, index) => {
            console.log(preVal.name, "result");
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{preVal.name}</td>
                <td>{preVal.username}</td>
                <td>{preVal.email}</td>
                <td>{preVal.phone}</td>
                <Link className="crudButton" to={`/View/${preVal.id}`}>
                  View
                </Link>
                <Link className="crudButton" to={`/Edit/${preVal.id}`}>
                  Edit
                </Link>
                <Link
                  onClick={() => DeleteEvent(preVal.id)}
                  className="crudButton"
                  to=""
                >
                  Delete
                </Link>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Crud;
