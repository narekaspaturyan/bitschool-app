import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import Tasks from "./tasks";

class ToDoMain extends Component {
  state = {
    checked: false,
    inputVal: "",
    tasks: [
      {
        task: "",
        done: false,
        date: "",
      },
    ],
  };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  addTask = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const tasks = [...this.state.tasks];
    const { inputVal } = this.state;

    tasks.push({
      task: inputVal.trim(),
      date,
      done: false,
    });
    if (tasks[0].task === "") {
      tasks.shift();
    }
    this.setState({
      inputVal: "",
      tasks,
    });
  };

  handleCheck = (ind) => {
    const el = { ...this.state.tasks[ind] };
    el.done = !el.done;
    const tasks = [...this.state.tasks];
    tasks.splice(ind, 1, el);
    console.log(el);
    this.setState({
      tasks,
    });
  };

  handleDelete = (ind) => {
    const tasks = [...this.state.tasks];
    const result = tasks.filter((el, index) => index !== ind);
    this.setState({
      tasks: result,
    });
  };

  render() {
    const { inputVal, tasks } = this.state;
    console.log(tasks);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <div style={{ width: 450 }}>
          <InputGroup className="mb-0">
            <FormControl
              onChange={this.handleChange}
              placeholder="write somethig to do..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={inputVal}
            />

            <InputGroup.Append>
              <Button
                disabled={!inputVal.trim() && true}
                onClick={this.addTask}
                variant="primary"
              >
                Add to Do
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div>
          <Tasks
            handleDelete={this.handleDelete}
            handleCheck={this.handleCheck}
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
}

export default ToDoMain;
