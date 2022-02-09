import { Component } from "react";
import "./add-task.css";

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      addInput: "",
    };
  }
  render() {
    const { addInput } = this.state;
    return (
      <div className="add-task">
        <h3>Add your new task</h3>
        <form className="add-form">
          <input
            type="text"
            className="add-input"
            placeholder="write here...."
            name="addInput"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
