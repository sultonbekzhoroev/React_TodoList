import { Component } from "react";
import AppInfo from "../app-info/app-info";
import AddTask from "../add-task/add-task";
import TaskList from "../task-list/task-list";
import AppFilter from "../app-filter/app-filter";
import Header from "../header/header";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { taskName: "Go to school", complete: false, almost: false, id: 1 },
        { taskName: "Go shopping", complete: true, almost: false, id: 2 },
        { taskName: "Do sport", complete: false, almost: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (taskName) => {
    const newItem = {
      taskName,
      complete: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div>
          <AddTask onAdd={this.addItem} />
          <AppFilter />
        </div>
        <TaskList data={this.state.data} onDelete={this.deleteItem} />
        <Header />
      </div>
    );
  }
}

export default App;
