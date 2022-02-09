import { Component } from "react";
import "./add-list.css";

class AddList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="task-list">
        <div>
          <span>go to work</span>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm">
            <i className="fas fa-edit"></i>
          </button>

          <button type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default AddList;
