import { Component } from "react";
import "./add-list.css";

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      almost: false,
    };
  }

  onComplete = () => {
    this.setState(({ complete }) => ({
      complete: !complete,
    }));
  };

  onAlmost = () => {
    this.setState(({ almost }) => ({
      almost: !almost,
    }));
  };

  render() {
    const { taskName, onDelete } = this.props;
    const { complete, almost } = this.state;
    let classNames = "task-list";
    let classes = "fas fa-star";
    if (complete) {
      classNames += " complete";
    }
    if (almost) {
      classes += " almost";
    }
    return (
      <li className={classNames}>
        <div>
          <span onClick={this.onAlmost}>{taskName}</span>
        </div>
        <div>
          <button
            type="button"
            className="btn-check btn-sm btn-son1"
            onClick={this.onComplete}
          >
            <i class="bi bi-check-lg">С</i>
          </button>
          <button type="button" className="btn-cookie btn-sm btn-son2">
            <i className="fas fa-edit"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm btn-son3"
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className={classes}></i>
        </div>
      </li>
    );
  }
}

export default AddList;
