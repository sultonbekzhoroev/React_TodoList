import { Component } from "react";
import AppInfo from "../app-info/app-info";
import AddTask from "../add-task/add-task";
import AddList from "../add-list/add-list";
import Header from "../header/header";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { taskName: "Go to work", id: 1 },
        { taskName2: "Go shopping", id: 2 },
        { taskName3: "Do sport", id: 3 },
      ],
    };
  }
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div>
          <AddTask />
        </div>
        <AddList />
        <AddList />
        <AddList />
        <Header />
      </div>
    );
  }
}

export default App;
