import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, removeall } from "./actions/actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const selector = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand h1 justify-content-center">
            To-Do List
          </span>
        </div>
      </nav>

      <div className="container d-flex justify-content-center">
        <div className="input-group m-5">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="✍️ Add Items Here"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <i
            className="fa fa-plus add-btn"
            onClick={() => dispatch(addtodo(inputData), setInputData(""))
            }
            title="Add Note"
          ></i>
        </div>
      </div>

      <table class="table table-dark table-striped table-hover table-responsive text-center">
        <thead>
          <tr>
           
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            
          </tr>
        </thead>
        <tbody>
          {selector.map((elem) => {
            return (
              <tr>
                <td key={elem.id}>{elem.data}</td>
                <td>
                  <i className="fa fa-minus-circle" onClick={()=>dispatch(deletetodo(elem.id))} title="Delete Note"></i>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="container container-fluid m-5 text-center">
      <button type="button" class="btn btn-danger" onClick={()=>dispatch(removeall())}>Remove All</button>
      </div>
    </>
  );
};
export default Todo;
