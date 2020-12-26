import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";

class Tasks extends Component {
  render() {
    const { tasks, handleCheck, handleDelete } = this.props;

    return (
      <div style={{ width: "auto", marginTop: 30 }}>
        {" "}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th colSpan="2">Tasks</th>
              <th>Date</th>
              <th>Done</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!tasks[0]
              ? null
              : !(tasks[0].task === "")
              ? tasks.map((elem, ind) => {
                  return (
                    <tr key={uuid()}>
                      <td>{ind + 1}</td>
                      <td colSpan="2">{elem.task}</td>
                      <td>{elem.date}</td>
                      <td>
                        <FormCheck
                          onChange={() => handleCheck(ind)}
                          checked={elem.done}
                        >
                          {console.log(ind)}
                        </FormCheck>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleDelete(ind)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tasks;
